

npm install react-qr-code

npm install qrcode

```js
import { useState } from "react";
import QRCode from "react-qr-code";


function Testes() {
  const [input, setInput] = useState('')
  const style = {
    display: "flex",
    flexDirection: 'column',
    margin: '5em'
  }
  
  return (
    <div style={style}>
      <textarea
        placeholder='Digite aqui'
        onChange={(e) => setInput(e.target.value)}
      />
      <QRCode
        value={input}
      />
    </div>
  );
}

export default Testes;
```
