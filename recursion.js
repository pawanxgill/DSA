const recursiveFactorial = (n) => {
    if (n === 0) {
      return 1;
    } else if (n > 0) {
      return n * recursiveFactorial(n - 1);
    }
  }