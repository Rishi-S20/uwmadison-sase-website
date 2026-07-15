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
    "components/LaserFlow.tsx",
    "components/ScrollStack.tsx",
    "components/Threads.tsx",
    "components/AnimatedContent.tsx",
    "components/MagnetLines.tsx",
    "components/ui/liquid-blob.tsx",
    "components/GradientText.tsx",
    "components/GlareHover.tsx",
    "components/SpotlightCard.tsx",
    "components/ui/border-beam.tsx",
    "components/ImageTrail.tsx",
    "components/ScrollFloat.tsx",
    "components/BlurText.tsx",
    "components/TextPressure.tsx",
    "components/Shuffle.tsx",
    "components/BounceCards.tsx",
    "components/StickerPeel.tsx",
    "components/DecryptedText.tsx",
    "components/ui/orbit-card-stack.tsx",
    "components/TrueFocus.tsx",
    "components/RotatingText.tsx",
    "components/PillNav.tsx",
    "components/ui/split-flap-display.tsx",
    "components/ui/scroll-morph-hero.tsx",
    "components/ui/smooth-scroll-hero.tsx",
  ]),
]);

export default eslintConfig;
