//Changing the colors of each answer box
const colors = ['#38b6ff', '#cb6ce6', '#ffbd59', '#00bf63', '#5ce1e6', '#ff66c4', '#ff5757', '#ff914d'];

function setButtonColors(){
    const buttons = document.querySelectorAll('.answer');
    const randomColors = colors.sort(()=> 0.5 - Math.random());

    buttons.forEach((buttons, index) => {
        buttons.style.backgroundColor = randomColors[index % randomColors.length];
    });
}

setButtonColors();