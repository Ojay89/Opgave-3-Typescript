let textInput: HTMLInputElement = <HTMLInputElement>document.getElementById("textInput");
let textOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("textOutput");
let dropDownElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("dropDown");

let showItButton: HTMLInputElement = <HTMLInputElement>document.getElementById("doItButton");
showItButton.addEventListener("click", toUpperOrLower)

function toUpperOrLower(): void {

    let dropDown: string = dropDownElement.value;
    let userinput: string = textInput.value
    let input = userinput;
    
    if(dropDown === "toUpperCase")
        textOutput.innerHTML = String(input).toUpperCase();
    
    if(dropDown === "toLowerCase")
        textOutput.innerHTML = String(input).toLowerCase();
    
}
