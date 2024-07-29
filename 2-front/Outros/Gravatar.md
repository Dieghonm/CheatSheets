# Gravatar

Usamos o gravatar para por uma avatar para os usuarios poderem usar
para usar ele e necessario instalar o crypto-js

`npm install crypto-js`

para usar e so passar o email cadastrado para o md5 e depois anexar ao link do gravatar
como no exemplo

```js
import md5 from 'crypto-js/md5';

const emailGravatar = md5(Email).toString();
const avatar = `https://www.gravatar.com/avatar/${emailGravatar}`;

  <img
    height="35"
    src={ avatar }
    alt="Avatar"
  />
```
