import Promise from 'bluebird';
import mockcartData from './mockcartData';

const get = () => {
  return Promise.resolve(mockcartData);
}

export default {
  get
}
