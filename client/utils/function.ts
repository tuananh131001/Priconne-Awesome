export const generateNonce = () => {
    return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
  };
  