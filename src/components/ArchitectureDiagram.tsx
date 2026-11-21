import { type KeyboardEvent, useId, useRef, useState } from "react";

export interface DiagramNode {
  id: string;
  label: string;
  lines: string[];
  detail: string;
  col: number;
  row: number;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  ariaLabel: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

interface DesktopRect {
  x: number;
  y: number;
  w: number;
  h: number;
  cx: number;
  cy: number;
}

const DESKTOP_W = 880;
const NODE_W = 220;
const NODE_H = 66;
const COL_GAP = 80;
const ROW_GAP = 68;
const MARGIN_X = 30;
const MARGIN_Y = 28;

const MOBILE_W = 326;
const M_NODE_X = 18;
const M_NODE_W = 250;
const M_NODE_H = 56;
const M_STEP_Y = 94;
const M_MARGIN_Y = 16;

function getDesktopRect(node: DiagramNode): DesktopRect {
  const x = MARGIN_X + node.col * (NODE_W + COL_GAP);
  const y = MARGIN_Y + node.row * (NODE_H + ROW_GAP);
  return {
    x,
    y,
    w: NODE_W,
    h: NODE_H,
    cx: x + NODE_W / 2,
    cy: y + NODE_H / 2,
  };
}

function getDesktopEdgeGeometry(
  source: DesktopRect,
  target: DesktopRect,
  sourceNode: DiagramNode,
  targetNode: DiagramNode,
): { d: string; labelX: number; labelY: number; labelAnchor: "middle" | "start" } {
  const arrowPad = 6;

  // Same row, left to right
  if (sourceNode.row === targetNode.row && sourceNode.col < targetNode.col) {
    const x1 = source.x + source.w;
    const x2 = target.x - arrowPad;
    const y = source.cy;
    return {
      d: `M ${x1} ${y} H ${x2}`,
      labelX: Math.round((x1 + x2) / 2),
      labelY: y - 9,
      labelAnchor: "middle",
    };
  }

  // Same row, right to left
  if (sourceNode.row === targetNode.row && sourceNode.col > targetNode.col) {
    const x1 = source.x;
    const x2 = target.x + target.w + arrowPad;
    const y = source.cy;
    return {
      d: `M ${x1} ${y} H ${x2}`,
      labelX: Math.round((x1 + x2) / 2),
      labelY: y - 9,
      labelAnchor: "middle",
    };
  }

  // Same column, top to bottom
  if (sourceNode.col === targetNode.col && sourceNode.row < targetNode.row) {
    const x = source.cx;
    const y1 = source.y + source.h;
    const y2 = target.y - arrowPad;
    return {
      d: `M ${x} ${y1} V ${y2}`,
      labelX: x + 10,
      labelY: Math.round((y1 + y2) / 2) + 4,
      labelAnchor: "start",
    };
  }

  // Same column, bottom to top
  if (sourceNode.col === targetNode.col && sourceNode.row > targetNode.row) {
    const x = source.cx;
    const y1 = source.y;
    const y2 = target.y + target.h + arrowPad;
    return {
      d: `M ${x} ${y1} V ${y2}`,
      labelX: x + 10,
      labelY: Math.round((y1 + y2) / 2) + 4,
      labelAnchor: "start",
    };
  }

  // Different column and different row: crisp right-angle bend down then horizontal
  const goingRight = sourceNode.col < targetNode.col;
  const x1 = source.cx;
  const y1 = sourceNode.row < targetNode.row ? source.y + source.h : source.y;
  const y2 = target.cy;
  const x2 = goingRight ? target.x - arrowPad : target.x + target.w + arrowPad;

  return {
    d: `M ${x1} ${y1} V ${y2} H ${x2}`,
    labelX: Math.round((x1 + x2) / 2),
    labelY: y2 - 9,
    labelAnchor: "middle",
  };
}

export default function ArchitectureDiagram({
  ariaLabel,
  nodes,
  edges,
}: ArchitectureDiagramProps) {
  const [selectedId, setSelectedId] = useState<string>(nodes[0]?.id ?? "");
  const desktopNodeRefs = useRef<Array<SVGGElement | null>>([]);
  const mobileNodeRefs = useRef<Array<SVGGElement | null>>([]);
  const markerPrefix = useId().replace(/:/g, "");

  const selectedNode = nodes.find((n) => n.id === selectedId) ?? nodes[0];

  const connectedNodeIds = new Set<string>([selectedId]);
  edges.forEach((edge) => {
    if (edge.from === selectedId) connectedNodeIds.add(edge.to);
    if (edge.to === selectedId) connectedNodeIds.add(edge.from);
  });

  const maxRow = Math.max(...nodes.map((n) => n.row), 0);
  const desktopH = MARGIN_Y * 2 + (maxRow + 1) * NODE_H + maxRow * ROW_GAP;
  const mobileH = M_MARGIN_Y * 2 + (nodes.length - 1) * M_STEP_Y + M_NODE_H;

  const nodeMap = new Map(nodes.map((n, index) => [n.id, { node: n, index }]));

  const handleKeyDown = (
    event: KeyboardEvent<SVGGElement>,
    index: number,
    layout: "desktop" | "mobile",
  ) => {
    const refs =
      layout === "desktop" ? desktopNodeRefs.current : mobileNodeRefs.current;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (index + 1) % nodes.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (index - 1 + nodes.length) % nodes.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = nodes.length - 1;
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedId(nodes[index].id);
      return;
    }

    if (nextIndex !== null) {
      setSelectedId(nodes[nextIndex].id);
      refs[nextIndex]?.focus();
    }
  };

