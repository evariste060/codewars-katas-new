// function largestPower(n){
//     let k = n;
//     let result = null //n.Math.pow(3,k)
//     let isTrue = true;
//     let answer = 0;
//     while(isTrue){
//         result = Math.pow(3,k)
//         if(result<=n) {
//             answer = k;
//             isTrue = false
//         }
//         k--
//     }
//     return answer;
// }
// console.log(largestPower(8))
function largestPower(n) {
    let k = 0;
    while (Math.pow(3, k +1) < n) {
        k++;
    }
    return k;
}
console.log(largestPower(3)); // Output: 1, because 3^1 = 3 <= 4, but 3^2 = 9 > 4