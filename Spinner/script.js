const button = document.getElementById('button');
const main = document.getElementById('main');

const randomDuration = () => {
    const rand = Math.floor(Math.random() * (4 - 2) + 2);
    return rand;
}

const randomRotation = () => {
    const rand = Math.floor(Math.random() * (2048 - 720) + 720);
    return rand;
}

function animate() {
    const randDuration = randomDuration();
    const randRotate = randomRotation();
    gsap.to(main, { rotation: `+=${randRotate}`, duration: randDuration, ease: "power1.inOut" });
}

button.addEventListener('click', e => {
    animate();
});