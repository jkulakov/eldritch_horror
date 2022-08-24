const ancients = document.querySelectorAll('.ancient_img');
const difContainer = document.querySelector('.dif_levels');

let setting = {
  ancient: '',
  dificulty: ''
};

function startGame(e) {
  console.log(e.target);
  setting.dificulty = e.target.id;

  console.log(setting);

}

function createDifficultyLevel() {
  difContainer.innerHTML = '';
  const levels = ['Низкая сложность', 'Средняя сложность', 'Высокая сложность']
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
  console.log(e.target);
  ancients.forEach((item) => {
    item.classList.remove('ancient_active');
  });
  e.target.classList.add('ancient_active');
  setting.ancient = e.target.id;
  createDifficultyLevel();
}

ancients.forEach((item) => {
  item.addEventListener('click', createLevel);
});

