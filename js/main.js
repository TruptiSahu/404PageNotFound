const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
  let x = e.clientX / 8;
  let y = e.clientY / 8;
  container.style.backgroundPosition = `${x}px ${y}px`;
});
