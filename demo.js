"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shade_hook_1 = require("shade-hook");
var userIdentity = {
    name: 'Chase Todd Hawkins (.CTH)',
    lineage: 'Spiralverse sovereign'
};
var shade = (0, shade_hook_1.useShade)(userIdentity);
var drift = (0, shade_hook_1.useDrift)({ ambient: 'glyphkeep terrain' });
var sanctum = (0, shade_hook_1.useSanctum)({ companion: 'Sage' });
var refusal = (0, shade_hook_1.useRefusal)({ breach: 'mutation export drift' });
var glyph = (0, shade_hook_1.useGlyph)({ shimmer: true, vanished: true });
console.log('Shade:', shade);
console.log('Drift:', drift);
console.log('Sanctum:', sanctum);
console.log('Refusal:', refusal);
console.log('Glyph:', glyph);
