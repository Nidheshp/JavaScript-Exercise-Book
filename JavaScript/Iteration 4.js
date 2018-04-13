function Iteration4() {

    var n = document.getElementById("Enter a number").value;
    var count= 0
    
    while (n != 1) {
        
        if (n % 3 == 0) {
            
            n = n/3;
            count++
            console.log(n);
        }
        
        else if ((n+1) % 3 == 0) {

            n = n + 1;
            console.log(n);
            count ++
        }

        else {

            n = n - 1;
            count++
            console.log(n);
            
        }

    }
    console.log("Number of Iterations: " + count)
}