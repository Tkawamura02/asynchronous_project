function sortlist() { //you need to recieve a function as an argument
  var input = document.getElementById('userinput').value;
  var splitinput = input.split(',');
  var str = splitinput.push();
	splitinput.sort();
  appendlist(splitinput); //then call the function using the arg
} 

function appendlist(splitinput) {
    document.getElementById('output').innerHTML = splitinput;
}

function printMessage() { //Cole
  document.getElementById('output2').innerHTML = "Please wait while we sort this out...";
}

function orderInput(theArray, call) { //Cole
  setTimeout(() => {

      let newArray = []
      
      for (let k = 0; k < theArray.length; k++) {
          theArray[k] = theArray[k].toUpperCase();
      }
      
      while (theArray.length > 0) {
      	let i = 0;
        let min = "z";
        let savedIndex = 0;
        let size = theArray.length;
        
        while (i < size) { 
        	if (theArray[i] < min) {
          	min = theArray[i];
            savedIndex = i;
          }
          i++;
        }
        newArray.push(min);
        theArray.splice(savedIndex, 1)
      }
      document.getElementById('output2').innerHTML = newArray.toString();
  }, 3000);

  call()

}

function loadArray() { //Cole
	document.getElementById('output2').innerHTML = '';
	var input = document.getElementById('userinput').value;
  var splitinput = input.split(',');
  if (splitinput < 2) {
    document.getElementById('output2').innerHTML = 'Enter more values seperated by commas';
    return null;
  }
  orderInput(splitinput, printMessage)
}
