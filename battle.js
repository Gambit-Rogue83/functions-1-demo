let johnWickHealth = 100
let serbianBossHealth = 100

console.log(Boolean(johnWickHealth))
let status = 'John Wick is dead'
let newStatus = status.replace('dead', 'alive')

if(newStatus.includes('alive')){
    console.log("Oh no! He's still alive, and he's coming for revenge!")
    let panicStatus = newStatus.toUpperCase() //create a panic statement with uppercase letters
    console.log(panicStatus)

    let words = panicStatus.split(' ')
    let kebabCase = words.join('-')

    console.log(words)
    console.log(kebabCase)

    function surpriseAttack(attack){  //John Wick attacks the unsuspecting Boss
        serbianBossHealth -= attack
    }

    surpriseAttack(30)
    console.log(serbianBossHealth)

    const isSerbianBossAlive = function(){ //checks on Serbian Boss health
        if(serbianBossHealth <= 0){ //Boss has expired
            console.log("The man chokes on his own blood as his life seeps from his mortal frame")
            return false
        } else{ //Boss becomes livid with his wounding
            console.log("The boss is wounded and enraged")
            return true
        }
    }
    let aliveStatus = isSerbianBossAlive()
    console.log(aliveStatus)

    const greeting = (char1) =>{
        console.log(`Dasvidanya ${char1}, your time has come`)
    }
    greeting('John Wick')

    // let attackJohn = () => johnWickHealth -= 15
    let attack = (charHealth) => charHealth -= 15 //attack removes 15 health

    johnWickHealth = attack(johnWickHealth) //char will be attacked for 15
                    // damage, and lose 15 health, reassigning the new health
                        // total. So 100 would subtract 15, new value is 85
    console.log(johnWickHealth)

    serbianBossHealth = attack(serbianBossHealth)
    console.log(serbianBossHealth)

    while(serbianBossHealth > 0 && johnWickHealth > 0){
        johnWickHealth = attack(johnWickHealth)
        if(johnWickHealth > 0){
            serbianBossHealth = attack(serbianBossHealth)
        }
    }

    if(serbianBossHealth > 0){
        console.log("Rest in peace John Wick, your services are no longer needed")
    } else{
        console.log("*John Wick walks away like a badass*")
    }

}


function rollDice(){
    let possibleNums = [1,2,3,4,5,6,7,8,9,10,11,12]
    let randomNum = possibleNums[Math.floor(Math.random() * possibleNums.length)]
    return randomNum
}

// shift +(alt) + down key => duplicate lines

console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
