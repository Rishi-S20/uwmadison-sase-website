import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Claude Code skill tooling, not app source:
    ".claude/**",
    // Vendored React Bits registry components (installed via shadcn CLI):
    "components/CircularText.tsx",
    "components/SplitText.tsx",
    "components/ScrollReveal.tsx",
    "components/MagicBento.tsx",
    "components/ClickSpark.tsx",
    "components/Magnet.tsx",
    "components/ScrollVelocity.tsx",
    "components/TargetCursor.tsx",
    "components/CountUp.tsx",
    "components/GlassSurface.tsx",
    "components/FlowingMenu.tsx",
    "components/Orb.tsx",
    "components/ShinyText.tsx",
    "components/GradualBlur.tsx",
    "components/ChromaGrid.tsx",
    "components/CircularGallery.tsx",
    "components/DotGrid.tsx",
    "components/FaultyTerminal.tsx",
    "components/ui/split-flap-display.tsx",
  ]),
]);

export default eslintConfig;
