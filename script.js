const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>';
}

let boxes = document.querySelectorAll(".box");

boxes.forEach( box => {
    box.addEventListener('mouseover', function(e) {
        let trailPixel = document.createElement('div');
        trailPixel.classList.add('trail-pixel');
        trailPixel.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`; // Random offset
        trailPixel.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
        e.target.appendChild(trailPixel);
        
        e.target.style.background = "blue";


        setTimeout(() => {
            trailPixel.style.opacity = '0';
            trailPixel.style.transform = 'scale(0.5)'; // Optional: shrink as it fades
            setTimeout(() => {
                trailPixel.remove();
            }, 800); // Match CSS transition duration
        }, 100); // Delay before starting fade-out

    });
});
