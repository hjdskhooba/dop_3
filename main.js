let numbers = [1,2,3]

function Array (arr1) {
    if (arr1.length === 0)
        return 0

    let sum = 0

    for (let i = 0;i < arr1.length;i++) {
        sum += arr1[i]
    }
    return sum / arr1.length
}
console.log(Array(numbers));