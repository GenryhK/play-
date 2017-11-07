let user = 10;
let computer = 10;
document.querySelector('.user').textContent = user;
document.querySelector('.computer').textContent = computer;

document.body.appendChild(document.createElement(`input`));

document.body.appendChild(document.createElement(`button`)).textContent = `play`;
document.querySelector(`BUTTON`).addEventListener(`click`, play);

function play() {
    if (+document.querySelector('INPUT').value == getRandomInt(1, 3)) {
        let results = computer -= getRandomInt(1, 4);
        (computer <= 0) ? alert(`user WIN`) : document.querySelector('.computer').textContent = results;
    }
    else{let results = computer -= getRandomInt(1, 4);
        (computer <= 0) ? alert(`computer WIN`) : document.querySelector('.user').textContent = results;}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

