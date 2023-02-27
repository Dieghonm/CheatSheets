# Iniciando com o Typescript

na raiz do projeto
`npm install -g typescript@4.4`


Arrays
```js 
  let names: string[] = ["Mary Joe", "Alan Joe"];
```

Tuplas
```js
  let fullName: [string, string] = ["Jane", "Doe"];
  let person: [string, number] = ["Jane Doe", 35];
  let car: [string, string, number] = ["Ford", "F400", 10];
```

*Type Aliases*

Type Aliases (apelidos de tipos) são utilizados para declarar a forma de um objeto nomeando o tipo, o que nos permite usar o mesmo tipo mais de uma vez e nos referir a ele através de um único nome. Um type alias é exatamente isso: um nome para qualquer tipo.
note que o type e declarado no objeto e utilizado de forma dinamica na função

```js
  type Point = {
    x: number;
    y: number;
  };

  function printCoord(pt: Point) {
    console.log("O valor da coordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
  }

  printCoord({ x: 100, y: 100 });
```
*Type Unions*

é uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Para isso, é preciso declarar os tipos esperados separados por barra vertical (|) conhecido em inglês como pipe.

A função abaixo pode receber tanto um número quanto uma string.
```js
  function imprimirCPF(cpf: number | string){
    console.log("Seu CPF é: " + cpf);
  }

  imprimirCPF(11111111111);
  imprimirCPF('111.111.111-11');
```

**Classes**
No TypeScript, as classes são uma maneira de definir a forma de um objeto. Podemos considerar uma classe como um projeto para a criação de objetos. Uma classe Person descreve os atributos de uma pessoa, por exemplo: nome, data de nascimento e idade. Ela também descreve ações que uma pessoa pode executar, como falar, comer ou andar.

Mas a classe Person é apenas um plano para a criação de uma pessoa. Você deve criar uma instância de pessoa da classe Person antes que ela se torne um objeto ao qual você possa atribuir valores de propriedade (como definir a idade como 27) ou chamar suas ações (como falar).

```js
  class Person {
    name: string;
    birthDate: Date;
    age: number;
    constructor(name: string, birthDate: Date, age: number;) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.age  = age;
    }

    speak(): void {
      console.log(`${this.name} está falando.`);
    }

    eat(): void {
      console.log(`${this.name} está comendo.`)
    }

    walk(): void {
      console.log(`${this.name} está andando.`)
    }
  }
```
A classe Person pode ser reutilizada para criar qualquer quantidade de novos objetos Person, cada um com suas próprias características.

```js
const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();
```

Também é possível dizer que uma das propriedades da nossa classe Person não é obrigatória para criarmos um objeto pessoa. Basta adcionar ? na declaração das variaveis no metodo contrutor e na declaração de tipo.

```js
class Person {
    name: string;
    birthDate: Date;
    age?: number;

    constructor(name: string, birthDate: Date, age?: number) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

}
```
**Interfaces**

Esta é mais uma estrutura que não existe no JavaScript. A Interface é utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos. São uma forma eficiente de definir um “contrato de código”, ou seja, aquilo que você espera que seja implementado dentro do seu código.

Por exemplo, se quiséssemos criar uma interface que define as propriedades e métodos de um funcionário, seria assim:

```js
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```
Uma interface não inicializa nem implementa as propriedades declaradas dentro dela, porque o único trabalho de uma interface é descrever o objeto. Ela define o que o contrato de código exige, enquanto quem implementa a interface deve atender ao contrato fornecendo os detalhes de implementação necessários.

```js
let employee: Employee = {
    firstName : "John",
    lastName: "Doe",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
```

Uma interface também pode estender de uma outra, o que permite que copiemos as propriedades de uma interface em outra, proporcionando mais flexibilidade na maneira de separará-las em componentes reutilizáveis. Podemos estender uma interface, usando a palavra reservada extends:

```js
interface Teacher extends Employee {
    subject: string;
    sayHello(): string;
}

let teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
}
```

Observe que um objeto que atende à interface Teacher precisa definir valores para todas as propriedades exigidas por essa interface, incluindo as propriedades da interface base Employee.

