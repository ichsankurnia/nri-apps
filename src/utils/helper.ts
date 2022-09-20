export const splitInto4Data = (array: any[]) => {
  const chunkSize = 4;
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk)
  }

  return result
}