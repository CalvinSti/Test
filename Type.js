const text ="Java is used to develop applications for Google's Android OS, \n    various desktop applications \n    (such as media players and antivirus programs) \n    web applications (such as interactive content), \n    enterprise applications (i.e., banking), \n    and many more.";
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

window.onload = type; /*this was very cool*/