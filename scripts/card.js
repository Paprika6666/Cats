class Card {
  constructor(dataCat, selectorTemplate) {
    // constructor(dataCat, selectorTemplate, onClickToEdit) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
    // this.onClickToEdit = onClickToEdit;
  }

  _getTemplate() {  
    return document.querySelector(this._selectorTemplate).content.querySelector('.card');
     }
  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    // const cardTitle = this.element.querySelector('.card__name');
    const cardTitle = this.element.querySelector('.card__name');
    const cardImage = this.element.querySelector('.card__image');
    const cardLike = this.element.querySelector('.card__like');
    const deleteBtn = this.element.querySelector('.card__delete');
    const cardLink = this.element.querySelector('.card__link');

    this.cardTitle = this.element.querySelector('.card__name');

    deleteBtn.setAttribute('id',this._data.id);
// this.element.setAttribute('id', this.data.id);
    deleteBtn.addEventListener('click', (e)=>{
      console.log(e, '>>>',this._data.id);

        if (confirm ('Хотите удалить котика?')){
           api.deleteCatById(this._data.id).then(()=>{
            const elem = document.getElementById(this._data.id);
            elem.parentElement.remove();
           });
          
        }
     
    });
   
      if (!this._data.favorite) {
      cardLike.remove();
    }

    // console.log({cardTitle});
    // console.log(this.data);
    // console.log(cardTitle.textContent);

   cardTitle.textContent = this._data.name ?? 'Barsik';
    cardImage.src =
      this._data.image ||
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

      // cardLink.addEventListener('click', ()=>{
      // // console.log('data.id',this_data.id)
      // this.onClickToEdit(this.element, this._data.id)
      // });

    return this.element;
  }
}

const card = new Card(cats[0], '#card-template');

// ?? оператор нулевого слияния, если null, то показать правую часть


