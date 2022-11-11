# Style Components - mobile first


const media ={
  mobileS: '@media(min-width:320px)',
  mobileM: '@media(min-width:375px)',
  mobileL: '@media(min-width:425px)',
  tablet: '@media(min-width:768px)',
  laptop: '@media(min-width:1024px)',
  laptopL: '@media(min-width:1440px)',
  desktop: '@media(min-width:2560px)',
}

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  ${ media.mobileL }{ 
    color: black;
  }
  color: palevioletred;
`;

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