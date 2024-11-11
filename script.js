document.addEventListener("DOMContentLoaded", function() {
    const text = "Student Game Developer & E-sports Competitor";
    const speed = 100; // Speed for typing each character
    const wordPause = 1000; // Pause between words in milliseconds
    const blinkSpeed = 500; // Speed of the blinking cursor

    let index = 0; // Tracks the index of the current character
    let wordStartIndex = 0; // Tracks the index of the current word

    function typeWriter() {
        // Check if we haven't reached the end of the string
        if (index < text.length) {
            let currentChar = text.charAt(index);
            
            // If the current character is a space, add a pause before continuing
            if (currentChar === " " && index > wordStartIndex) {
                setTimeout(function() {
                    wordStartIndex = index + 1; // Mark start of next word
                    setTimeout(typeWriter, speed); // Start typing after a pause
                }, wordPause);
            } else {
                // Add the character to the typewriter text
                document.getElementById("typewriter").innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, speed); // Continue typing the next character
            }
        } else {
            // Once all text is typed, restart after a short delay
            setTimeout(function() {
                document.getElementById("typewriter").innerHTML = ""; // Clear text
                index = 0; // Reset index for the next round
                typeWriter(); // Restart typing effect
            }, wordPause); // Restart after the pause between words
        }
    }

    // Start typing effect when DOM is loaded
    typeWriter();

    // Add cursor blink effect
    const cursor = document.getElementById("cursor");
    setInterval(function() {
        cursor.classList.toggle("blink-cursor");
    }, blinkSpeed);
});
