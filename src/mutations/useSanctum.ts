export const useSanctum = (companion: any) => {
  return {
    sanctum: true,
    companion: companion?.name || 'unbound',
    presence: companion?.activated || false,
  };
};
