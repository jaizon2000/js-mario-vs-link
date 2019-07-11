/* MARIO & LINK CALCULATOR */
'use strict';
/*  ┌ ----------------- ┐
    | TABLE OF CONTENTS |
    └ ----------------- ┚
    
    1. IMG/BG CHANGES
        1.1 MARIO IMG/BG CHANGE
        1.2 LINK IMG/BG CHANGE

    2. CALCULATE ATTACK VALUES
        2.1 INPUTS
            - MARIO
            - LINK
        2.2 PROCESS - Formula
        2.3 OUTPUT - Display results

    3. CREATE EPIC BATTLE MAD LIB
        3.1 INPUT - get str input from user
        3.2 PROCESS - use input
        3.3 OUTPUT - display results
*/



// Event Listeners
    // HEROS
document.getElementById('mario-btn').addEventListener('click', chooseMario);
document.getElementById('link-btn').addEventListener('click', chooseLink);

    // CALCULATE ATTACK
document.getElementById('atk-btn').addEventListener('click', calcAtk);

    // START BATTLE
document.getElementById('start').addEventListener('click', startBattle);

// GLOBAL
let image = document.getElementById('img');

// Functions

// 1. IMG/BG CHANGES
    // MARIO IMG/BG CHANGE
function chooseMario() {
        // Image and BG
    image.src = "images/mario.png";
    document.getElementById('html').style.backgroundColor = 'red';
    document.getElementById('body').style.backgroundColor = 'pink';

        // Bullet Points
    document.getElementById('hero').innerHTML = 'The Mushroom Kingdom';
    document.getElementById('love').innerHTML = 'Princess Peach';
    document.getElementById('enemy').innerHTML = 'King Bowser';
}

    // LINK IMG/BG CHANGE
function chooseLink() {
        // Image and BG
    image.src = "images/link.png";
    document.getElementById('html').style.backgroundColor = 'green';
    document.getElementById('body').style.backgroundColor = 'lightgreen';

        // Bullet Points
    document.getElementById('hero').innerHTML = 'Hyrule';
    document.getElementById('love').innerHTML = 'Princess Zelda';
    document.getElementById('enemy').innerHTML = 'Ganon';
}

// 2. CALCULATE ATTACK VALUES
function calcAtk() {
    // INPUTS
        // MARIO
    let marioStr = Number(document.getElementById('mario-str').value);
    console.log(marioStr);
    let marioDef = Number(document.getElementById('mario-def').value);

        // LINK
    let linkStr = Number(document.getElementById('link-str').value);
    let linkDef = Number(document.getElementById('link-def').value);
    // PROCESS - FORMULAS
    let marioAtk = 2 * marioStr / linkDef + 5;
    let linkAtk = (linkStr + 15) / marioDef;

    // OUTPUT - DISPLAY RESULTS
    document.getElementById('mario-atk').innerHTML = marioAtk;
    document.getElementById('link-atk').innerHTML = linkAtk;
}

// 3. CREATE EPIC BATTLE MAD LIB
function startBattle() {
    // INPUT - get str inputs from user
    let marioWeapon = document.getElementById('mario-weapon').value;
    let linkWeapon = document.getElementById('link-weapon').value;
    let exclamation = document.getElementById('exclamation').value;

    // PROCESS - use input
    let madLib1 = 'Mario walks in with a ' + marioWeapon + ' and Link with a ' + linkWeapon + '.';
    let madLib2 = 'Both walk towards the centre of the ring and the announcer says';
    let madLib3 = '"' + exclamation + '!!!"';

    // OUTPUT - display results
    document.getElementById('mad-lib').innerHTML = madLib1 + '<br>' + madLib2 + '<br>' + madLib3;
}

document.getElementById('show-calc').addEventListener('click', show);
// document.getElementById('show-calc').addEventListener('mouseout', hide);
let x = document.getElementById('calc-table'); // myDiv

function show() {
    x.classList.toggle('hide');
}