import { add, concate, divide } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

describe('concatenation', () => {
  it('should concatenate Gerald and Okeke', () => {
    const result = concate('Gerald', 'Okeke');
    expect(result).to.equal('GeraldOkeke');
});

  it('should concatenate Ekene and Akabueze', () => {
    const result = concate('Ekene', 'Akabueze');
    expect(result).to.equal('EkeneAkabueze');
  });


  it('should throw an error if there is an empty string', () => {
    expect(()=>{ concate ("", "")}).to.throw ('does not accept empty string')
  });

})

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
