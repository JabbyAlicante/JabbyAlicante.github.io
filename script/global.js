document.addEventListener("DOMContentLoaded", function () {
    const text = "Im an aspiring Web developer";
    let index = 0;
    const typingElement = document.getElementById("typing-intro");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});
