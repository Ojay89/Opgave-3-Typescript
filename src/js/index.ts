
let input: string = "";
let textInput: HTMLInputElement = <HTMLInputElement>document.getElementById("textInput");
let textOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("textOutput");


let showItButton: HTMLInputElement = <HTMLInputElement>document.getElementById("doItButton");
showItButton.addEventListener("click", showWords)

let changeToUpperCase: HTMLInputElement = <HTMLInputElement>document.getElementById("toUpperCase");
changeToUpperCase.addEventListener("click", upper)

let ChangeToLowerCase: HTMLInputElement = <HTMLInputElement>document.getElementById("toLowerCase");
ChangeToLowerCase.addEventListener("click", lower)

// let doItButton: HTMLInputElement = <HTMLInputElement>document.getElementById("doItButton");
// doItButton.addEventListener("click", SaveWords)

function showWords(): void {
    
    let userinput: string = textInput.value
    let input = userinput;

    if (input.length > 0) {
    textOutput.innerHTML = String(input);
    }
    else {
    textOutput.innerHTML = "<i>Empty<i>";
    }
}


function upper(): void {
    let userinput: string = textInput.value
    let input = userinput;

    if(changeToUpperCase) {
    String (input).toUpperCase;
    }
}

function lower(): void {
    
    
}

// function SaveWords(): void {
//     let textInput: HTMLInputElement = <HTMLInputElement>document.getElementById("textInput");
//     let userinput: string = textInput.value;
//     words.push(userinput);
// }



