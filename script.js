const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = (3 * window.innerWidth) / 4;
canvas.height = (3 * window.innerHeight) / 5;
window.addEventListener('resize', () => {
    canvas.width = (3 * window.innerWidth) / 4;
    canvas.height = (3 * window.innerHeight) / 5;
});

context.strokeStyle = '#048108';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 1;

const inputs = document.querySelectorAll('.controls input');
function handleUpdate(e) {
    context[this.name] = this.value;
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const selects = document.querySelectorAll('.controls select');
function handleSelectUpdate(e) {
    context[this.name] = this.value;
}
selects.forEach(input => input.addEventListener('change', handleSelectUpdate));
selects.forEach(input => input.addEventListener('mousemove', handleSelectUpdate));

let isDrawing = false;
let lastX = 0;
let lastY = 0;
function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);