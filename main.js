/*
Tvým úkolem je vytvořit tzv. "soundboard".
Aplikaci, která při stisku kláves 1-6 přehraje zvuk
příslušného zvířátka a zvýrazní dané zvíře na obrazovce.

V CSS je připravená třída "hraje" - když ji při stisku
klávesy (onkeydown) přidáš JavaScriptem na <div>,
který má v HTML ID "zvire-x" (kde x je číslo zvířete 1-6),
zvířátko se hezky zvýrazní.

Zároveň přehraj zvuk z <audio> elementu, který má v HTML
ID "zvuk-x" (kde x je opět číslo zvířete).

Při uvolnění klávesy (onkeyup) třídu ze zvířátka opět odeber,
ať nezůstane zvýrazněné.

Když budeš mít vše hotové a budeš chtít procvičovat dál, buď
kreativní a vymysli si vlastní obrázky nebo zvuky. Zkusíš třeba
udělat piáno?
*/

const body = document.querySelector('body');

body.addEventListener('keydown', keyPressDown);
body.addEventListener('keyup', keyPressUp);

function keyPressDown(event) {
    if (event.key >= 1 && event.key <= 6) {
        const numKeyboard = document.querySelector('#zvire-' + event.key);
        numKeyboard.classList.add('hraje');

        let voice = document.querySelector('#zvuk-' + event.key);
        voice.play();

    } else {
        alert('Pro přehrání zvuku zvířete použijte numerickou klávesu 1 - 6.');
    }
}

function keyPressUp(event) {
    const numKeyboard = document.querySelector('#zvire-' + event.key);
    numKeyboard.classList.remove('hraje');

    let voice = document.querySelector('#zvuk-' + event.key);
    voice.pause();
}