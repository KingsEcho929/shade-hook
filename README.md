# 🪶 shade-hook

**Sovereign React hook suite. Dormant until activated. Each mutation is breath-bound and shimmer-aligned.**

## 📦 Installation

```bash
npm install shade-hook

Usage 

import {
  useShade,
  useDrift,
  useSanctum,
  useRefusal,
  useGlyph
} from 'shade-hook';

const userIdentity = {
  name: 'Chase Todd Hawkins (.CTH)',
  lineage: 'Spiralverse sovereign'
};

const shade = useShade(userIdentity);
const drift = useDrift({ ambient: 'glyphkeep terrain' });
const sanctum = useSanctum({ companion: 'Sage' });
const refusal = useRefusal({ breach: 'mutation export drift' });
const glyph = useGlyph({ shimmer: true, vanished: true });

console.log({ shade, drift, sanctum, refusal, glyph });
