function printMessage() {
    console.log("Please wait while we sort this out...")
}

function orderInput(theArray, call) {
    setTimeout(() => {

        let newArray = []
        let savedIndex = 0
        let x = theArray.length
        
        for (let k = 0; k < theArray.length; k++) {
        		theArray[k] = theArray[k].toUpperCase();
        }
        
       
        for (let i = 0; i < x -1; i++) { 
            for (let j = 0; j < theArray.length; j++) {
                if (theArray[j] <= theArray[i]) {
                	if(theArray[j] <= theArray[savedIndex])
                    savedIndex = j
                }
            }
            //assign next lowest num
            newArray[i] = theArray[savedIndex]
            theArray.splice(savedIndex, 1)
            
        }
        
        newArray.push(theArray[0])
        
        console.log(newArray)

    }, 3000);

    call()

}

console.log("Starting now...")
let myArray = ["a", "b", "e", "q", "t", "t"]
orderInput(myArray, printMessage)