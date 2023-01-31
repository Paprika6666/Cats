
const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();

// функция, которая будет вставлять данные из формы в template
// c данными из этой формы
// данные по структуре будут иметь те же ключи, что и в массиве cats.js
function handleFormAddCat(e) {
  e.preventDefault();
  // console.log(formAddCat.elements);
  const elementsFormCat = [...formAddCat.elements];
  const dataFromForm = serializeForm(elementsFormCat);

  api.addNewCat(dataFromForm);
  createCat(dataFromForm);
  popupAddCat.close()
}

// cats.forEach((cat)=> {
// 	createCat(cat);
	// const cardInstance = new Card(cat, "card-template");
	// const newCardElement - cardInstance.getElement();
	// cardsContainer.append(newCardElement);
// })

  // api.addNewCat(dataFromForm);
  // createCat(dataFromForm);
  // popupAddCat.close();


function deleteCat(cat) {
console.log(cat);
  ///

  // api.deleteCatById(cat.id); повесить слушатель на нужную карточку, чтобы удалитьь ее

}
// cats.forEach((cat) => {
//   createCat(cat);
// });

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
// btnClosePopupForm.addEventListener('click', () => popupAddCat.close());
formAddCat.addEventListener('submit', handleFormAddCat);

api.getAllCats().then((data) =>
  data.forEach((cat) => {
    createCat(cat);
    const btnDelete = document.addEventListener('click', () =>
      deleteCat(cat)
    );
  })
);



// api.deleteCatById('')
