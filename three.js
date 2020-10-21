//  creating two dimensional arrays

Array.matrix = function (rows, cols, initials) {
    var arr = [];
    for (var i = 0; i < rows; i++){
        var column = []
        for (var j = 0; j < cols; j++){
            column[j] = initials;
        }

        arr[i] = column;
    }
    return arr;
}

var nums = Array.matrix(4, 4, 0);
console.log(nums[1][1]);
var names = Array.matrix(2, 2, "");
names[1][2] = "Dani";
console.log(names[1][2]);


// creating two dimen in one line of code

var scores = [[25, 67, 89], [35, 65, 78], [21, 30, 60]];
console.log(scores[2][2]);



// processing two dimensional arrays.
// this can also be used for an example of a jagged , but just depending on the size of the arrays elements

var score = [[25, 67, 89], [35, 65, 78], [21, 30, 60]];
var total = 0;
var average = 0.0;

for (var row = 0; row < score.length; row++){
    for (var col = 0; col < score[row].length; col++){
        total += score[row][col];

    }
    average = total / score[row].length;
    console.log("Team " + parseInt(row + 1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0.0;
}


