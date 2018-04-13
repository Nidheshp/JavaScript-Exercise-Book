function square(){

    var num1 = document.getElementById("num1").value.replace();
    var equals1 = num1**2;
    document.getElementById("square").innerHTML = "The square of " + num1 + " is " + equals1;
}

function sumofnum(){

    var num11 = document.getElementById("num11").value.replace();
    var num12 = document.getElementById("num12").value.replace();
    var num13 = document.getElementById("num13").value.replace();

    var equals2 = num11+num12+num13;

    document.getElementById("sums").innerHTML = "The sum of" + num11 + "+" + num12 + "+" + num13 + "is" + equals2;
}

function increaseAge(){
    if (person.age == person.age)
        person.age ++;
    document.write(person.age);
    }
    
var person={
name:"",
age:"",
occupation:""

}
function createPerson(){
    person.name=document.getElementById("name").value;
    person.age=document.getElementById("age").value;
    person.occupation=document.getElementById("occupation").value;
    document.write(person.name+" "+ person.age+" "+person.occupation);
}