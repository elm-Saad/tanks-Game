function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    )
}

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}
function getPowerHtml(data){
    return data.powerImg.map((elem) =>
     `
        <div class="power-dice">
            <img src="${elem}" alt="">
        </div>
    `
    ).join("")
}
function getBattelFiealdHtml(Level) {
    return `<div class="hero-side">
                <div class="tank-container">
                <img class="tank face-down" src="images/tank-2.png">

                </div>
            </div>
            <span class="Level">
            Level ${Level}
            </span>
            <div class="enemy-side">
                <div class="tank-container">
                <img class="tank face-up" src="images/tank-1.png">

                </div>
            </div>
        `
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage, getBattelFiealdHtml,getPowerHtml}