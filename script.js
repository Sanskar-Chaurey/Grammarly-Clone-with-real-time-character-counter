const charval = document.getElementById("textarea");

let totalCount = document.getElementById("total-counter");

let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;

// to update the character on screen

const updateCounter = () => {

    userChar = charval.value.length;

    totalCount.innerText = userChar;

    remainingCount.innerText = 250 - userChar;

};

charval.addEventListener("keyup", () => updateCounter());

// copytext code 
const copyText = () => {

    charval.select();
    
    charval.setSelectionRange(0, 999999); // mobile me bhi run krega
    
    navigator.clipboard.writeText(charval.value);  // imp copy text
}

