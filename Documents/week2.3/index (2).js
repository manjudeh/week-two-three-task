function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
 alert(true);
    } else {
  alert(false);
    }
  }
 

  confirmEnding("congratulation", "fo");
  confirmEnding("connor", "n");
  confirmEnding("Bastain", "n");
 
