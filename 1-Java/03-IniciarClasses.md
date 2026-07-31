# Spring Boot — Criando e Consumindo uma Classe (Injeção de Dependência)

Esse tutorial dá sequência ao `01-HelloWorld-CommandLineRunner.md`. Vamos usar o mesmo projeto `hello-world`.

## 1. Duas formas de criar e usar uma classe

Existem basicamente dois jeitos de uma classe "existir" e ser usada dentro de uma aplicação:

1. **Do jeito Java puro** — você cria a classe e instancia ela manualmente com `new`, como sempre fez;
2. **Do jeito Spring (Injeção de Dependência)** — você "avisa" o Spring que aquela classe deve ser gerenciada por ele, e pede pra ele te entregar a instância pronta, sem precisar dar `new`.

Vamos ver os dois, pra entender a diferença na prática.


## 2. Jeito Java puro (sem Spring)

*Criar o pacote*
- Botão direito em `src/main/java/com/seunome/helloworld`;
- `New > Package`;
- Nomeie como ` `.

*Criar a classe*
Dentro do pacote `service`, crie o arquivo `Saudacao.java`:

```java
package com.seunome.helloworld.service;

public class Saudacao {

    public String cumprimentar(String nome) {
        return "Olá, " + nome + "!";
    }

}
```

*Consumindo no `run()`*
Edite o `HelloWorldApplication.java`:

```java
package com.seunome.helloworld;

import com.seunome.helloworld.service.Saudacao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloWorldApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Saudacao saudacao = new Saudacao();
        System.out.println(saudacao.cumprimentar("Mundo"));
    }

}
```

Rode a aplicação. Deve aparecer `Olá, Mundo!` no console — funciona normalmente, sem nada de especial do Spring envolvido. É só uma classe Java comum sendo instanciada com `new`.










---------------------//------------------//----------------------/-/-----------------------------//--------

*O problema desse jeito:* em projetos pequenos não faz diferença, mas conforme a aplicação cresce, você começa a ter classes que dependem de outras, que dependem de outras... e todo esse `new` manual vira um emaranhado difícil de manter e de testar. É pra resolver isso que existe a Injeção de Dependência.


## 3. Jeito Spring (Injeção de Dependência)

A ideia é: em vez de você criar (`new`) o objeto, você deixa o Spring criar e "injetar" ele onde for preciso. O Spring guarda essas instâncias num espaço chamado **Application Context** (pense nele como uma caixa gerenciada pelo Spring, cheia de objetos prontos pra usar).

*Passo 1 — avisar o Spring que a classe deve ser gerenciada*

Adicione a anotação `@Service` em cima da classe `Saudacao`:

```java
package com.seunome.helloworld.service;

import org.springframework.stereotype.Service;

@Service
public class Saudacao {

    public String cumprimentar(String nome) {
        return "Olá, " + nome + "!";
    }

}
```

`@Service` é uma especialização de `@Component` — ambas dizem ao Spring "gerencie essa classe pra mim". Usamos `@Service` por convenção quando a classe representa uma regra de negócio (contém um `@Component` genérico por baixo dos panos).

*Passo 2 — pedir a instância ao Spring, em vez de dar `new`*

Edite o `HelloWorldApplication.java`:

```java
package com.seunome.helloworld;

import com.seunome.helloworld.service.Saudacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloWorldApplication implements CommandLineRunner {

    @Autowired
    private Saudacao saudacao;

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(saudacao.cumprimentar("Mundo"));
    }

}
```

*Explicando o que mudou*
- `@Autowired` — diz ao Spring: "encontre uma instância de `Saudacao` no Application Context e coloque aqui pra mim";
- Repare que **não usamos `new` em nenhum momento**. O Spring criou o objeto sozinho (porque a classe tem `@Service`) e entregou pronto.

Rode a aplicação de novo. O resultado no console é o mesmo, `Olá, Mundo!` — mas agora quem controla o ciclo de vida do objeto `Saudacao` é o Spring, não você.


## 4. Por que isso importa?

Com Injeção de Dependência:
- Você não precisa se preocupar em criar objetos manualmente nem em gerenciar a ordem de criação quando uma classe depende de outra;
- Fica muito mais fácil trocar uma implementação por outra (útil, por exemplo, em testes, onde você troca a classe real por uma versão "falsa"/mock);
- É a base de praticamente tudo no Spring: os `Controller`, `Service` e `Repository` que vamos criar mais pra frente seguem exatamente essa mesma lógica.


## 5. Formas de injetar (bônus)

Usamos injeção por **atributo** (`@Autowired` direto no campo) por ser a mais simples de entender no começo, mas ela não é a mais recomendada. A forma preferida pela comunidade é a **injeção por construtor**:

```java
@SpringBootApplication
public class HelloWorldApplication implements CommandLineRunner {

    private final Saudacao saudacao;

    public HelloWorldApplication(Saudacao saudacao) {
        this.saudacao = saudacao;
    }

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(saudacao.cumprimentar("Mundo"));
    }

}
```

Aqui nem precisamos do `@Autowired` explicitamente (o Spring identifica sozinho quando há um único construtor). As vantagens são: o atributo pode ser `final` (mais seguro, não muda depois de criado) e fica mais fácil escrever testes, passando a dependência manualmente no construtor.


## Próximos passos sugeridos
- [ ] Entender a diferença entre `@Component`, `@Service`, `@Repository` e `@Controller` (todos são formas de `@Component`, mas com significados semânticos diferentes)
- [ ] Criar uma classe `Controller` que consome um `Service` (endpoint HTTP + Injeção de Dependência juntos)
- [ ] Entender o que é o "Application Context" com mais profundidade

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```