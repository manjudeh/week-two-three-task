<!-- Check if a string (first argument => str) ends with the given target string (second argument => target). 
Return true if the first argument ends with the second argument. return false if it doesn't

confirmEnding("Bastian", "n") => true
confirmEnding("Congratulation", "on") => true
confirmEnding("Connor", "n") => false -->



function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding('Bastian', 'n');
