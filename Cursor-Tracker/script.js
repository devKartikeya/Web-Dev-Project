const dot = document.getElementById('dot');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

/* Tracking throughout the movement of mouse  */
document.addEventListener('mousemove', event => {
  targetX = event.clientX - dot.offsetWidth / 2;
  targetY = event.clientY - dot.offsetHeight / 2;
});

/* Smooth sync Animation through requestAnimationFrame */
function animate() {
  currentX += (targetX - currentX) * 0.1; // easing factor
  currentY += (targetY - currentY) * 0.1;
  dot.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}

animate();