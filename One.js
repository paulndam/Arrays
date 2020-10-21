// creating arrays from strings

var sentence = "messi is the best and the greatest football player of all times";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++){
    console.log("Word - " + i + " :-> " + words[i]);
}


var players = ["eto'o", "messi", "deco", "iniesta", "xavi", "valdez"];
var name = "messi"
var position = players.indexOf(name);
if (position >= 0) {
    console.log("Found " + name + " at position " + position);
}
else {
    console.log(name + "Not found");
}


// concat function

var eplTeams = ["manU", "arsenal", "liverpool", "westham"];
var laLiga = ["barca", "madrid", " athletico", "sevilla"];
var Div = eplTeams.concat(laLiga);

console.log(Div);
Div = laLiga.concat(eplTeams);
console.log(Div);


// Splice function

var seriaA = ["juv", "inter", "acMillan", "lazio", "roma", "Napoli"]
var cup = seriaA.splice(3, 3);
var tournament = seriaA;
console.log(cup);
console.log(tournament);



var nums = [1, 2, 3, 4, 5, 6]
nums.push(7);
console.log(nums);

var x = [2, 3, 4, 5, 6, 7, 8]
var newX = 9;
x.unshift(newX);
console.log(x);




