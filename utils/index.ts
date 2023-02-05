export const getRangeArray = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step as number)