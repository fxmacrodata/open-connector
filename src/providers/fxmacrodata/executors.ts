import type { CredentialValidators, ProviderExecutors, ProviderProxyExecutor } from "../../core/types.ts";

import { defineProviderExecutors, defineProviderProxy } from "../provider-runtime.ts";
import {
  createFxmacrodataContext,
  fxmacrodataActionHandlers,
  fxmacrodataApiBaseUrl,
  readFxmacrodataError,
  validateFxmacrodataCredential,
} from "./runtime.ts";

const service = "fxmacrodata";

export const executors: ProviderExecutors = defineProviderExecutors({
  service,
  handlers: fxmacrodataActionHandlers,
  createContext: createFxmacrodataContext,
  skipDnsValidation: true,
});

export const proxy: ProviderProxyExecutor = defineProviderProxy({
  service,
  baseUrl: fxmacrodataApiBaseUrl,
  auth: { type: "api_key_header", name: "X-API-Key" },
  readError: readFxmacrodataError,
  skipDnsValidation: true,
});

export const credentialValidators: CredentialValidators = {
  apiKey: validateFxmacrodataCredential,
};
