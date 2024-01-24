async function transition() {
    var image1 = document.querySelector('.character.image1');
    var image2 = document.querySelector('.character.image2');

    // Gradually change opacity over 2 seconds
    var interval = 50; // milliseconds
    var duration = 2000; // milliseconds
    var steps = duration / interval;
    var opacityStep = 1 / steps;
    var currentOpacity1 = 1;
    var currentOpacity2 = 0;

    var fadeInterval = setInterval(function() {
        currentOpacity1 -= opacityStep;
        currentOpacity2 += opacityStep;

        image1.style.opacity = currentOpacity1;
        image2.style.opacity = currentOpacity2;

        if (currentOpacity1 <= 0) {
            clearInterval(fadeInterval);

            // Swap z-index to maintain proper layering
            image1.style.display = 'none';

        }
    }, interval);

    await new Promise(r => setTimeout(r, 2000));
    
    var audio = new Audio('sounds/ani-gomer.mp3');
    audio.play();
}








function imagebouncing(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Image properties
    const image = new Image();
    image.src = 'characters/my-image.png'; // Replace with your image path
    const imageSize = Math.random() * (200); // Adjust the size of the image
    
    // Initial position and velocity
    let x = Math.random() * (canvas.width - imageSize);
    let y = Math.random() * (canvas.height - imageSize);
    let vx = (Math.random() - 0.5) * 14; // X-axis velocity
    let vy = (Math.random() - 0.5) * 14; // Y-axis velocity
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, x, y, imageSize, imageSize);
    
        // Update position
        x += vx;
        y += vy;
    
        // Bounce off the walls
        if (x < 0 || x + imageSize > canvas.width) {
            vx = -vx;
        }
    
        if (y < 0 || y + imageSize > canvas.height) {
            vy = -vy;
        }
    
        requestAnimationFrame(draw);
    }
    
    image.onload = function() {
        draw();
    };
    
}


function lie() {
    var fadeTarget = document.getElementById("fadingImage");
    var audio = new Audio('./sounds/lie-detector-meme.mp3');
    console.log(audio.duration);
    fadeTarget.style.zIndex = 500;
    audio.play();
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else  {
            clearInterval(fadeEffect);
            fadeTarget.style.zIndex = -500;
            fadeTarget.style.opacity = 1;
        }
    }, 20);

}