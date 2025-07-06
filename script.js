

function myFunction() {
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

        startTime = new Date().getTime();
        reactButton.onclick = function() {
            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            reaction_text.innerHTML = `Your reaction time: ${reactionTime} ms`;
            reactButton.remove();
        };

    }, Math.floor(Math.random() * 3000) + 2000);
}