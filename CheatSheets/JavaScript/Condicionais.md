# Condicionais

**if/else**

Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira

```js
if (hour < 18) {
  greeting = "Good day";
}
```

Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa

```js
if (hour < 18) {
  greeting = "Good day";
}else {
    greeting = "Good night";
}
```

podemos usar tambem na forma de ternario

```js
hour < 18 ? greeting = "Good day" : greeting = "Good night";
```

Use else if para especificar uma nova condição a ser testada, se a primeira condição for falsa

```js
if (hour < 12) {
    greeting = "Good day";
}else if (hour < 18) {
    greeting = "Good evening";
}else {
    greeting = "Good night";
}
```

**swith/case**

Use switchpara especificar muitos blocos alternativos de código a serem executados

```js

switch(hour) {
  case < 12:
    greeting = "Good day"
    break;
  case < 18:
    greeting = "Good evening";
    break;
  default:greeting = "Good night";
}
```