  let sideLaneCount = 0;

  return (
    <div className="rounded-[6px] border border-border bg-surface overflow-hidden">
      {/* Desktop horizontal orthographic SVG */}
      <div className="hidden sm:block p-5 sm:p-7">
        <svg
          viewBox={`0 0 ${DESKTOP_W} ${desktopH}`}
          className="block w-full h-auto"
          role="group"
          aria-label={ariaLabel}
        >
          <defs>
            <marker
              id={`${markerPrefix}-arrow-muted`}
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 7 4 L 0 7 z" fill="var(--ink-muted)" />
            </marker>
            <marker
              id={`${markerPrefix}-arrow-active`}
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 7 4 L 0 7 z" fill="var(--ink)" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map((edge) => {
            const fromEntry = nodeMap.get(edge.from);
            const toEntry = nodeMap.get(edge.to);
            if (!fromEntry || !toEntry) return null;

            const isConnected =
              edge.from === selectedId || edge.to === selectedId;
            const geom = getDesktopEdgeGeometry(
              getDesktopRect(fromEntry.node),
              getDesktopRect(toEntry.node),
              fromEntry.node,
              toEntry.node,
            );

            return (
              <g
                key={`${edge.from}-${edge.to}`}
                className="transition-opacity duration-150 motion-reduce:transition-none"
                style={{
                  opacity: isConnected ? 1 : 0.2,
                }}
              >
                <path
                  d={geom.d}
                  fill="none"
                  stroke={isConnected ? "var(--ink)" : "var(--ink-muted)"}
                  strokeWidth={isConnected ? 1.5 : 1}
                  markerEnd={`url(#${markerPrefix}-arrow-${isConnected ? "active" : "muted"})`}
                />
                {edge.label ? (
                  <text
                    x={geom.labelX}
                    y={geom.labelY}
                    textAnchor={geom.labelAnchor}
                    fill={isConnected ? "var(--ink)" : "var(--ink-muted)"}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: isConnected ? 500 : 400,
                    }}
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node, index) => {
            const rect = getDesktopRect(node);
            const isSelected = node.id === selectedId;
            const isNeighbor = !isSelected && connectedNodeIds.has(node.id);
            const lineHeight = 16;
            const firstLineY =
              node.lines.length === 1
                ? rect.cy + 4
                : rect.cy - lineHeight / 2 + 4;

            return (
              <g
                key={node.id}
                ref={(el) => {
                  desktopNodeRefs.current[index] = el;
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={node.label}
                onClick={() => setSelectedId(node.id)}
                onMouseEnter={() => setSelectedId(node.id)}
                onFocus={() => setSelectedId(node.id)}
                onKeyDown={(event) => handleKeyDown(event, index, "desktop")}
                className="diagram-node cursor-pointer outline-none"
              >
                <rect
                  x={rect.x - 4}
                  y={rect.y - 4}
                  width={rect.w + 8}
                  height={rect.h + 8}
                  rx={6}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth={2}
                  className="diagram-focus-ring opacity-0 pointer-events-none"
                />
                <rect
                  x={rect.x}
                  y={rect.y}
                  width={rect.w}
                  height={rect.h}
                  rx={4}
                  fill={isSelected ? "var(--ink)" : "var(--bg)"}
                  stroke={
                    isSelected
                      ? "var(--ink)"
                      : isNeighbor
                        ? "var(--border-strong)"
                        : "var(--border)"
                  }
                  strokeWidth={isSelected ? 1.5 : isNeighbor ? 1.25 : 1}
                />
                <text
                  x={rect.cx}
                  y={firstLineY}
                  textAnchor="middle"
                  fill={
                    isSelected
                      ? "var(--bg)"
                      : isNeighbor
                        ? "var(--ink)"
                        : "var(--ink-secondary)"
                  }
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12.5px",
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {node.lines.map((line, lineIndex) => (
                    <tspan
                      key={line}
                      x={rect.cx}
                      dy={lineIndex === 0 ? 0 : lineHeight}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile vertical top-to-bottom SVG */}
      <div className="block sm:hidden p-4">
        <svg
          viewBox={`0 0 ${MOBILE_W} ${mobileH}`}
          className="block w-full h-auto"
          role="group"
          aria-label={ariaLabel}
        >
          <defs>
            <marker
              id={`${markerPrefix}-m-arrow-muted`}
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 7 4 L 0 7 z" fill="var(--ink-muted)" />
            </marker>
            <marker
              id={`${markerPrefix}-m-arrow-active`}
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 7 4 L 0 7 z" fill="var(--ink)" />
            </marker>
          </defs>

          {/* Mobile edges */}
          {edges.map((edge) => {
            const fromEntry = nodeMap.get(edge.from);
            const toEntry = nodeMap.get(edge.to);
            if (!fromEntry || !toEntry) return null;

            const isConnected =
              edge.from === selectedId || edge.to === selectedId;
            const i = fromEntry.index;
            const j = toEntry.index;
            const cx = M_NODE_X + M_NODE_W / 2;

            let d: string;
            let labelX: number;
            let labelY: number;

            if (j === i + 1) {
              const y1 = M_MARGIN_Y + i * M_STEP_Y + M_NODE_H;
              const y2 = M_MARGIN_Y + j * M_STEP_Y - 6;
              d = `M ${cx} ${y1} V ${y2}`;
              labelX = cx + 10;
              labelY = Math.round((y1 + y2) / 2) + 4;
            } else {
              const lane = sideLaneCount++;
              const channelX = Math.min(286 + lane * 14, MOBILE_W - 8);
              const y1 = M_MARGIN_Y + i * M_STEP_Y + M_NODE_H / 2;
              const y2 = M_MARGIN_Y + j * M_STEP_Y + M_NODE_H / 2;
              const rightEdge = M_NODE_X + M_NODE_W;
              d = `M ${rightEdge} ${y1} H ${channelX} V ${y2} H ${rightEdge + 6}`;
              labelX = -1;
              labelY = -1;
            }

            return (
              <g
                key={`m-${edge.from}-${edge.to}`}
                className="transition-opacity duration-150 motion-reduce:transition-none"
                style={{
                  opacity: isConnected ? 1 : 0.2,
                }}
              >
                <path
                  d={d}
                  fill="none"
                  stroke={isConnected ? "var(--ink)" : "var(--ink-muted)"}
                  strokeWidth={isConnected ? 1.5 : 1}
                  markerEnd={`url(#${markerPrefix}-m-arrow-${isConnected ? "active" : "muted"})`}
                />
                {edge.label && labelX >= 0 ? (
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="start"
                    fill={isConnected ? "var(--ink)" : "var(--ink-muted)"}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: isConnected ? 500 : 400,
                    }}
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}

          {/* Mobile nodes */}
          {nodes.map((node, index) => {
            const y = M_MARGIN_Y + index * M_STEP_Y;
            const cx = M_NODE_X + M_NODE_W / 2;
            const cy = y + M_NODE_H / 2;
            const isSelected = node.id === selectedId;
            const isNeighbor = !isSelected && connectedNodeIds.has(node.id);
            const lineHeight = 15;
            const firstLineY =
              node.lines.length === 1 ? cy + 4 : cy - lineHeight / 2 + 4;

            return (
              <g
                key={`m-${node.id}`}
                ref={(el) => {
                  mobileNodeRefs.current[index] = el;
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={node.label}
                onClick={() => setSelectedId(node.id)}
                onFocus={() => setSelectedId(node.id)}
                onKeyDown={(event) => handleKeyDown(event, index, "mobile")}
                className="diagram-node cursor-pointer outline-none"
              >
                <rect
                  x={M_NODE_X - 4}
                  y={y - 4}
                  width={M_NODE_W + 8}
                  height={M_NODE_H + 8}
                  rx={6}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth={2}
                  className="diagram-focus-ring opacity-0 pointer-events-none"
                />
                <rect
                  x={M_NODE_X}
                  y={y}
                  width={M_NODE_W}
                  height={M_NODE_H}
                  rx={4}
                  fill={isSelected ? "var(--ink)" : "var(--bg)"}
                  stroke={
                    isSelected
                      ? "var(--ink)"
                      : isNeighbor
                        ? "var(--border-strong)"
                        : "var(--border)"
                  }
                  strokeWidth={isSelected ? 1.5 : isNeighbor ? 1.25 : 1}
                />
                <text
                  x={cx}
                  y={firstLineY}
                  textAnchor="middle"
                  fill={
                    isSelected
                      ? "var(--bg)"
                      : isNeighbor
                        ? "var(--ink)"
                        : "var(--ink-secondary)"
                  }
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {node.lines.map((line, lineIndex) => (
                    <tspan
                      key={line}
                      x={cx}
                      dy={lineIndex === 0 ? 0 : lineHeight}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom engineering tradeoff readout */}
      <div
        className="border-t border-border bg-bg px-4 py-4 sm:px-6"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="mono-data m-0 font-medium text-ink">
            {selectedNode?.label}
          </p>
          <p className="m-0 text-[0.8125rem] text-ink-muted">
            Select or tab nodes to inspect connected paths
          </p>
        </div>
        <p className="mt-1.5 mb-0 text-[0.90625rem] leading-[1.6] text-ink-secondary text-pretty">
          {selectedNode?.detail}
        </p>
      </div>
    </div>
  );
}
