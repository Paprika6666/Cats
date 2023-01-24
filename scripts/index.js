const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');

const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup('popup-add-cats');
console.log({ popupAddCat });


cats.forEach((cat) => {
  const cardInstance = new Card(cat, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
});

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', () => popupAddCat.close());

