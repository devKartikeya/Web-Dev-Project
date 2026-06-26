const Button = document.getElementById('button') as HTMLButtonElement;
const Display = document.getElementById('display') as HTMLDivElement;
const Inputs = document.querySelectorAll<HTMLInputElement>('.input');
const Options = document.querySelectorAll<HTMLInputElement>('.options');

const lowercase: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

const digits: number[] = Array.from({ length: 10 }, (_, index) => index);

// Array containing standard special characters
const specialChars = ['@', '#', '$', '&', '_'];

let options: (true | false)[] = [];
//where options[0] == include numbers and options[1] == include special chars

Button.addEventListener('click', e => {
    let id = iterateInputs();
    if (id === 'six') generatePassword(6);
    if (id === 'eight') generatePassword(8);
    if (id === 'ten') generatePassword(10);
    if (id === 'twelve') generatePassword(12);
});

function iterateInputs(): string {
    for (const input of Inputs) {
        if (input.checked) {
            return input.id;
        }
    }
    return 'null';
}

function generatePassword(id: number): void {
    for (const input of Options) {
        if (input.checked) {
            options.push(true);
        } else {
            options.push(false);
        }
    }
    console.log(options);
    if (options[0] == false && options[1] == false) {
        console.log('String');
        options = [];
        generateStringPassword(id);
    }
    if (options[0] == true && options[1] == false) {
        console.log('Number');
        options = [];
        generateNumberPassword(id);
    }
    if (options[0] == true && options[1] == true) {
        console.log('Mixed');
        options = [];
        generateMixedPassword(id);
    }
}

function generateStringPassword(id: number) {
    let password: string = "";
    for (let i = 0; i < id; i++) {
        const rand: number = Math.floor(Math.random() * 26);
        const element = lowercase[rand];
        password += element;
    }
    Display.innerHTML = password;
}

function generateNumberPassword(id: number) {
    let numStr = [...lowercase, ...digits];
    let password: string = "";
    for (let i = 0; i < id; i++) {
        const rand: number = Math.floor(Math.random() * 36);
        const element = numStr[rand];
        password += element;
    }
    Display.innerHTML = password;
}

function generateMixedPassword(id: number) {
    let mixed = [...lowercase, ...digits, ...specialChars];
    let password: string = "";
    for (let i = 0; i < id; i++) {
        const rand: number = Math.floor(Math.random() * 41);
        const element = mixed[rand];
        password += element;
    }
    Display.innerHTML = password;
}