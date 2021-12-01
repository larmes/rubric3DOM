let name = prompt ("What is your name?");
let age = prompt ("What is your age?");

document.getElementById("name").innerHTML = " Name: " + name;
document.getElementById("age").innerHTML = " Age: " + age;

let pTag = document.getElementsByTagName("P");
document.getElementById("pCount").innerHTML = "P count: " + pTag.length;


let button = document.createElement ("BUTTON");
button.innerHTML = "Start Here";
button.setAttribute("id","message")
document.body.appendChild(button);

document.getElementById("message").addEventListener("click", function(){
    let h1 = document.createElement("H1");
let not21 = document.createTextNode("You are not 21!");
let userIs21 = document.createTextNode("Granted Access!");
if(parseInt(age) < 21) {
    h1.appendChild(not21)
    document.body.appendChild(h1)
}
else{ 
    h1.appendChild(userIs21)
    document.body.appendChild(h1)
}
    
})
