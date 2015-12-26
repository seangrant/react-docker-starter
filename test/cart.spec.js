var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import counter, { store } from '../src/store/cart';

describe('counter:', () => {
  let state;

  describe('when no action is specified', () => {
    before(() => {
      state = counter(1, {});
    })
    it('should return state', () => {
      assert.equal(1, state);
    });
  })

  describe('when increnting counter', () => {
    before(() => {
      state = counter(1, { type: 'INCREMENT'});
    })
    it('should increment state by 1', () => {
      return expect(state).to.equal(2);
    });
  })

  describe('when decrementing counter', () => {
    before(() => {
      state = counter(1, { type: 'DECREMENT'});
    })
    it('should decrement state by 1', () => {
      return expect(state).to.equal(0);
    });
  })
});
