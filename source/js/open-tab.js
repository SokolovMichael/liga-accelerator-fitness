const tabs = document.querySelector('.tabs');
const tabsItems = tabs.querySelector('.tabs__items');
const tabsItemsArray = tabsItems.querySelectorAll('.tabs__item');
const tabsListArray = tabs.querySelectorAll('.tabs__list');

const openTab = () => {
  tabs.classList.remove('tabs--nojs');
  tabsItems.addEventListener('click', (evt) => {
    if (evt.target.className === 'tabs__item') {
      for (let i = 0; i < tabsItemsArray.length; i++) {
        tabsItemsArray[i].classList.remove('tabs__item--opened');
      }
      evt.target.classList.add('tabs__item--opened');

      for (let i = 0; i < tabsListArray.length; i++) {
        tabsListArray[i].classList.remove('tabs__list--opened');
      }

      let id = evt.target.getAttribute('href');
      let str = id.replace('#', '');
      document.getElementById(str).classList.add('tabs__list--opened');
    }
  });
};

export {openTab};
