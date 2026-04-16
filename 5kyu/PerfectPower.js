function isPP(n) {
    if (n < 4) return null; 
    const maxK = Math.floor(Math.log2(n));
    for (let k = 2; k <= maxK; k++) {
        let m = Math.round(Math.pow(n, 1 / k));
        if (Math.pow(m, k) === n) {
            return [m, k]; 
        }
    }
    return null;
}