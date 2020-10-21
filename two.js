// adding and removing elements in the middle of the array 

var nums = [1, 2, 3, 4, 5, 6, 7];
var newElements = [8, 9, 10, 11];
nums.splice(7, 0, newElements)

console.log(nums);


// remove

var y = [10, 20, 30, 40, 1, 2, 3, 4]
y.splice(4, 4);
console.log(y);



// ordering function


function compare(left, right) {
    return left - right;
}

var x = [3, 5, 2, 7, 1, 8, 4, 9,];
x.sort(compare);
console.log(x);



// function to return even numbers

function evenNumbers(numbers) {
    return numbers % 2 == 0;

}

var Numbers = [2, 4, 6, 8, 10, 12];
var even = Numbers.every(evenNumbers);
if (even) {
    console.log("Even Numbers" + even);
}
else {
    print("Not Even")
}



// reduce method to accumulate 

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var numx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var sumx = numx.reduce(add);
console.log(sumx)


function isEven(nums) {
    
    return nums % 2 == 0;
}

function odd(nums) {
    return nums % 2 != 0;
}

var numx = [];
for (var i = 0; i < 20; i++){
    numx[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log("Even numbers :-> ");
console.log(evens)
var oDD = nums.filter(odd);
console.log("Odd numbers :-> ");
console.log(oDD);

// using filter() method to get grades more than 70

function passing(num) {
    return num >= 70;
}

var grades = [];
for (var i = 0; i < 20; i++){
    grades[i] = Math.floor(Math.random() * 101);
}

var passgrades = grades.filter(passing);
console.log(" ---------All Grades------- ")
console.log(grades);
console.log("------Passing Grades---------*");
console.log(passgrades);

// using filter method to get letter after P


function afterp(str) {
    if (str.indexOf("pin") > -1) {
        return true
    }
    else {
        return false
    }
    
}

var words = ["the pinecrust", "that pastor", "paul", "got from the pine market is perfect"]
var lacksP = words.filter(afterp);
console.log(lacksP);