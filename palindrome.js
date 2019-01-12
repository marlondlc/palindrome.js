function isPalindrome(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  //console.log(noSpaces,str)
  var mid = Math.floor(noSpaces.length / 2);
  //foo: 3(letter)/2 = 1.5 (round down)-->1
  //another example food: 4 / 2 = 2 ---> 2
  var last = noSpaces.length - 1;
  // -1 (keep in mind) that index start at 0 this is why you minus 1
  //str --- Kayak
  //k a y a k
  //0 1 2 3 4

  //noSpaces --> kayak
  //mid -->5 /2 --->2
  //last -->5-1 --> 4

  //1st loop:
  // i -->0
  //str[0]--> k
  //str[4-0]--> k

  //2nd loop:
  // i -->1
  //last --> 4
  //str[4-1]--> str[3]--->a


  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) return false;
  }
  return true
}


// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);


/*function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[last - i]) return false;
  }
}
*/