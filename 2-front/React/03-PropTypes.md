# PropTypes

O react ja instala na aplicação, caso nao tenha instalado
npm install --save-dev prop-types

verifica os tipos das props passadas para um componente, evitando que o componente receba props de tipos primitivos errados

import PropTypes from 'prop-types';



```js
MyComponent.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios, basta adicionar .isRequired
  numeroObrigatorio: PropTypes.number.isRequired,

  // Tipos básicos do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDeNumeros: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDeNumeros: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    availability: PropTypes.bool,
  }),
};
```


```js
EX.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

```
