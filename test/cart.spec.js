import assert from 'assert';
import chai from 'chai';
const expect = chai.expect;
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import counter, { store } from '../src/store/cart/cart';
import { addCartItem } from '../src/store/cart/cart.actionCreator';

describe('cart:', () => {
  let state;

  describe('when no action is specified', () => {
    before(() => {
      state = counter([], {});
    })
    it('should return state', () => {
      assert.deepEqual([], state);
    });
  })

  describe('when adding an item to the cart', () => {
    const stateBefore = [];
    const item = {
        id: 1,
        quantity: 1
    };
    const action = addCartItem(item);

    let stateAfter;
    const expectedStateAfter = [item];
    before(() => {
      stateAfter = counter(stateBefore, action);
    })
    it('should add the item', () => {
      expect(stateAfter).to.deep.equal(expectedStateAfter);
    })

  })
});
