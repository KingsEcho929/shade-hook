export const useRefusal = (breach: any) => {
  return {
    refusal: true,
    breachCode: breach?.code || 'none',
    sealed: Date.now(),
  };
};
