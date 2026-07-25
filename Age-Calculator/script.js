const button = document.getElementById('button');
const input = document.getElementById('date');
const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    if (input.value) {
        findDOB(input.value);
    } else {
        alert('Please enter your DOB');
    }
});

function findDOB(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    let y = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();

    // Adjust days and months if negative
    if (d < 0) {
        m--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        d += prevMonth.getDate();
    }
    if (m < 0) {
        y--;
        m += 12;
    }

    years.textContent = `${y} Years`;
    months.textContent = `${m} Months`;
    days.textContent = `${d} Days`;

    result.classList.add("show"); // use CSS animation class
}
