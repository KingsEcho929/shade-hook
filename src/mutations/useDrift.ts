export const useDrift = (ambient: any) => {
  return {
    drift: true,
    shimmer: ambient?.shimmer || 'unknown',
    timestamp: Date.now(),
  };
};