Por exemplo, o objeto teacher possui as propriedades firstName, lastName e o método fullName da interface Employee, mas também possui as próprias propriedade subject e o método sayHello que são específicas da interface Teacher.

Classes também podem implementar interfaces, o que faz com que a classe possua todas as propriedades e métodos daquela interface.



**Type Assertion (as Type)**
Há momentos em que precisamos utilizar recursos nativos do JavaScript, ou até mesmo bibliotecas externas, que podem não oferecer opções para realizarmos uma tipagem eficiente para obtermos o tipo correto para uma variável ou objeto. Quando nos deparamos com cenários assim, a melhor alternativa é buscar entender a estrutura que a variável ou objeto terá em momento de execução (runtime) para então forçar um tipo específico utilizando o Type Assertions do TypeScript.

Por exemplo, a seguir temos uma função que converte string para json. Por ser muito genérica, a tipagem que a função retorna é desconhecida (unknown), mas observando o código dá para notar na string a ser convertida qual estrutura será retornada depois que a função for executada. Sendo assim, podemos forçar um tipo específico para aquele objeto e continuar aproveitando os recursos do TypeScript:

```js
type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;
```
Mais exemplos curtos usando Type Assertions

```js
const str: unknown = 'texto'; // simulando um valor supostamente desconhecido

str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
(str as string).split('') // Corrigindo o erro acima usando o 'as'

const num: string = '2';

num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
(num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown
```

Type Assertion é uma forma de você falar para o compilador “confia em mim, eu sei o que estou fazendo”. Portanto, é um recurso que você só deve utilizar se realmente souber a estrutura de tipo esperada para uma variável ou objeto. O ideal, na verdade, é que Type Assertion seja a sua segunda alternativa para conseguir atribuir tipos específicos em valores incertos ou desconhecidos. A primeira alternativa para tentar tipar comportamentos genéricos que você pode optar é utilizar os Generics que o próprio TypeScript oferece.

**Generics**
Generics é uma forma de passarmos, por meio de parâmetros, tipos para funções que se comportam de forma genérica.

Para entendermos melhor podemos refatorar o código anterior, que fizemos utilizando Type Assertions, para começar a utilizar Generics:

```js
/ [...]
function stringToJson<T>(str: string): T {
  const result = JSON.parse(str);
  return result;
}

const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

const address = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;
```

Note que agora estamos recebendo um parâmetro genérico T na função destino e esperamos que seja retornado esse mesmo tipo. Na hora de utilizar a função basta somente informar o tipo que gostaríamos de obter.

Perceba que o código ainda se comporta da mesma forma que quando usamos Type Assertions, porém estamos tipando com uma estratégia diferente.

Optar pelo uso de Generics para casos como o do exemplo de código acima, acaba sendo mais vantajoso, pois se nosso código precisar passar por alterações o Generics consegue oferecer possibilidades mais organizadas para escalar a tipagem. Por exemplo, vamos imaginar que agora nossa função stringToJson precisará adicionar um identificador único no resultado do nosso objeto. Nós vamos informar esse identificador como segundo parâmetro da função, e além disso atribuir um outro tipo genérico:

```js
// [...]
function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
  // const result = JSON.parse(str);
  result.id = id;
  // return result;
}

const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user.id;
address.id;
```

Veja os pontos que alteramos acima:

O envio de múltiplos tipos por parâmetro (T e o U);
A possibilidade de usar o parâmetro genérico de maneira distribuída na função destino (tanto no parâmetro id: U como no retorno T & { id: U });
A manipulação dos genéricos para modificar o tipo de retorno esperado (na interseção T & { id: U })
Note que as propriedades id de user e address têm exatamente o mesmo tipo que informamos no segundo parâmetro do Generics (assim como o segundo parâmetro da função). Você pode provocar um erro proposital trocando o tipo string por boolean, por exemplo. Se fizer isso vai perceber que o TypeScript irá reclamar. 😁

Declaramos uma variável de nome numberArray chamando a função getArray e passando a ela um array de numbers, enquanto uma variável stringArray é declarada com um array de strings. Como o tipo any foi usado, não há nada que impeça o código de enviar um string para o numberArray ou um number para o stringArray.

Mais exemplos curtos usando Generics
```js

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
stringArray.push(30); // Isto vai gerar um erro de compilação
```
