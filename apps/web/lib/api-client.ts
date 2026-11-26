import { createApiClient } from "@repo/treaty";

const WEB_SERVER_URL = process.env.WEB_SERVER_URL;

export const apiClient = createApiClient(WEB_SERVER_URL!);
