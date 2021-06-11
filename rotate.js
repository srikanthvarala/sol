function rotate(arr,d,n) {
    if (d > n) {
        d = d % n;
    }
    let s = arr.slice(0,d);
    let r = arr.slice(d,);
    return r + s;
}
let arr = [1,2,3,4,5];
let d = 2;
let n = 5;
console.log(rotate(arr,d,n));