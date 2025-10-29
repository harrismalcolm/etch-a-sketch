const container = document.querySelector('#container');
let lastMousePos = { x: 0, y: 0 };

// Create default grid
function createGrid(size = 256) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        container.innerHTML += '<div class="box"></div>';
    }
}

createGrid(); // initial grid

// Handle grid regeneration
const btn = document.querySelector('#grid');
btn.addEventListener('click', function() {
    const gridNumber = parseInt(prompt('Enter number of squares (max 100):'));
    if (isNaN(gridNumber)) {
        alert('Please enter a valid number.');
    } else if (gridNumber > 100) {
        alert('Please select a number less than 100.');
    } else {
        createGrid(gridNumber * gridNumber);
        // Update container width (based on box size, e.g., 20px)
        const boxSize = 30; // adjust this to match your .box size in CSS
        container.style.maxWidth = `${(gridNumber * boxSize) + 40}px`;
    }
});

// 🧠 Use event delegation here
container.addEventListener('mousemove', function(e) {
    if (!e.target.classList.contains('box')) return;

    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const dirX = distance > 0 ? dx / distance : 0;
    const dirY = distance > 0 ? dy / distance : 0;

    const trailPixel = document.createElement('div');
    trailPixel.classList.add('trail-pixel');
    
    const offset = -8;
    trailPixel.style.left = `${e.clientX + dirX * offset + (Math.random() * 6 - 3)}px`;
    trailPixel.style.top = `${e.clientY + dirY * offset + (Math.random() * 6 - 3)}px`;

    e.target.appendChild(trailPixel);
    e.target.style.background = "blue";

    setTimeout(() => {
        trailPixel.style.opacity = '0';
        trailPixel.style.transform = 'scale(0.5)';
        setTimeout(() => {
            trailPixel.remove();
        }, 800);
    }, 100);

    lastMousePos.x = e.clientX;
    lastMousePos.y = e.clientY;
});
