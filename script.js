function sortlist(splitinput, call) { //tiffany
    setTimeout(()=> {
      splitinput.sort();
      document.getElementById('output').innerHTML = splitinput;
      //then call the function using the arg
    }, 3000);
    
    call()
  } 
  
  function appendlist() { //tiffany
          var input = document.getElementById('userinput').value;
      var splitinput = input.split(',');
      for(let i = 0; i<splitinput.length; i++) {
        splitinput[i] = splitinput[i].toString().trim();
      }
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
    
    console.log(splitinput);
    for(let i = 0; i<splitinput.length; i++) {
      splitinput[i] = splitinput[i].toString().trim();
    }
    console.log("after " + splitinput);

    if (splitinput < 2) {
      document.getElementById('output2').innerHTML = 'Enter more values seperated by commas';
      return null;
    }
    orderInput(splitinput, printMessage)
  }