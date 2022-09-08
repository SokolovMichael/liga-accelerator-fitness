const tabsLists = document.querySelectorAll('.tabs__list');

const focusCard = () => {
  for (let i = 0; i < tabsLists.length; i++) {
    tabsLists[i].addEventListener('keydown', (evt) => {
      if (evt.key === 'Tab') {
        evt.target.classList.add('card--hover');
        evt.target.querySelector('a').onblur = function () {
          evt.target.classList.remove('card--hover');
        };
      }
    });
  }
};

export {focusCard};
