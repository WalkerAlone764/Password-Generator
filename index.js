const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutNumber= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let switchButton = document.querySelector(".switch");
let includeNumber = true

function temp() {
    console.log(includeNumber == true)
    includeNumber = false
}

let pass1 = document.querySelector(".show1");
let pass2 = document.querySelector(".show2");

function getRandomCharacter() {
    if( includeNumber == false ) {
        return charactersWithoutNumber[Math.floor(Math.random() * charactersWithoutNumber.length)]
    } else {
        return characters[Math.floor(Math.random() * characters.length)]
    }
}

function generateRandomPassword() {
    let password = "";
    for(let i=0; i<15; i++) {
        password += getRandomCharacter()
    }
    return password
}

// button.addEventListener("click", function(){
//     pass1.textContent = generateRandomPassword()
//     pass2.textContent = generateRandomPassword()

//     if(pass1) {
//         alert("pass1");
//     } else {
//         alert("not ");
//     }
// });

console.log(pass1)
function showPass() {
    pass1.textContent = generateRandomPassword()
    pass2.textContent = generateRandomPassword()
    
}


function copyToClip(box = "") {
    console.log(box)
    let copyText = ""
    if( box === 'show1') {
        copyText = document.querySelector(".show1");
    } else if(box === 'show2') {
        copyText = document.querySelector(".show2");
    }

  navigator.clipboard.writeText(copyText.textContent);
  alert("Copied the text: " + copyText.textContent);

}