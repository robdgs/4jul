// Spread:
// scrivere una funzione che unisce le proprietà di due oggetti
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }

// Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };

// Destructuring:
// Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length

// Get/Set
// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:
// leggere _products nel getter
// sovrascrivere _products nel setter
// contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

// const shop = {
//   _products: [],
//   get products() {

//   },
//   set products(val) {

//   }
// }

//1+opzionale
(function supermarket() {
  const products = {
    fruits: ["Banana", "Mango"],
    vegetables: ["Potato", "Broccoli"],
  };
  const store = {
    store: "Walmart",
  };

  const obj3 = { ...products, ...store, quantity: "10 pcs" };
  return console.log(obj3);
})();

//destructuring
const array = [
  "armadio",
  "ornitorinco",
  "Ermenegildo",
  "loft",
  "spazzacamino",
  "Osvaldo",
];

const filteredArray = array.filter((element) => {
  return element.length >= 10;
});
console.log(filteredArray);

//get/set

const firstProduct = {
  id: "1",
  type: "Washingmachine",
  color: "gray",
  price: "300 $",
};
const secondProduct = {
  id: "2",
  type: "Macbook",
  color: "Spacegray",
  price: "1200 $",
};

const myShop = {
  _products: [firstProduct, secondProduct],

  get products() {
    return this._products;
  },
};

console.log(myShop.products[0]);

document.body.innerHTML = ` 
<ul class="product-list"> 
<li>Id:${myShop.products[0].id}</li> 
<li>Type:${myShop.products[0].type}</li> 
<li>Price:${myShop.products[0].price}</li> 
</ul> 
 
<ul class="product-list"> 
<li>Id:${myShop.products[1].id}</li> 
<li>Type:${myShop.products[1].type}</li> 
<li>Price:${myShop.products[1].price}</li> 
</ul> 
 `;
