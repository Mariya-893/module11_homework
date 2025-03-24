const power = (x, n) => {
    return n === 0 ? 1 : x * power(x, n - 1);
};

