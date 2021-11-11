function sum(num1, num2){
    return num1 + num2
}
var result = sum(10, 25)
console.log(result)


function max(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
var result = max(1, 3, 7)
console.log(result)


function evenOdd(num){
    if(num % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}
var result = evenOdd(25)