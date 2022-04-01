// Находим все элементы, которые завязаны на кружках

const circles = document.querySelectorAll('.circle-container');
const circlesContainer = document.querySelectorAll('.circle-container--question');
const circlesContainerDialog = document.querySelectorAll('.circle-container--dialog');
const description = document.querySelector('.header__description');
const messages = document.querySelectorAll('.message');
const triangels = document.querySelectorAll('.triangle-container');

// Скрываем окна персонажей
const hideMessages = () => {
  messages.forEach(element => {
    element.classList.add('hide');
  });
};

// Перебираем всех персонажей для взаимдействия
circles.forEach(item => {
  const circle = item.querySelector('.circle'); // Находим персонажа
  const name = item.getAttribute('data-name'); // Получаем дата-атрибут с именем
  const age = item.getAttribute('data-age');  // Получаем дата-атрибут с возрастом
  const state = item.getAttribute('data-state'); // Получаем дата-атрибут с статьей

  // Вешаем обработчик события наведения мыши на каждого персонажа
  circle.addEventListener('mouseover', () => {
    description.textContent = `Заключенный ${name}, ${age} года. Осужден по ст. ${state} УК РФ`; // Меняем опиание через шаблонную строку 
  });

  // Вешаем обработчик события уведения мыши с каждого персонажа
  circle.addEventListener('mouseout', () => {
    description.textContent = `Начните базар с заключенным, готовым вам открыться`;
  })
});

triangels.forEach(item => {
  const triangle = item.querySelector('.triangle');
  
    triangle.addEventListener('mouseover', () => {
      description.textContent = `Надзиратель, осторожно!`; // Меняем опиание через шаблонную строку
      description.style.color = 'red';
    });
  
    triangle.addEventListener('mouseout', () => {
      description.textContent = `Начните базар с заключенным, готовым вам открыться`;
      description.style.color = '';
    })
});

// Перебираем всех контейнеры персонажей для взаимдействия
circlesContainer.forEach(item => {
  const circle = item.querySelector('.circle');  // Находим всех персонажей
  const message = item.querySelector('.message'); // Находим все сообщения
  const cross = item.querySelector('.message__close-btn'); // Находим все кнопки закрытия
  
  // Вешаем обработчики события на кнопку закрытия
  circle.addEventListener('click', () => {
    message.classList.remove('hide'); // Закрываем сообщения
  });

  // Вешаем обработчики события на кнопку закрытия
  cross.addEventListener('click', () => {
    message.classList.add('hide'); // Закрываем сообщения
  })
});

// Перебираем всех диалоговые окна
circlesContainerDialog.forEach(dialog => {
    const circle = dialog.querySelector('.circle');
    const message = dialog.querySelector('.message');
    const answer = message.getAttribute('data-answer'); // Получаем дата-атрибут ответа для проверки
    const messageText = dialog.querySelector('.message__text');
    const messageAnswer = dialog.querySelector('.message__text--answer');
    const question = messageText.getAttribute('data-question'); // Получаем дата-атрибут  вопроса
    const cross = dialog.querySelector('.message__close-btn');

    const input = dialog.querySelector('textarea');
    const answerBtn = dialog.querySelector('.answer-btn');
    
    circle.addEventListener('click', () => {
      message.classList.remove('hide');
      messageText.textContent = question;
    })
    
    cross.addEventListener('click', () => {
      message.classList.add('hide');
      input.value = '';
      input.classList.remove('hide');
      messageAnswer.classList.add('hide');
      answerBtn.classList.remove('hide');
      answerBtn.style.opacity = 1;
    });

    // Обработчик события на кнопку ответа
    answerBtn.addEventListener('click', () => {
        input.classList.add('hide');
      // Делаем проверку. Если введенный ответ совпадает с ответом в дата-атрибуте, то выводим успех, если нет, то провал
        if(input.value === answer) {
            messageText.textContent = 'Верно';
        } else {
            messageText.textContent = 'Правильный ответ';
            messageAnswer.classList.remove('hide');
            answerBtn.style.opacity = 0;
        }
    });
  });
 
// Скрываем все окна на странице при загрузке
hideMessages();
