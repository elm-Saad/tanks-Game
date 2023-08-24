import { getDiceRollArray, getDicePlaceholderHtml, getPercentage,getBattelFiealdHtml,getPowerHtml} from './utils.js'

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount) // first time card look

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.isDead = true
            this.health = 0
        }
    }

    this.setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<span class="number">
                ${num}
            </span>`).join("")
    }

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-info">
                <div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>
                <span class="${percent < 26 ? "danger" : ""}">
                    ${this.health}
                    <i class="fa-solid fa-heart"></i>
                </span>
            </div>
            `
    }
    
    this.getPower = getPowerHtml(this)

    this.getCharacterHtml = function () {
        const {name, avatar, getPower, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                ${healthBar}
                <div class="info-card">
                    <img  class="character-img" src="${avatar}" alt="${name}">
                    <div class="dices">
                        <div class="dice-container">
                            ${diceHtml}
                        </div>
                        <div class="power-container">
                            ${getPower}
                        </div>
                    </div>
                </div>
            </div>`
    }

    this.getBattelFiealdHtml = ()=> {return getBattelFiealdHtml(this.Level)}

    this.getAnimatedBattelFiealdHtml = function() {
        this.getBattelFiealdHtml =()=>{
            return `
                <div class="hero-side">
                    <div class="tank-container">
                        <img class="tank face-down" src="images/tank-2.png">
                        <span class="fireball"></span>
                    </div>
                </div>
                <span class="firewall">
                    <img class="firewall-img tank" src="images/exploding.png">
                    <img class="firewall-img tank" src="images/exploding.png">
                    <img class="firewall-img tank" src="images/exploding.png">
                </span>
                <div class="enemy-side">
                    <div class="tank-container">
                        <img class="tank face-up" src="images/tank-1.png">
                        <span class="fireball"></span>
                    </div>
                </div>
            `
        }
    }
}

export default Character