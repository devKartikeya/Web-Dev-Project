const btn = document.getElementById('button');
const a = document.getElementById('link');
const input = document.getElementById('input');
const error = document.getElementById('error');

function searchProfile() {
    let profile = input.value.trim();
    if (profile) {
        a.href = `https://github.com/${profile}`;
        a.click();
    } else {
        error.innerHTML = "Please type an username";
        settimeout(() => {
            error.innerHTML = "";
        }, 3000);
    }
}

btn.addEventListener('click', searchProfile);
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchProfile();
});