function Iteration3() {

    for (i = 1; i < 101; i++) {

        if (i % 3 == 0 && i % 5 == 0) {

            window.alert("FizzBuzz");
        }
        else if (i % 3 == 0) {
            window.alert("Fizz");
        }
        else if (i % 5 == 0) {

            window.alert("Buzz");
        }
        else {
            window.alert(i);
        }
    }
}
Iteration3();  