//raccourci objet

const name = 'Yuval'
const userAge = '23'

const user = {
	name,
	age: userAge,
	location: 'Paris'
}

console.log(user);

//destructuration d'objet

const product = {
	label: 'Red noteBook',
	price: 4,
	stock: 201,
	salePrice: undefined,
	//rating: 4.2
}

// si variable existe pas on peut la définir, si non, elle ne peut pas être redéfini comme ci dessous

const {label: productLabel, price, rating = 5} = product

console.log(productLabel);
console.log(price + ' €');
console.log(rating);


const transaction = (type, {label, stock}) => {
	console.log(type, label, stock);
	
}

transaction('order', product)