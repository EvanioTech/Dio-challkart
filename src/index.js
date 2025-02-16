const player1 = {
    name: 'Mario',
    velocidade: 4,
    manobrabilidade: 3,
    poder: 2,
    pontos: 0,
}

const player2 = {
    name: 'Luigi',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0,
}

const player3 = {
    name: 'Yoshi',
    velocidade: 2,
    manobrabilidade: 5,
    poder: 1,
    pontos: 0,
}

const player4 = {
    name: 'Peach',
    velocidade: 3,
    manobrabilidade: 3,
    poder: 2,
    pontos: 0,
}

const player5 = {
    name: 'Bowser',
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
}

const player6 = {
    name: 'Donkey Kong',
    velocidade: 3,
    manobrabilidade: 3,
    poder: 2,
    pontos: 0,
}

async function rollDice() {   
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch(true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;

    }
    return result;
}

async function logRollResult(characterName, block, diceResult, atribute) {
    console.log(`\n🏁🚨 ${characterName} 🎲 rolou um dado de  ${block} ${diceResult} + ${atribute} = ${
        diceResult + atribute
    }  \n`);
}

async function playerRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`\n🏁🚨 Rodada ${round} \n`);

      // sorteio do bloco
      let block = await getRandomBlock();
      console.log(`\n🏁🚨 Bloco sorteado: ${block} \n`);

      // rolagem do dado
      let dice1 = await rollDice();
      let dice2 = await rollDice();
      
      console.log(`\n🏁🚨 ${character1.name} rolou ${dice1} e ${character2.name} rolou ${dice2} \n`);


      // teste de habilidades
      let totalTestSkill = 0;
      let totalTestSkill2 = 0;

      if(block === "RETA") {
        totalTestSkill = character1.velocidade + character1.manobrabilidade;
        totalTestSkill2 = character2.velocidade + character2.manobrabilidade;

        await logRollResult(character1.name, "velocidade", dice1, character1.velocidade);
        await logRollResult(character2.name, "velocidade", dice2, character2.velocidade);
      }
      
        
      

      if(block === "CURVA") {
        totalTestSkill = character1.velocidade + character1.velocidade;  
        totalTestSkill2 = character2.velocidade + character2.velocidade;

        await logRollResult(character1.name, "manobrabilidade", dice1, character1.manobrabilidade);
        await logRollResult(character2.name, "manobrabilidade", dice2, character2.manobrabilidade);
      }
      

      if(block === "CONFRONTO") {
        totalTestSkill = character1.poder + character1.poder;
        totalTestSkill2 = character2.poder + character2.poder;

        await logRollResult(character1.name, "poder", dice1, character1.poder);
        await logRollResult(character2.name, "poder", dice2, character2.poder);
      }

      if(totalTestSkill > totalTestSkill2) {
        console.log(`${character1.name} marcou um ponto!`);
        character1.pontos++;
       
      }else if(totalTestSkill2 > totalTestSkill) {
        console.log(`${character2.name} marcou um ponto!`);
        character2.pontos++;
        
      }

      console.log("-----------------------------")
      
      
}

}

(async function main() {
    console.log(`🏁🚨 corrida entre ${player1.name} e ${player2.name}  iniciando  \n`);

    await playerRaceEngine(player1, player2);
    
    
    
})()



