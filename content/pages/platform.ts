/** Re-exports — live copy preserved from prevaylos.com */
export {
  dispatch,
  carriers,
  compliance,
  ai,
  agenticAi,
  businessIntelligence,
  loadOptimizer,
  routeOptimizer,
  flolens,
  pinProtocol,
} from "./platform/index";

import type { MarketingPageContent } from "./types";
import {
  dispatch,
  carriers,
  compliance,
  ai,
  agenticAi,
  businessIntelligence,
  loadOptimizer,
  routeOptimizer,
  flolens,
  pinProtocol,
} from "./platform/index";

export const platformPages: Record<string, MarketingPageContent> = {
  dispatch,
  carriers,
  compliance,
  ai,
  "agentic-ai": agenticAi,
  "business-intelligence": businessIntelligence,
  "load-optimizer": loadOptimizer,
  "route-optimizer": routeOptimizer,
  flolens,
  "pin-protocol": pinProtocol,
};
