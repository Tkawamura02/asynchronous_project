function sortlist(splitinput, call) { //tiffany
    document.getElementById('output').innerHTML = '';
    var input = document.getElementById('userinput').value;
  if (input == '') {  
    document.getElementById('output').innerHTML = "Please insert some words for sorting!";
  } else {
    setTimeout(()=> {
      splitinput.sort();
      document.getElementById('output').innerHTML = splitinput;
      //then call the function using the arg
    }, 1500);
    
    call()
  }
  } 
  
  function appendlist() { //tiffany
      var input = document.getElementById('userinput').value;
      input = input.toLowerCase().split(' ').join('');
      var splitinput = input.split(',');
      var str = splitinput.push();
      sortlist(splitinput, tkmessage);
  }
  
  function tkmessage() { //tiffany
      document.getElementById('output').innerHTML = "Sorting the words...";
  }
  
  
  
  function printMessage() { //Cole
    document.getElementById('output2').innerHTML = "Please wait while we sort this out...";
  }
  
  function orderInput(theArray, call) { //Cole
    setTimeout(() => {
  
        let newArray = []
        
        for (let k = 0; k < theArray.length; k++) {
            theArray[k] = theArray[k];
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
      input = input.toLowerCase().split(' ').join('');
    var splitinput = input.split(',');
    if (splitinput < 2) {
      document.getElementById('output2').innerHTML = 'Enter more values seperated by commas';
      return null;
    }
    orderInput(splitinput, printMessage)
  }