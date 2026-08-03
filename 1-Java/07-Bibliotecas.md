# Java — Implementando Bibliotecas
*(exemplo prático: Jackson)*

Sempre que uma funcionalidade que você precisa não faz parte do Java puro, ela costuma vir de uma **biblioteca** (também chamada de *dependência*). Esse tutorial mostra o passo a passo genérico de como encontrar, adicionar e instalar qualquer biblioteca em um projeto Maven — usando o Jackson como exemplo.

## 1. O que é o Jackson?

Jackson é uma biblioteca para converter objetos Java em JSON (**serialização**) e JSON em objetos Java (**deserialização**). É o motor padrão de JSON usado pelo Spring Boot.


## 2. Encontrando a biblioteca

Acesse o site `https://mvnrepository.com/` e pesquise pela biblioteca desejada (nesse caso, "jackson databind").

Nos resultados, clique no pacote desejado — no nosso exemplo, **com.fasterxml.jackson.core » jackson-databind**.

Dentro da página do pacote, escolha a **versão** desejada (geralmente a mais recente estável, sem sufixos como `-rc` ou `-beta`).


## 3. Copiando a dependência

Ao clicar na versão escolhida, a própria página já mostra o trecho de código pronto pra cada gerenciador de dependências (Maven, Gradle, etc). Como estamos usando **Maven**, é só copiar o bloco `<dependency>...</dependency>`.


## 4. Adicionando ao projeto

No projeto, abra o arquivo `pom.xml` e cole o trecho copiado dentro da tag `<dependencies>`, junto das outras dependências já existentes:

```xml
<dependencies>

    <!-- outras dependências do projeto -->

    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.22.1</version>
        <scope>compile</scope>
    </dependency>

</dependencies>
```

*(confira sempre a versão mais recente em `https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind`)*

**Sobre a tag `<scope>`:** define em quais fases do projeto a dependência estará disponível. `compile` é o padrão (usada em desenvolvimento, testes e no artefato final) — na dúvida, pode deixar sem essa tag, que o Maven assume `compile` automaticamente.


## 5. Instalando a dependência

Depois de colar e salvar o `pom.xml`, o IntelliJ detecta a mudança e mostra um ícone de atualização (⟳) no canto da tela (ou no painel do Maven, à direita). Clique nele para o Maven baixar e instalar a biblioteca.

Você também pode forçar isso pelo terminal, na raiz do projeto:
> mvn install


## 6. Confirmando a instalação

- No painel **Maven** (lateral direita do IntelliJ), expanda `Dependencies` e confira se a biblioteca aparece na lista;
- Ou tente importar uma classe da biblioteca em qualquer arquivo do projeto (ex: `import com.fasterxml.jackson.databind.ObjectMapper;`) — se o autocomplete reconhecer, deu certo.

Uma vez instalada, a biblioteca já pode ser consumida por toda a aplicação, em qualquer classe que precisar dela.


## Checklist rápido
- [ ] Buscar a biblioteca em `mvnrepository.com`
- [ ] Escolher a versão estável mais recente
- [ ] Copiar o bloco `<dependency>`
- [ ] Colar dentro de `<dependencies>` no `pom.xml`
- [ ] Atualizar o Maven (ícone ⟳ ou `mvn install`)
- [ ] Confirmar que a biblioteca aparece no painel Maven / autocomplete reconhece as classes

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```