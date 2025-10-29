const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>';
}

let boxes = document.querySelectorAll(".box");
boxes.forEach( box => {
    box.addEventListener('mouseover', function(e) {
        e.target.style.background = "blue";
    });
});
