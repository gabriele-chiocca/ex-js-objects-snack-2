//Risposte

//Question 1

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

//RISPOSTA
// console.log(hamburger.name); Riposta: "Double Cheese Burger"
// console.log(secondBurger.name); Riposta : "Double Cheese Burger"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

//Vi è solo un oggetto ai quali fanno riferimento hamburger e secondBurger

//Question 2

/*

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.ingredients[0]); RISPOSTA "Salad"
console.log(secondBurger.ingredients[0]); RISPOSTA "Salad"

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Ci sono due oggetti realizzati l'oggetto principale al quale si fa riferimento in hamburger e la shallow copy creata in secondBurger

Correction :

In realtà sono 3 oggetti quindi oltre ai 2 citati anche l'array innestato nel riferimento di hamburger

*/

//Question 3

/*


Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati 3 oggetti:

1) hamburger

2) secondBurger

3) thirdBurger


*/

// Question 4

/*


Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Per clonare l'oggetto chef il metodo migliore è lo spread operator quindi ad esempio const secondChef = {...chef}; poichè è inclusa una arrow function e con lo spread operator possiamo riportarla


Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

In questo caso il metodo miglioe è lo structuredClone ovvero const secondRestaurant = structuredClone(restaurant); poichè comprende dati complessi come new Date che con il metodo stringify diventerebbero delle stringhe non parsabili correttamente.



*/

// Question 5 Bonus

/*

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?


console.log(hamburger.maker.name); RISPOSTA "Chef Hyur"
console.log(secondBurger.maker.name); RISPOSTA "Chef Hyur"
console.log(hamburger.maker.restaurant.name); RISPOSTA "Hyur's II"
console.log(secondBurger.maker.restaurant.name); RISPOSTA "Hyur's II"

*/

// Question 6 Bonus

/*


Qual è il metodo migliore per clonare l’oggetto chef, e perché?


Vedendo il codice, penso che il metodo migliore sia fare più shallow copy poichè ci sono funzioni all'interno degli oggetti riportati e soprattutto conosciamo perfettamente la struttura dell'oggeto, direi di farne più perchè ci sono funzioni innestate quindi volendo si potrebbe fare:

const copyChef = {...chef, restaurant: {...chef.restaurant}, address: {...chef.address}}

*/
