
// Находим все элементы хедера
const header = document.querySelector('.top-bar');
const headerInnerBlock = header.querySelector('.header-inner-block');
const hideHeaderBtn = document.querySelector('.hide-header-btn');
const showHeaderBtn = document.querySelector('.show-header-btn');

// показываем хедер 
function showHeader() {
        header.classList.add('top-bar--active');
        showHeaderBtn.style.zIndex = '-1';
        headerInnerBlock.style.borderColor = 'rgba(117, 255, 230, 0.5)';
}

// Скрывем хедер
function hideHeader() {
    header.classList.remove('top-bar--active');
    header.classList.remove('top-bar--fixed');
    showHeaderBtn.style.zIndex = '1';
    headerInnerBlock.style.borderColor = 'transparent';
}

// Вешаем обработчики события на кнопки закрытия / открытия хедера
hideHeaderBtn.addEventListener('click', hideHeader);
showHeaderBtn.addEventListener('click', showHeader);

// Вешаеи обработчик события скролл на окно
window.onscroll = function showHeader() {
    // Если скролл больше 266px и хедер имеет класс top-bar--active, то добавляем класс top-bar--fixed и фиксируе хедер, если нет то удаляем top-bar--fixed
    if(window.pageYOffset > 266 && header.classList.contains('top-bar--active')){
        header.classList.add('top-bar--fixed');
        headerInnerBlock.style.borderColor = 'rgba(117, 255, 230, 0.5)';
    } else{
        header.classList.remove('top-bar--fixed');
    }
};
