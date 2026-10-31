import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

import App from "./src/App";

export async function prerender(data) {
  const url = data.url || "/";
  const is404 = url === "/404";

  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );

  return {
    html,
    head: {
      lang: "en",
      ...(is404 && {
        title: "404 | Nethan Bagasbas",
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
