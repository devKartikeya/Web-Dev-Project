let AddButton = document.getElementById('add');
let GetButton = document.getElementById('get');
let DeleteButton = document.querySelector('.delete-btn');
let lists = document.querySelector('#lists');
let DeleteAllButton = document.getElementById('delete-all');

//Add To-dos
AddButton.addEventListener('click', e => {
    let todo = prompt("Write your To-Do");
    if (todo) {
        lists.innerHTML += `<li>${todo}<button class="delete-btn" onclick="this.parentElement.remove()">
        <img src="delete.svg" alt="Delete" >Done
    </button></li>`;
        let random = Math.floor(Math.random() * 1000);
        localStorage.setItem(random, todo);
    }
});

//Get all To-Dos
GetButton.addEventListener('click', e => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        lists.innerHTML += `<li>${value}<button class="delete-btn" onclick="this.parentElement.remove()">
        <img src="delete.svg" alt="Delete" >Done
    </button></li>`;
        console.log(key + ' => ' + value);
    }
});

//Delete To-Do
lists.addEventListener('click', (e) => {
    // Check if the clicked element (or its parent) is the delete button
    const deleteBtn = e.target.closest('.delete-btn');

    if (deleteBtn) {
        // 'closest' finds the nearest <li> and removes it
        console.log(deleteBtn.parentElement.textContent);
        deleteBtn.parentElement.remove();
        removeList(deleteBtn.parentElement.textContent);
    }
});

function removeList(value) {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        const currentValue = localStorage.getItem(key);
        if (currentValue && currentValue.trim() === value.trim()) {
            localStorage.removeItem(key);
            console.log(`Removed: ${key}`);
        }
    });
}

//Clear all To-Dos
DeleteAllButton.addEventListener('click', e => {
    localStorage.clear();
    lists.innerHTML = "";
})