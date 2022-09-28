// Monkeytype word parsing
function parseWords() {
    let wordNodes = document.querySelectorAll(".word");
    let wordsString = "";
    
    wordNodes.forEach(wn => {
        const word = Array.from(wn.children).map(letterNode => {
            return letterNode.textContent;
        }).join("");
        
        wordsString += `${word} `;
    });
    
    return wordsString;
}
