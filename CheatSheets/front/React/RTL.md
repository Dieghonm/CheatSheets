# React Testing Library


import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`



```js
const model = "";
const func = () => {
    return model;
}
export default func;

```