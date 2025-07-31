import { products } from './data';
import template from './template.hbs';

const container = document.getElementById('app');
container.innerHTML = template({ products });
