function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

export {factorial, combination, permutation};