import { treaty } from "@elysia/eden";
import type { Treaty } from "@elysia/eden/treaty2";
import type { App } from "@repo/api";

const WEB_URL = process.env.WEB_SERVER_URL;

if (!WEB_URL) {
  throw new Error("Missing web server url");
}

export type ApiClient = Treaty.Create<App>;

export const createApiClient = (WEB_URL: string): ApiClient => {
  return treaty<App>(WEB_URL, {
    fetch: { credentials: "include" },
  });
};
