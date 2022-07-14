export const getActiveRule = (c: string) => location.hash.startsWith(c);

export default { getActiveRule };
