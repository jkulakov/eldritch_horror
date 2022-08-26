const ancients = document.querySelectorAll('.ancient_img');
const difContainer = document.querySelector('.dif_levels');
const gameContainer = document.querySelector('.game_container');
const statContainer = document.createElement('div');
statContainer.classList.add('stat_container');
gameContainer.append(statContainer);

const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
];

const blueCardsData = [
  {
    id: 'blue1',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    difficulty: 'normal',
    color:'blue'
  },
];

const brownCardsData = [
  {
    id: 'brown1',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    difficulty: 'easy',
    color:'brown'
  },
];

const greenCardsData = [
  {
    id: 'green1',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    difficulty: 'easy',
    color:'green'
  },
];


let setting = {
  ancient: '',
  dificulty: ''
};

ancients.forEach((item) => {
  item.addEventListener('click', createLevel);
});

function shuffleArr(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


function startGame(e) {
  
  setting.dificulty = e.target.id;
  const levelz = document.querySelectorAll('.dif_level');
  levelz.forEach((item) => {
    item.classList.remove('dif_active');
  });
  e.target.classList.add('dif_active');
  const test = document.querySelectorAll('.card');
  if(test != null) {
    test.forEach((item) => {
      item.remove();
    });
    const finalDeck = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    j = 0;
  }
  createDeck();
}

function createDeck() {
  
  let greenTotal = ancientsData[setting.ancient].firstStage.greenCards + ancientsData[setting.ancient].secondStage.greenCards + ancientsData[setting.ancient].thirdStage.greenCards;
  let blueTotal = ancientsData[setting.ancient].firstStage.blueCards + ancientsData[setting.ancient].secondStage.blueCards + ancientsData[setting.ancient].thirdStage.blueCards;
  let brownTotal = ancientsData[setting.ancient].firstStage.brownCards + ancientsData[setting.ancient].secondStage.brownCards + ancientsData[setting.ancient].thirdStage.brownCards;

  const allGreenCards = [];
  const allBrownCards = [];
  const allBlueCards = [];

  let level = ''; 
  if(setting.dificulty == 0) level = 'hard';
  if(setting.dificulty == 2) level = 'easy';

  const finalDeck = [[], [], []];

  while (allGreenCards.length < greenTotal) {
    let randCard = Math.floor(Math.random() * (greenCardsData.length - 1 + 1));
    if(allGreenCards.indexOf(greenCardsData[randCard]) == -1 && greenCardsData[randCard].difficulty != level) {
    allGreenCards.push(greenCardsData[randCard]);
    }
  }

  while (allBrownCards.length < brownTotal) {
    let randCard = Math.floor(Math.random() * (brownCardsData.length - 1 + 1));
    if(allBrownCards.indexOf(brownCardsData[randCard]) == -1 && brownCardsData[randCard].difficulty != level) {
    allBrownCards.push(brownCardsData[randCard]);
    }
  }

  while (allBlueCards.length < blueTotal) {
    let randCard = Math.floor(Math.random() * (blueCardsData.length - 1 + 1));
    if(allBlueCards.indexOf(blueCardsData[randCard]) == -1 && blueCardsData[randCard].difficulty != level) {
    allBlueCards.push(blueCardsData[randCard]);
    }
  }

  for (let i = 0; i < allGreenCards.length; i++) {
    if(i < ancientsData[setting.ancient].firstStage.greenCards && ancientsData[setting.ancient].firstStage.greenCards != 0) {
      finalDeck[0].push(allGreenCards[i]);
    } else if(i >= ancientsData[setting.ancient].firstStage.greenCards && i < (ancientsData[setting.ancient].secondStage.greenCards + ancientsData[setting.ancient].firstStage.greenCards) && ancientsData[setting.ancient].secondStage.greenCards != 0) {
      finalDeck[1].push(allGreenCards[i]);
    } else if(i >= (ancientsData[setting.ancient].secondStage.greenCards + ancientsData[setting.ancient].firstStage.greenCards) && ancientsData[setting.ancient].thirdStage.greenCards != 0) {
      finalDeck[2].push(allGreenCards[i]);
    }
  }

  for (let i = 0; i < allBlueCards.length; i++) {
    if(i < ancientsData[setting.ancient].firstStage.blueCards && ancientsData[setting.ancient].firstStage.blueCards != 0) {
      finalDeck[0].push(allBlueCards[i]);
    } else if(i >= ancientsData[setting.ancient].firstStage.blueCards && i < (ancientsData[setting.ancient].secondStage.blueCards + ancientsData[setting.ancient].firstStage.blueCards) && ancientsData[setting.ancient].secondStage.blueCards != 0) {
      finalDeck[1].push(allBlueCards[i]);
    } else if(i >= (ancientsData[setting.ancient].secondStage.blueCards + ancientsData[setting.ancient].firstStage.blueCards) && ancientsData[setting.ancient].thirdStage.blueCards != 0) {
      finalDeck[2].push(allBlueCards[i]);
    }
  }

  for (let i = 0; i < allBrownCards.length; i++) {
    if(i < ancientsData[setting.ancient].firstStage.brownCards && ancientsData[setting.ancient].firstStage.brownCards != 0) {
      finalDeck[0].push(allBrownCards[i]);
    } else if(i >= ancientsData[setting.ancient].firstStage.brownCards && i < (ancientsData[setting.ancient].secondStage.brownCards + ancientsData[setting.ancient].firstStage.brownCards) && ancientsData[setting.ancient].secondStage.brownCards != 0) {
      finalDeck[1].push(allBrownCards[i]);
    } else if(i >= (ancientsData[setting.ancient].secondStage.brownCards + ancientsData[setting.ancient].firstStage.brownCards) && ancientsData[setting.ancient].thirdStage.brownCards != 0) {
      finalDeck[2].push(allBrownCards[i]);
    }
  }

  finalDeck[0] = shuffleArr(finalDeck[0]);
  finalDeck[1] = shuffleArr(finalDeck[1]);
  finalDeck[2] = shuffleArr(finalDeck[2]);


  createLevelTable(finalDeck);

  showCards(finalDeck);
  
}
let j = 0;

function showCards(finalDeck) {

  function deleteCard() {
    const curCard = document.querySelector('#current');
    curCard.classList.add('card');
    curCard.src = `../assets/MythicCards/${finalDeck[j][0].color}/${finalDeck[j][0].id}.png`;
  
    finalDeck[j].shift();
    if(finalDeck[j].length == 0) j++;

    createLevelTable(finalDeck);

    if((finalDeck[0].length + finalDeck[1].length + finalDeck[2].length) == 0) {
      currentCard.remove();
      cardCover.remove();
      finalDeck = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      j = 0;
    }
  }

  const currentCard = document.createElement('img');
  currentCard.id = 'current';
  const cardCover = document.createElement('img');
  cardCover.classList.add('card');
  cardCover.src = `../assets/mythicCardBackground.png`;
  cardCover.addEventListener('click', deleteCard);
  gameContainer.append(cardCover);
  gameContainer.append(currentCard);

}

function createLevelTable(finalDeck) {
  
  statContainer.innerHTML = '';
  let finalCounter = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  for (let i = 0; i < finalDeck.length; i++) {
    finalDeck[i].forEach((item) => {
      switch(item.color) {
        case 'green':
          finalCounter[i][0] = finalCounter[i][0] + 1;
          break;
        case 'brown':
          finalCounter[i][1] = finalCounter[i][1] + 1;
          break; 
        case 'blue':
          finalCounter[i][2] = finalCounter[i][2] + 1;
          break;      
      }
    });

  const stageContainer = document.createElement('div');
  stageContainer.classList.add('stage');

  stageContainer.innerHTML = `Stage ${i+1}`;

  const greenStatus = document.createElement('div');
  greenStatus.classList.add('green');
  greenStatus.textContent = finalCounter[i][0];
  stageContainer.append(greenStatus);

  const brownStatus = document.createElement('div');
  brownStatus.classList.add('brown');
  brownStatus.textContent = finalCounter[i][1];
  stageContainer.append(brownStatus);

  const blueStatus = document.createElement('div');
  blueStatus.classList.add('blue');
  blueStatus.textContent = finalCounter[i][2];
  stageContainer.append(blueStatus);

  statContainer.append(stageContainer);

  }
}

function createDifficultyLevel() {
  difContainer.innerHTML = '';
  const levels = ['Низкая сложность', 'Средняя сложность', 'Высокая сложность'];
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.classList.add('dif_level');
    li.innerHTML = `${levels[i]}`;
    li.id = i;
    li.addEventListener('click', startGame);
    difContainer.append(li);
  }
}

function createLevel(e) {
  ancients.forEach((item) => {
    item.classList.remove('ancient_active');
  });
  e.target.classList.add('ancient_active');
  setting.ancient = e.target.id;
  createDifficultyLevel();
}


