let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suits = ['♠', '♥', '♦', '♣'];
let shuffleButton = document.getElementById('shuffle-btn');
let numCards = document.getElementById('count-box');
let desk = document.getElementById('deck');
const numValue = 52;

shuffleButton.addEventListener('click', function(){
    if(numCards.value > 52 || numCards.value < 1 || typeof(Number(numCards)) != 'number'){}
    createCardContainer(numCards.value);
});

document.getElementById('count').onmouseover = function(){
    document.getElementById('arrow').style.display = 'inherit';
}

document.getElementById('count').onmouseout = function(){
    document.getElementById('arrow').style.display = 'none';
}

function deckCreator() {
    let deck = [];
    cards.forEach((card) => {
        suits.forEach((suit) => {
            let deckElement = {Value: card, Suit: suit};
            deck.push(deckElement);
            });
        } )
    return deck;
}

function createCardContainer(number){
    let deck = deckCreator();
    desk.innerHTML = '';
    for (i = 0; i < number; i++) {
        let content = deck[Math.floor(Math.random() * deck.length)];
        let newDiv = document.createElement('div');
        if(content.Suit === '♥' || content.Suit === '♦'){newDiv.style.color = 'red';}
        newDiv.innerText = content.Value + content.Suit;
        newDiv.id = 'card';
        desk.appendChild(newDiv);
        deck.splice(deck.indexOf(content), 1);
    }
}

createCardContainer(52);

// To update dynamically the number of cards based on the input value
// setInterval(function(){
//     if(Number(numCards.value) != numValue) {
//         createCardContainer(numCards.value);
//         numValue = numCards.value;
//     }
// }, 500)
