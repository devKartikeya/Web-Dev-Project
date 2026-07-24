const mainDiv = document.getElementById('main');


/* Texts */
const texts = [
    'Initializing Terminal',
    'Reading your directories',
    'Copying your files and credentials',
    'Successfully copied all data',
    'Cleaning up'
]


/* Generating Random Delay between Texts */
const randomDelay = () => new Promise(resolve => setTimeout(() => {
    resolve()
}, Math.floor(Math.random() * 4000)));


/* Adding Text to the Screen */
async function add(text) {
    await randomDelay();
    const div = document.createElement('div');
    div.append(text);
    mainDiv.append(div);
}


/* Main Function that initializes the Hack */
async function main() {
    for (const text of texts) {
        await add(text);
    }
}


main();