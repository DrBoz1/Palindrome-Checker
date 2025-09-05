const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindrome = input =>{
    const originalInput = input;

    if(input === ""){
        alert("Please input a value.");
    }

    result.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
    let resultMsg = `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('')?"is":"is not"} a palindrome.`;

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerText = resultMsg;
    result.appendChild(pTag);
}

checkBtn.addEventListener("click",()=>{
    palindrome(userInput.value);
    userInput.value = "";
})

userInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        palindrome(userInput.value);
        userInput.value = "";
    }
})