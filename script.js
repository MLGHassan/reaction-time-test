

function myFunction() {

    // Remove retry button if it exists
    const retryButton = document.getElementById('retry-button');
    if (retryButton) retryButton.remove();

    const reaction_box = document.getElementById('reaction-box')
    const reaction_text = document.getElementById('reaction-text');

    reaction_text.innerHTML = "Wait for the box to turn green";
    reaction_box.style.backgroundColor = "red";

    setTimeout(() => {
        reaction_box.style.backgroundColor = "green";
        reaction_text.innerHTML = "";
        
        const oldButton = document.getElementById('react-button');
        if (oldButton) oldButton.remove();

        //new button spawning
        const reactButton = document.createElement('button');
        reactButton.textContent = "Click Me!";
        reactButton.style.fontFamily = 'monospace';
        reactButton.style.fontSize = '1.5em';
        reactButton.style.color = 'black';
        reactButton.style.border = 'none';
        reactButton.id = 'react-button';
        reactButton.style.width = '100%';
        reactButton.style.height = '100%';
        reactButton.style.padding = '0';
        reactButton.style.background = 'none';
        reaction_box.appendChild(reactButton);
        reaction_text.style.height = '0';

        reactButton.style.cursor = 'pointer';
        reaction_box.style.transition = 'background-color 0.3s ease';


        let startTime = new Date().getTime();
        reactButton.onclick = function() {
            reaction_box.style.backgroundColor = 'skyblue';

            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            reaction_text.style.height = '70%';
            reaction_text.innerHTML = `Your reaction time: ${reactionTime} ms`;
            reactButton.remove();

            const retryButton = document.createElement('button');
            retryButton.id = 'retry-button';
            retryButton.style.fontFamily = 'monospace';
            retryButton.style.fontSize = '1.5em';
            retryButton.style.color = 'black';
            retryButton.style.border = 'none';
            retryButton.style.width = '100%';
            retryButton.style.height = '30%';
            retryButton.style.padding = '0';
            retryButton.style.background = 'none';
            retryButton.style.cursor = 'pointer';
            retryButton.textContent = "Try Again";
            retryButton.onclick = myFunction;
            reaction_box.appendChild(retryButton);

        };

    }, Math.floor(Math.random() * 3000) + 2000);
}


function darkMode() {
    // Change body background and text color
    document.body.style.backgroundColor = "#181818";
    document.body.style.color = "#fff";

    // Change all text elements to white
    const allText = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, div, label, button");
    allText.forEach(el => {
        el.style.color = "#fff";
    });

    // Change reaction box background if present
    const reactionBox = document.getElementById('reaction-box');
    if (reactionBox) {
        reactionBox.style.backgroundColor = "#222";
    }

    
}
