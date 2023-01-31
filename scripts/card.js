class Card {
  constructor(dataCat, selectorTemplate) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate() {  
    return document.querySelector(this._selectorTemplate).content.querySelector('.card');
     }
  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector('.card__name');
    const cardImage = this.element.querySelector('.card__image');
    const cardLike = this.element.querySelector('.card__like');
    const cardDelete = this.element.querySelector('.card__delete');
    
    // console.log({ cardDelete });

    // console.log('>>>', this._data);
    cardDelete.classList.add(`${this._data.id}`);


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
    return this.element;
  }
}

const card = new Card(cats[0], '#card-template');

// ?? оператор нулевого слияния, если null, то показать правую часть


