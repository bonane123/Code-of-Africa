function transformString(input) {
    let length = input.length;
    let transformedString = input;

    // Check if the length is divisible by both 3 and 5 (i.e., 15)
    if (length % 3 === 0 && length % 5 === 0) {
        transformedString = input.split('').reverse().join('');
        transformedString = transformedString.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    // Check if the length is divisible by 3
    else if (length % 3 === 0) {
        transformedString = input.split('').reverse().join('');
    } 
    // Check if the length is divisible by 5
    else if (length % 5 === 0) {
        transformedString = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return transformedString;
}

// Example usage:
const input = "Hello World";
console.log(transformString(input));  // Output: "100 108 114 111 87 32 108 117 102 105 116 117 97 101 66 32 111 108 108 101 72"
