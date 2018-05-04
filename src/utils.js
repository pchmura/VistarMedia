export const generateNumber = (upperBound=10, lowerBound=0) => {
    return Math.floor(Math.random() * (upperBound - lowerBound) + (lowerBound + 1));
  }