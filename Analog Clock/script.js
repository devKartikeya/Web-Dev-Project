const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');

// Set transform origin once outside the loop so the browser doesn't re-calculate it every second
seconds.style.transformOrigin = "bottom";
minutes.style.transformOrigin = "bottom";
hours.style.transformOrigin = "bottom";

setInterval(() => {
    const now = new Date();
    const currentSecond = now.getSeconds();
    const currentMinutes = now.getMinutes();
    const currentHour = now.getHours();

    // 1. Seconds hand logic: 6 degrees per second
    const degrees = currentSecond * 6;

    // 2. Minute hand logic: 6 degrees per minute + 0.1 degrees per second for smooth drift
    const degreesOfMinutes = (currentMinutes * 6) + (currentSecond * 0.1);

    // 3. Hour hand logic: Convert to 12-hour format, then add 30 degrees per hour, 
    //    0.5 degrees per minute, and 0.0083 degrees per second for maximum precision
    const hour12 = currentHour % 12;
    const degreesOfHours = (hour12 * 30) + (currentMinutes * 0.5) + (currentSecond * 0.0083);

    // Apply the rotations
    seconds.style.rotate = `${degrees}deg`;
    minutes.style.rotate = `${degreesOfMinutes}deg`;
    hours.style.rotate = `${degreesOfHours}deg`;
}, 1000);