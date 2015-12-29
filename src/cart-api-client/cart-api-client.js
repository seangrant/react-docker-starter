import Promise from 'bluebird';
import mockcartData from './mockcartData';

const products = () => {
  return Promise.resolve(mockcartData);
}
export default {
  products
}
