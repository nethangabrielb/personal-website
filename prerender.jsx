import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

import { SectionProvider } from "./src/CurrentSectionProvider";
import App from "./src/App";
import { ThemeProvider } from "./src/lib/theme";

export async function prerender(data) {
  const url = data.url || "/";
  const is404 = url === "/404";

  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <SectionProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SectionProvider>
    </MemoryRouter>,
  );

  return {
    html,
    head: {
      lang: "en",
      ...(is404 && {
        title: "404 — Page Not Found | Nethan Bagasbas",
        elements: new Set([
          {
            type: "meta",
            props: { name: "robots", content: "noindex, nofollow" },
          },
        ]),
      }),
    },
  };
}
