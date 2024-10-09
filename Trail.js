const trailArea = document.querySelector('.Plat');
const trailRate = 1;
let lastTrailTime = 0;
let lastImage = '';
trailArea.addEventListener('mousemove', function (e) {
const currentTime = Date.now();
    if (currentTime - lastTrailTime >= trailRate) {
        const rect = trailArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createImageTrail(x, y, trailArea);
        lastTrailTime = currentTime;
    }
});

function createImageTrail(x, y, container) {
    const images = ['Google.jpg', 'android.jpg', 'nasa.png', 'Bit.png', 'ava.png', 'spot.png', 'mine.png', 'net.png', 'mine.png', 'ama.pmg', 'face.png', 'ins.png', 'mic.png', 'x.jpg'];
    let newImage;
    do {
        newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === lastImage);
    lastImage = newImage;
    const img = document.createElement('div');
    img.classList.add('trail-image');
    
    img.style.backgroundImage = `url(${newImage})`;
    img.style.left = `${x - 20}px`;
    img.style.top = `${y - 20}px`;

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    img.style.setProperty('--moveX', `${randomX}px`);
    img.style.setProperty('--moveY', `${randomY}px`);

    container.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 1000); /*well that wasn't so hard (lie)*/
}