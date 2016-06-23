function makeHealth() {
    var rezultat = Math.floor(Math.random() * (100 - 45 + 1) + 45);
    return rezultat;
}

function makeDmg() {
    var rezultat = Math.floor(Math.random() * (100 - 60 + 1) + 60);
    return rezultat;
}

function haveShield() {
    var shield = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (shield == 1) {
        return true;
    } else if (shield == 0) {
        return false;
    }

}