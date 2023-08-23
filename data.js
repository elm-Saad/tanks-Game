const characterData = {
    hero: {
        name: "hero",
        avatar: "images/hero.png",
        health: 60,
        isDead: false,
        diceCount: 3,
        currentDiceScore: [],  
        powerImg :["images/fire.jpg","images/laser.jpg","images/lightning.jpg"]

    },
    enemy_1: {
        name: "V-1",
        avatar: "images/V-1.png",
        health: 30,
        isDead: false,
        diceCount: 1,
        currentDiceScore: [],
        level :1,
        powerImg :["images/fire.jpg"]

    },
    enemy_2: {
        name: "V-2",
        avatar: "images/V-2.png",
        health: 25,
        isDead: false,
        diceCount: 2,
        currentDiceScore: [],
        level :2,
        powerImg :["images/fire.jpg","images/laser.jpg"]
    },
    enemy_3: {
        name: "V-3",
        avatar: "images/V-3.jpg",
        health: 20,
        isDead: false,
        diceCount: 3,
        currentDiceScore: [],
        level :3,
        powerImg :["images/fire.jpg","images/laser.jpg","images/lightning.jpg"]

    }
}

export default characterData