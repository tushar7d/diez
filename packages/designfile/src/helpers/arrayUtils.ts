export const chunk = <T>(arr: T[], chunkSize: number) => {
  const temp = arr.slice(0);
  const results = [];

  while (temp.length) {
    results.push(temp.splice(0, chunkSize));
  }

  return results;
};
