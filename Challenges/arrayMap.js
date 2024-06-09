function hasContiguousSubarray(arr, target) {
    let initial = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        while (currentSum > target && initial <= i) {
            currentSum -= arr[initial];
            initial++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarray(arr, target));  
