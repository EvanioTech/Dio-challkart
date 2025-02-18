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

const players = [player1, player2, player3, player4, player5, player6];

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

    }
    return result;
}

async function logRollResult(characterName, block, diceResult, atribute) {
    console.log(`\n🏁🚨 ${characterName} 🎲 rolou um dado de  ${block} ${diceResult} + ${atribute} = ${
        diceResult + atribute
    }  \n`);
}

async function playerRaceEngine() {
    

    let index1 = Math.floor(Math.random() * players.length);
    let index2;
    
    do {
        index2 = Math.floor(Math.random() * players.length);
    } while (index1 === index2);

    let character1 = players[index1];
    let character2 = players[index2];

    console.log(`🏁🚨 Corrida entre ${character1.name} e ${character2.name} iniciando!\n`);

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
        let powerResult1 = 0;
        let powerResult2 = 0;

      if(block === "RETA") {
        totalTestSkill = dice1 + character1.velocidade;
        totalTestSkill2 = dice2 + character2.velocidade;

        await logRollResult(character1.name, "velocidade", dice1, character1.velocidade);
        await logRollResult(character2.name, "velocidade", dice2, character2.velocidade);
      }

      if(block === "CURVA") {
        totalTestSkill = dice1 + character1.manobrabilidade;  
        totalTestSkill2 = dice2 + character2.manobrabilidade;

        await logRollResult(character1.name, "manobrabilidade", dice1, character1.manobrabilidade);
        await logRollResult(character2.name, "manobrabilidade", dice2, character2.manobrabilidade);
      }
      

      if(block === "CONFRONTO") {
        powerResult1 = dice1 + character1.poder;
        powerResult2 = dice2 + character2.poder;

        console.log(`\n🏁🚨 ${character1.name} e ${character2.name} estão em confronto  🥊\n`);


        await logRollResult(character1.name, "poder", dice1, character1.poder);
        await logRollResult(character2.name, "poder", dice2, character2.poder);

        if(powerResult1 > powerResult2 && character2.pontos > 0) {
            console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu um ponto! 🐢`);
            character2.pontos --;
        }

        if(powerResult2 > powerResult1 && character1.pontos > 0) {
            console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu um ponto! 🐢`);
            character1.pontos --;
        }

       

        console.log(
            powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido!" : ''
        )

        
        if(powerResult1 == powerResult2) {
          console.log('Confronto empatado! Nenhum ponto foi perdido!');
        }
      }

      if(totalTestSkill > totalTestSkill2) {
        console.log(`${character1.name} marcou um ponto!`);
        character1.pontos++;
       
      } if(totalTestSkill2 > totalTestSkill) {
        console.log(`${character2.name} marcou um ponto!`);
        character2.pontos++;
        
      }
      

      if(powerResult1 > powerResult2) {
        console.log(`${character1.name} marcou dois pontos!`);
        character1.pontos+2;

        }else if(powerResult2 > powerResult1) {
        console.log(`${character2.name} marcou dois pontos!`);
        character2.pontos+2;
            
            } 

      console.log("--------------------------------------------------------")


      
      
      
}
return { character1, character2 };

}

async function declareWinner(character1, character2) {
    console.log("Resultado final: \n");
    console.log(`${character1.name} fez ${character1.pontos} pontos!`);
    console.log(`${character2.name} fez ${character2.pontos} pontos!`);

    if(character1.pontos > character2.pontos) {
        console.log(`🏁🚨 ${character1.name} venceu a corrida! 🏆`);
}
    if(character2.pontos > character1.pontos) {
        console.log(`🏁🚨 ${character2.name} venceu a corrida! 🏆`);
    }

    if(character1.pontos === character2.pontos) {
        console.log(`🏁🚨 A corrida terminou empatada! 🏆`);
    }

    console.log("🏁🚨 Fim da corrida! 🏁🚨");

}

(async function main() {
   

    const { character1, character2 } = await playerRaceEngine();
    await declareWinner(character1, character2);
    
    
    
})();



