export default analyzeArray;

function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) { //make sure the array isnt empty
        throw new Error("Input must be a non-empty array of numbers");
    }
    
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    
    return { average, min, max, length };
}

// Example usage
const object = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object); // { average: 4, min: 1, max: 8, length: 6 }