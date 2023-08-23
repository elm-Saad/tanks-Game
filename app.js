import characterData from './data.js'
import Character from './Character.js'

let enemyArray = ["enemy_1", "enemy_2", "enemy_3"]
let isWaiting = false

function getNewEnemy() {
    const nextEnemy = characterData[enemyArray.shift()]
    return nextEnemy ? new Character(nextEnemy) : {}
}

function fire() {

    if(!isWaiting){
        hero.setDiceHtml()
        enemy.setDiceHtml()
        hero.takeDamage(enemy.currentDiceScore)
        enemy.takeDamage(hero.currentDiceScore)
        enemy.getAnimatedBattelFiealdHtml()
        render()
        
        if(hero.isDead){
            endGame()
        }
        else if(enemy.isDead){
            isWaiting = true
            if(enemyArray.length > 0){
                setTimeout(()=>{
                    enemy = getNewEnemy()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
        }    
    }
}

function endGame() {
    isWaiting = true
    const endMessage = hero.health === 0 && enemy.health === 0 ?
        `
            After an intense tank battle, no clear winner emerged.
            Destruction and dust settled, signaling an uneasy calm.
            Get ready for a rematch and aim to sway the outcome in your favor.<br>
            Click "Replay" to rewrite history and pave the way to victory!
        `:
        hero.health > 0 ? 
        `
            Congratulations! Your tactical prowess and skillful tank maneuvers have led you to win over the 
            enemy tanks.
            You've proven yourself as a tough commander on the battlefield.
            Can you replicate this success in the next clash?<br>
            Press "Replay" to defend your title as the tank warfare champion! 
        ` :
        `
            Defeat! The enemy tanks have overwhelmed your forces.
            It's not the end, though. Gather your strength and strategize anew.
            Victory awaits in the next battle.<br> 
            Press "Replay" to take another shot at victory!
        `

    const endImage = hero.health === 0 && enemy.health === 0 ? 
        "images/equal.jpg" :
        hero.health > 0 ?  "images/win.jpg":
        "images/lose.jpg"

        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="endGame">
                    <img class="end-img" src="${endImage}">
                    <h2>Game Over</h2>
                    <p>${endMessage}</p>
                    <button id="replay-button">Replay</button>
                </div>
                `
            replayGame()
        }, 2000)
}

function replayGame(){
    if(document.getElementById("replay-button")){
        
        document.getElementById("replay-button").addEventListener('click', ()=>{
            enemyArray = ["enemy_1", "enemy_2", "enemy_3"]
            hero = new Character(characterData.hero)
            enemy = getNewEnemy()
            isWaiting = false
            document.body.innerHTML = `
                <main>
                    <div id="hero">
                    </div>
                    <div class="battle-field" id="battle-field">
                    </div>
                    <div id="enemy">
                    </div>    
                </main>
                <section id="actions">
                    <button id="attack-button">fire</button>
                </section>
            `
            render()
        })
    }
}

function render() {
    document.getElementById("attack-button").addEventListener('click', fire)

    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('enemy').innerHTML = enemy.getCharacterHtml()
    document.getElementById('battle-field').innerHTML = enemy.getBattelFiealdHtml()
}

let hero = new Character(characterData.hero)
let enemy = getNewEnemy()
render()