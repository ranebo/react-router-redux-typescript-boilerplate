// src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from 'app/containers/Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Rane" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Rane!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Rane" enthusiasmLevel={1}/>);
  expect(hello.find('.greeting').text()).toEqual('Hello Rane!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="Rane" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Rane!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Rane" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Rane" enthusiasmLevel={-1} />);
  }).toThrow();
});
