var React = require('react');
var ReactDOM = require('react-dom');
import Hello from './component.jsx';
import { store } from './store/cart';
main();

function main() {
    ReactDOM.render(<Hello
      value={ store.getState() }
       onIncrement={ () => {store.dispatch({type: 'INCREMENT'})}}
       onDecrement={ () => {store.dispatch({type: 'DECREMENT'})}}
      />, document.getElementById('app'));
}

store.subscribe(main);
