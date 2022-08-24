const ancients = document.querySelectorAll('.ancient_img');
const difContainer = document.querySelector('.dif_levels');

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


function startGame(e) {
  setting.dificulty = e.target.id;
  createDeck();
}

function createDeck() {
  let greenTotal = ancientsData[setting.ancient].firstStage.greenCards + ancientsData[setting.ancient].secondStage.greenCards + ancientsData[setting.ancient].thirdStage.greenCards;
  let blueTotal = ancientsData[setting.ancient].firstStage.blueCards + ancientsData[setting.ancient].secondStage.blueCards + ancientsData[setting.ancient].thirdStage.blueCards;
  let brownTotal = ancientsData[setting.ancient].firstStage.brownCards + ancientsData[setting.ancient].secondStage.brownCards + ancientsData[setting.ancient].thirdStage.brownCards;

  console.log(`${greenTotal}\n${brownTotal}\n${blueTotal}`);

  const allGreenCards = [];
  const allBrownCards = [];
  const allBlueCards = [];

  while (allGreenCards.length < greenTotal) {
    let randCard = Math.floor(Math.random() * (greenCardsData.length - 1 + 1));
    if(allGreenCards.indexOf(greenCardsData[randCard]) == -1) {
    allGreenCards.push(greenCardsData[randCard]);
    }
  }

  while (allBrownCards.length < brownTotal) {
    let randCard = Math.floor(Math.random() * (brownCardsData.length - 1 + 1));
    if(allBrownCards.indexOf(brownCardsData[randCard]) == -1) {
    allBrownCards.push(brownCardsData[randCard]);
    }
  }

  while (allBlueCards.length < blueTotal) {
    let randCard = Math.floor(Math.random() * (blueCardsData.length - 1 + 1));
    if(allBlueCards.indexOf(blueCardsData[randCard]) == -1) {
    allBlueCards.push(blueCardsData[randCard]);
    }
  }

  // console.log(allGreenCards);
  // console.log(allBrownCards);
  // console.log(allBlueCards);

}

function createDifficultyLevel() {
  difContainer.innerHTML = '';
  const levels = ['Низкая сложность', 'Средняя сложность', 'Высокая сложность'];
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.classList.add('dif_level');
    li.innerHTML = `${levels[i]}`;
    li.id = i + 1;
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


