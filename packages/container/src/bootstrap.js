import { mount as mountCart } from 'cart/Index';
import { mount as mountProducts } from 'products/Index';

mountProducts(document.querySelector('#prod-products'));
mountCart(document.querySelector('#prod-cart'));
