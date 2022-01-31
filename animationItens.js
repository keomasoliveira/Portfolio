/*
 * typingEffect()
 * It types an array of texts in a random order. I like random stuff🙃
 */
function typingEffect() {
    const contactTexts = shuffleArray(['  Em Breve...  ']);
    const typedtext = document.getElementsByClassName("texto-central")[0];
    const typedtext1 = document.getElementsByClassName("texto-central")[1];
    const typedtext2 = document.getElementsByClassName("texto-central")[2];
    const typedtext3 = document.getElementsByClassName("texto-central")[3];
    const typedtext4 = document.getElementsByClassName("texto-central")[4];
    const typedtext5 = document.getElementsByClassName("texto-central")[5];
   

    let removing = false;
    let idx1 = char1 = 0;

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char1 < contactTexts[idx1].length) typedtext.innerHTML += contactTexts[idx1][char1];
        if (char1 < contactTexts[idx1].length) typedtext1.innerHTML += contactTexts[idx1][char1];
        if (char1 < contactTexts[idx1].length) typedtext2.innerHTML += contactTexts[idx1][char1];
        if (char1 < contactTexts[idx1].length) typedtext3.innerHTML += contactTexts[idx1][char1];
        if (char1 < contactTexts[idx1].length) typedtext4.innerHTML += contactTexts[idx1][char1];
        if (char1 < contactTexts[idx1].length) typedtext5.innerHTML += contactTexts[idx1][char1];
    
        
        // 15*150ms = time before starting to remove characters
        if (char1 == contactTexts[idx1].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);
        if (removing) typedtext1.innerHTML = typedtext1.innerHTML.substring(0, typedtext1.innerHTML.length - 1);
        if (removing) typedtext2.innerHTML = typedtext2.innerHTML.substring(0, typedtext2.innerHTML.length - 1);
        if (removing) typedtext3.innerHTML = typedtext3.innerHTML.substring(0, typedtext3.innerHTML.length - 1);
        if (removing) typedtext4.innerHTML = typedtext4.innerHTML.substring(0, typedtext4.innerHTML.length - 1);
        if (removing) typedtext5.innerHTML = typedtext5.innerHTML.substring(0, typedtext5.innerHTML.length - 1);
 

        char1++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx1 === contactTexts.length - 1) idx1 = 0
            else idx1++;

            char1 = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 150); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}