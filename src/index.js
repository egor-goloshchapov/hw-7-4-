import { products } from '../data';

const container = document.getElementById('app');

const ul = document.createElement('ul');

products.forEach(product => {
  const li = document.createElement('li');

  const name = document.createElement('h2');
  name.textContent = product.name;

  const description = document.createElement('p');
  description.textContent = product.description;

  const price = document.createElement('p');
  price.innerHTML = `<strong>Price:</strong> $${product.price}`;

  li.append(name, description, price);
  ul.appendChild(li);
});

container.appendChild(ul);


