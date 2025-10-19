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

console.log('Shade:', shade);
console.log('Drift:', drift);
console.log('Sanctum:', sanctum);
console.log('Refusal:', refusal);
console.log('Glyph:', glyph);
