const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>';
}

let boxes = document.querySelectorAll(".box");
let lastMousePos = { x: 0, y: 0 };

boxes.forEach(box => {
    box.addEventListener('mousemove', function(e) {
        const dx = e.clientX - lastMousePos.x;
        const dy = e.clientY - lastMousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalize direction (to compute offset behind mouse)
        const dirX = distance > 0 ? dx / distance : 0;
        const dirY = distance > 0 ? dy / distance : 0;

        // Create trail pixel slightly behind the cursor
        const trailPixel = document.createElement('div');
        trailPixel.classList.add('trail-pixel');
        
        // Offset behind direction of movement (negative direction)
        const offset = -8; // pixels behind mouse
        trailPixel.style.left = `${e.clientX + dirX * offset + (Math.random() * 6 - 3)}px`;
        trailPixel.style.top = `${e.clientY + dirY * offset + (Math.random() * 6 - 3)}px`;

        e.target.appendChild(trailPixel);

        // Optional visual feedback
        e.target.style.background = "blue";

        // Fade out the pixel
        setTimeout(() => {
            trailPixel.style.opacity = '0';
            trailPixel.style.transform = 'scale(0.5)';
            setTimeout(() => {
                trailPixel.remove();
            }, 800);
        }, 100);

        // Update last mouse position
        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
    });
});
