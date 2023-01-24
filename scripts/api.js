// - GET (https://cats.petiteweb.dev/api/single/:user/show) - отобразить всех котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/ids) - отобразить все возможные айди котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/show/:id) - отобразить конкретного котика
// - POST (https://cats.petiteweb.dev/api/single/:user/add) - добавить котика
// - PUT (https://cats.petiteweb.dev/api/single/:user/update/:id) - изменить информацию о котике
// - DELETE (https://cats.petiteweb.dev/api/single/:user/delete/:id)- удалить котика из базы данных by id

// console.log('hello');

const configApi = {
  url: 'https://cats.petiteweb.dev/api/single/paprika',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
};

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  getAllCats() {
    /// отобразить всех котиков
    fetch(`${this._url}/show`, {
      method: 'GET',
    });
  }
  getAllCatsId() {
    /// отобразить все возможные айди котиков
    fetch(`${this._url}/ids`, {
      method: 'GET',
    });
  }
  getCatById(id) {
    /// отобразить конкретного котика
    fetch(`${this._url}/show/${id}`, {
      method: 'GET',
    });
  }
  addNewCat(body) {
    fetch(`${this._url}/add`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }
  updateCatById(id, data) {
    fetch(`${this._url}/update/${id}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }
  deleteCatById(id) {
    /// удалить конкретного котика по айди
    fetch(`${this._url}/delete/${id}`, {
      method: 'DELETE',
    });
  }
}

// const api = new Api(configApi);
// console.log(api);

// const newCat = {
//   id: 1673690003098,
//   name: 'Motroskn',
//   favorite: true,
//   rate: 1,
//   age: 10,
//   description: 'ласковый и пушистый котяра',
//   image: 'https://http.cat/100',
// };
// const newCatUpdated = {
//   id: 1673957663241,
//   name: 'Маня',
//   image: 'https://http.cat/425',
// };

// api.getAllCats();
// api.getAllCatsId();
// api.getCatById(1673690003098);
// api.addNewCat(newCat)
// api.updateCatById(1673957663241, newCatUpdated);

// api.deleteCatById(1673690003098);


