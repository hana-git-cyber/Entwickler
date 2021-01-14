import {Person} from "./person";

describe('Person', () => {
  it('create an instance', () => {
    const pipe = new Person();
    expect(pipe).toBeTruthy();
  });
});
