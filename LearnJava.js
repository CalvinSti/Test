const popup = document.getElementById('Onmykneespraying');
const closeBtn = document.getElementById('Button');


setTimeout(() => {
    Onmykneespraying.style.display = 'block';
}, 5000);


Button.addEventListener('click', () => {
    Onmykneespraying.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === Onmykneespraying) {
        Onmykneespraying.style.display = 'none';
    }
});