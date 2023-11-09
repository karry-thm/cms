import { createDirectus } from "@directus/sdk";
import { rest } from "@directus/sdk/rest";
import { DIRECTUS_URL } from "./params";

const directusRestClient = createDirectus(DIRECTUS_URL).with(rest())

export default directusRestClient;