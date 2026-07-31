# Spring Boot — Primeira Aplicação (Hello World com CommandLineRunner)

## 1. Gerar o projeto no Spring Initializr

Acesse `https://start.spring.io/` e configure:

- **Project:** Maven
- **Language:** Java
- **Spring Boot:** a versão estável mais recente (evite as marcadas como SNAPSHOT ou M1/RC)
- **Group:** com.seunome (ex: com.diegho)
- **Artifact:** hello-world
- **Packaging:** Jar
- **Java:** a versão que você tem instalada no IntelliJ (ex: 17 ou 21)

*Dependências*
Para esse exemplo não precisamos do Spring Web, já que não vamos criar endpoint HTTP, só rodar código na inicialização.
- [ ] Nenhuma dependência extra é obrigatória (pode deixar em branco)

**CUIDADO:** a versão do Java escolhida aqui precisa ser a mesma associada ao projeto no IntelliJ. Se não for, dá erro de compilação (`Cannot compile module... does not support the required jvm target`). Caso aconteça, veja a seção **6. Ajustando a versão do Java** lá embaixo.

Clique em **Generate**. Um arquivo `.zip` vai ser baixado.


## 2. Extrair e abrir o projeto no IntelliJ

*Extrair o .zip*
Mova o arquivo pra pasta onde você organiza seus projetos e extraia:
> unzip ~/Downloads/hello-world.zip -d ~/Projetos/

*Abrir no IntelliJ*
- `File > Open`;
- Selecione a pasta `hello-world` que você extraiu;
- Se aparecer o aviso "Trust Project", clique em **Trust Project**;
- Aguarde o IntelliJ baixar as dependências do Maven (barra de progresso embaixo).


## 3. Entendendo a estrutura gerada
hello-world/
├── pom.xml -> arquivo de configuração do Maven (dependências, versão do Java, etc)
└── src/main/java/com/seunome/helloworld/
└── HelloWorldApplication.java -> classe principal, ponto de entrada da aplicação
O arquivo principal fica em `src > main > java > (pacote do projeto)`. Ele já vem pronto assim:

```java
package com.seunome.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

}
```

A anotação `@SpringBootApplication` é quem liga toda a "mágica" do Spring: configuração automática, escaneamento de componentes, etc.


## 4. Entendendo o `CommandLineRunner`

`CommandLineRunner` é uma interface do Spring que tem um único método, `run()`. Quando a classe principal implementa essa interface, o Spring executa esse método **automaticamente, uma única vez**, logo depois que a aplicação termina de subir (todo o contexto do Spring já carregado). É uma forma simples de rodar algum código na inicialização — perfeito pra um "Hello World".


## 5. Editando a classe principal

Abra o arquivo `HelloWorldApplication.java` e deixe assim:

```java
package com.seunome.helloworld;

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
        System.out.println("Olá, Mundo!");
    }

}
```

*Explicando o que mudou*
- `implements CommandLineRunner` — diz que essa classe vai executar código assim que a aplicação subir;
- `@Override public void run(String... args)` — método obrigatório da interface, é aqui que colocamos o que queremos que rode. O `String... args` recebe os argumentos passados por linha de comando, caso precise deles.

*Rodar a aplicação*
Clique no ícone de "play" (▶️) ao lado da classe `HelloWorldApplication`, ou botão direito nela `> Run`.

No console, entre os logs do Spring subindo, deve aparecer:
Olá, Mundo!

🎉 Pronto, esse é o "Hello World" clássico com Spring Boot!


## 6. Ajustando a versão do Java (caso dê erro de compilação)

Se aparecer um erro do tipo `Cannot compile module... does not support the required jvm target`, é porque a versão do Java do projeto (`pom.xml`) e a versão associada no IntelliJ estão diferentes. Ajuste os dois lados pra ficarem iguais:

*No projeto (pom.xml)*
```xml
<properties>
    <java.version>17</java.version>
</properties>
```
Troque `17` pela versão que você quer usar. Depois de salvar, clique no ícone de refresh (⟳) do Maven pra recarregar.

*No IntelliJ*
- `File > Project Structure` (`Cmd + ;`);
- Aba **Project**, campo **SDK**: selecione a versão correspondente (se não estiver na lista, clique em **Add SDK > JDK...** e aponte pro caminho instalado, ex: `/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home`).


## Usando argumentos (opcional)

Se quiser deixar mais dinâmico, dá pra usar os `args` recebidos:

```java
@Override
public void run(String... args) throws Exception {
    if (args.length > 0) {
        System.out.println("Olá, " + args[0] + "!");
    } else {
        System.out.println("Olá, Mundo!");
    }
}
```

Para passar um argumento na execução pelo IntelliJ:
- `Run > Edit Configurations...`;
- Selecione a configuração da sua aplicação;
- No campo **Program arguments**, digite, por exemplo: `Diegho`;
- Rode novamente.


## Próximos passos sugeridos
- [ ] Entender o ciclo de vida do Spring Boot (`ApplicationRunner` é outra interface parecida, mas recebe argumentos já parseados)
- [ ] Comparar essa abordagem com `@RestController` (endpoints HTTP)
- [ ] Estudar Injeção de Dependência (`@Autowired`, `@Component`, `@Service`)

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```