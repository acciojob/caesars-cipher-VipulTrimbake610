// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
// console.log(encodedStr);
	for(let i=0;i<str.length;i++){
		if(lookup[str[i]] == undefined){
			decodedArr.push(str[i])
		}
		else{
			decodedArr.push(lookup[str[i]]);
		}
	}
	// console.log(decodedArr.join(""));
  return decodedArr.join(""); //return decodedArr
	
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
let res = rot13("SERR YBIR? NPPVBWBO");
console.log(res);
// Do not change this line
window.rot13 = rot13;
