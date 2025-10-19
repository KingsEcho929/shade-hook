// src/mutations/useGlyph.ts
export const useGlyph = (signal?: any) => {
  return {
    glyph: true,
    shimmer: signal?.shimmer || false,
    vanished: signal?.vanished || false,
    timestamp: Date.now(),
  };
};
