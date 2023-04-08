var arr = [10, -5, 6, 28, 56, 12, 456];

function largestValue(largest, curr) {

    if(largest < curr) largest = curr;

    return largest;
}


let ans = arr.reduce(largestValue);
console.log(ans);
