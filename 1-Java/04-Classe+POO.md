# Java — Anatomia de uma Classe (Atributos, Métodos, Parâmetros e Construtores)

## 1. Estrutura básica de uma classe

```java
public class Pessoa {

    // atributos (também chamados de campos ou propriedades)
    private String nome;
    private int idade;

    // construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // métodos
    public void apresentar() {
        System.out.println("Olá, meu nome é " + nome);
    }

}
```

Uma classe é composta basicamente por três partes: **atributos** (o que ela guarda), **construtores** (como ela é criada) e **métodos** (o que ela faz).


## 2. Atributos

Atributos são as variáveis que pertencem à classe, representam o "estado" do objeto.

```java
public class Pessoa {
    private String nome;
    private int idade;
    private boolean ativo;
}
```

*Modificadores de acesso mais comuns*
- `private` — só a própria classe acessa (mais usado, protege o dado);
- `public` — qualquer classe acessa;
- `protected` — a própria classe, subclasses e classes do mesmo pacote acessam;
- *(sem modificador)* — apenas classes do mesmo pacote acessam ("package-private").

Regra prática: comece sempre com `private` e só abra o acesso (via `public`/`protected`) quando realmente precisar. Isso é o princípio de **encapsulamento**.


## 3. Construtores

O construtor é chamado automaticamente quando usamos `new` para criar um objeto. Serve para inicializar os atributos.

*Construtor padrão (sem parâmetros)*
```java
public class Pessoa {
    private String nome;

    public Pessoa() {
        this.nome = "Sem nome";
    }
}
```

*Construtor com parâmetros*
```java
public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

*Usando o construtor (instanciando)*
```java
Pessoa pessoa1 = new Pessoa("Diegho", 36);
```

*Sobrecarga de construtor*
Uma classe pode ter mais de um construtor, desde que a lista de parâmetros seja diferente (em quantidade ou tipo):

```java
public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa() {
        this("Sem nome", 0); // chama o outro construtor
    }

    public Pessoa(String nome) {
        this(nome, 0);
    }

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

O `this(...)` dentro de um construtor chama outro construtor da mesma classe — evita repetir código.


## 4. A palavra-chave `this`

`this` se refere ao próprio objeto que está sendo criado/manipulado. É usada principalmente para diferenciar o atributo da classe de um parâmetro com o mesmo nome:

```java
public Pessoa(String nome) {
    this.nome = nome; // this.nome é o atributo da classe / nome é o parâmetro recebido
}
```

Sem o `this`, `nome = nome` seria ambíguo (ou, na prática, só atribuiria o parâmetro a ele mesmo, sem alterar o atributo).


## 5. Métodos

Métodos são os "comportamentos" da classe — o que o objeto sabe fazer.

*Estrutura de um método*
```java
modificador tipoDeRetorno nomeDoMetodo(parâmetros) {
    // corpo do método
}
```

*Método sem retorno (void)*
```java
public void apresentar() {
    System.out.println("Olá, meu nome é " + nome);
}
```

*Método com retorno*
```java
public String getNome() {
    return nome;
}

public int calcularIdadeEm(int anos) {
    return idade + anos;
}
```

Todo método que não é `void` **precisa** terminar com um `return` do tipo declarado.


## 6. Parâmetros

Parâmetros são os dados que o método recebe pra trabalhar.

*Um parâmetro*
```java
public void cumprimentar(String nome) {
    System.out.println("Olá, " + nome);
}
```

*Vários parâmetros*
```java
public int somar(int a, int b) {
    return a + b;
}
```

*Parâmetro opcional na prática (varargs)*
Quando não se sabe quantos argumentos serão passados, usa-se `...`:
```java
public int somarTodos(int... numeros) {
    int total = 0;
    for (int numero : numeros) {
        total += numero;
    }
    return total;
}

// pode chamar de várias formas:
somarTodos();
somarTodos(5);
somarTodos(1, 2, 3, 4);
```

*Passagem de valor x referência*
- Tipos primitivos (`int`, `double`, `boolean`, etc) são passados **por valor** — o método recebe uma cópia, alterar dentro do método não afeta a variável original;
- Objetos (`String`, listas, classes próprias, etc) são passados **por referência** — o método recebe o "endereço" do objeto, então alterar seus atributos dentro do método afeta o objeto original.


## 7. Sobrecarga de métodos (overloading)

Assim como construtores, métodos também podem ter o mesmo nome, desde que os parâmetros sejam diferentes:

```java
public class Calculadora {

    public int somar(int a, int b) {
        return a + b;
    }

    public double somar(double a, double b) {
        return a + b;
    }

    public int somar(int a, int b, int c) {
        return a + b + c;
    }

}
```

O Java decide qual método chamar de acordo com o tipo e a quantidade de argumentos passados na chamada.


## 8. Métodos estáticos (`static`)

Métodos (e atributos) `static` pertencem à **classe**, não a uma instância específica. Não é necessário dar `new` para usá-los.

```java
public class Calculadora {

    public static int somar(int a, int b) {
        return a + b;
    }

}

// uso:
int resultado = Calculadora.somar(2, 3); // sem precisar instanciar
```

Use `static` para funcionalidades que não dependem do estado de um objeto específico (ex: métodos utilitários, como os da classe `Math`).


## 9. Getters e Setters

Como os atributos costumam ser `private`, criamos métodos públicos para ler (`get`) e alterar (`set`) seus valores de forma controlada:

```java
public class Pessoa {
    private String nome;
    private int idade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if (idade >= 0) { // exemplo de validação dentro do setter
            this.idade = idade;
        }
    }
}
```

A vantagem do `setIdade` sobre deixar o atributo `public` diretamente é poder **validar** o valor antes de aceitar — isso é encapsulamento na prática.


## 10. Exemplo completo juntando tudo

```java
public class Pessoa {

    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }

    public void apresentar() {
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
    }

    public static Pessoa criarAnonima() {
        return new Pessoa("Anônimo", 0);
    }

}
```

```java
public class Main {
    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Diegho", 36);
        pessoa.apresentar(); // Olá, meu nome é Diegho e tenho 36 anos.

        pessoa.setIdade(37);
        System.out.println(pessoa.getIdade()); // 37

        Pessoa anonima = Pessoa.criarAnonima(); // método static, sem precisar de instância prévia
        anonima.apresentar(); // Olá, meu nome é Anônimo e tenho 0 anos.
    }
}
```


## Checklist rápido
- [ ] Atributos representam o estado do objeto — comece com `private`
- [ ] Construtor inicializa o objeto, pode ter sobrecarga
- [ ] `this` diferencia atributo de parâmetro com mesmo nome
- [ ] Métodos `void` não retornam nada; outros precisam de `return`
- [ ] Parâmetros primitivos passam por valor, objetos passam por referência
- [ ] `static` pertence à classe, não à instância
- [ ] Getters/Setters controlam o acesso aos atributos privados

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```