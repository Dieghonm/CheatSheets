// exemplo no projeto https://github.com/Dieghonm/aprendendoJava, projeto climaAPI
<!-- https://github.com/Dieghonm/aprendendoJava/tree/main/src/main/java/com/diegho/aprendendoJava/projetos/climaAPI -->

# Java — Record

## 1. O que é um `record`?

`record` é um tipo especial de classe, introduzido oficialmente no **Java 16**, criado para representar dados **imutáveis** de forma simples. É muito útil no armazenamento de dados vindos de um JSON (retorno de uma API, por exemplo).


## 2. Usando um record

```java
public record DadosApi(
        String nome,
        double nota,
        int idade
) {}
```

Dessa forma podemos armazenar cada dado vindo de uma API. Porém, por padrão, o nome de cada campo do `record` precisa ser igual ao nome do campo no JSON — caso contrário, o Jackson não consegue associar os valores, e o campo fica `null` (ou dá erro, dependendo da configuração).


OBS - se todos os dados nao estiverem no recor, dara um erro, para ignorar os dados desnecessarios acrescente
@JsonIgnoreProperties(ignoreUnknown = true) no inicio do record

```java
@JsonIgnoreProperties(ignoreUnknown = true)
public record DadosApi(
        String nome,
        double nota,
        int idade
) {}
```

## 3. Usando `@JsonAlias` para apelidar campos

Quando o nome do campo no JSON é diferente do nome que você quer usar no Java, usamos `@JsonAlias` pra dizer ao Jackson "esse campo também pode vir com esse outro nome":

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Score") double nota,
        @JsonAlias("Age") int idade
) {}
```

Repare que cada campo recebe o **alias correspondente a ele** — `nome` recebe o alias do campo de nome no JSON, `nota` recebe o alias do campo de nota, e assim por diante. Não faz sentido repetir o mesmo alias em campos diferentes.

*Aceitando mais de um nome possível para o mesmo campo*

`@JsonAlias` aceita uma lista de valores — útil quando a mesma API (ou versões diferentes dela) pode mandar o campo com nomes distintos:

```java
public record DadosApi(
        @JsonAlias({"Name", "Nombre", "name"}) String nome,
        @JsonAlias({"Score", "Nota"}) double nota,
        @JsonAlias({"Age", "Idade"}) int idade
) {}
```

**Atenção:** `@JsonAlias` só funciona na **deserialização** (JSON → Java). Ao serializar (Java → JSON), o campo sempre sai com o nome do atributo Java (`nome`, `nota`, `idade`). Se quiser controlar o nome também na saída, use `@JsonProperty` no lugar.


## 4. Desaninhando dados

Quando o JSON tem objetos aninhados dentro dele, criamos um `record` aninhado para representar essa estrutura:

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

Isso corresponde a um JSON no formato:
```json
{
  "Name": "Diegho",
  "Notas": [
    { "Materia": "Matemática", "Valor": 8.5 },
    { "Materia": "Português", "Valor": 9.0 }
  ],
  "Age": 36
}
```

*Explicando a estrutura*
- `Nota` é declarado **dentro** de `DadosApi` — isso é permitido em `record` (assim como em classes), e ajuda a manter os dois tipos relacionados visualmente sem precisar criar um arquivo separado;
- `List<Nota> notas` — como o JSON tem uma **lista** de objetos (cada um com matéria e valor), o campo correspondente no Java também precisa ser uma lista do record aninhado, não um record único;
- Fora da classe, você referencia o record aninhado como `DadosApi.Nota`, se precisar usá-lo isoladamente em outro lugar.

## 5. Imutabilidade

Um `record` é **imutável por padrão** — depois de criado, seus valores não podem mudar. Não existem setters, e os atributos são implicitamente `final`.

```java
DadosApi dados = new DadosApi(
        "Diegho",
        List.of(new DadosApi.Nota("Matemática", 8.5), new DadosApi.Nota("Português", 9.0)),
        40
);

// dados.nome = "Outro"; // ERRO: não compila, não existe esse acesso
```

Se precisar de uma versão "alterada", você cria um novo objeto:
```java
DadosApi dadosComNovaIdade = new DadosApi(dados.nome(), dados.notas(), 41);
```


## 6. Construtor compacto (validações)

Às vezes você quer validar ou tratar os dados antes de aceitá-los no construtor, sem precisar reescrever a lista de parâmetros. Para isso existe o **construtor compacto**:

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    public DadosApi {
        if (idade < 0) {
            throw new IllegalArgumentException("Idade não pode ser negativa");
        }
        nome = nome.trim(); // pode inclusive normalizar o valor recebido
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

Repare que não há parênteses `()` nem `this.nome = nome` — isso é feito automaticamente depois que o bloco compacto termina de executar. É só o lugar certo pra colocar validações/ajustes.

Com o JSON de exemplo, a validação passaria normal (idade 40, maior que 0). Se viesse `"Age": -5`, o construtor lançaria `IllegalArgumentException` antes mesmo do objeto existir.


## 7. Adicionando métodos próprios

Um `record` pode ter métodos normais, iguais a uma classe comum. Vamos aproveitar as notas pra calcular uma média:

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    public boolean isMaiorDeIdade() {
        return idade >= 18;
    }

    public double mediaGeral() {
        return notas.stream()
                .mapToDouble(Nota::valor)
                .average()
                .orElse(0.0);
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

```java
System.out.println(dados.isMaiorDeIdade()); // true
System.out.println(dados.mediaGeral());     // 8.75  → média entre 8.5 e 9.0
```


## 8. Atributos e métodos estáticos

Assim como uma classe comum, `record` pode ter membros `static`:

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    public static final int IDADE_MINIMA = 0;

    public static DadosApi criarVazio() {
        return new DadosApi("Anônimo", List.of(), IDADE_MINIMA);
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

```java
DadosApi vazio = DadosApi.criarVazio(); // sem precisar vir de um JSON
```


## 9. Sobrescrevendo métodos gerados

É possível sobrescrever qualquer um dos métodos que o Java geraria automaticamente (getter, `toString()`, `equals()`, `hashCode()`):

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    @Override
    public String toString() {
        return nome + " (" + idade + " anos) - média: " + mediaGeral();
    }

    public double mediaGeral() {
        return notas.stream().mapToDouble(Nota::valor).average().orElse(0.0);
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

```java
System.out.println(dados);
// Diegho (40 anos) - média: 8.75
```


## 10. Construtor alternativo (sobrecarga)

Você pode adicionar outros construtores além do padrão, desde que, no final, chamem o construtor "canônico" (o que tem todos os atributos):

```java
public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) {

    public DadosApi(String nome) {
        this(nome, List.of(), 0); // chama o construtor canônico
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

```java
DadosApi semNotas = new DadosApi("Diegho"); // notas vazia, idade 0
```

**Atenção:** esse construtor extra é útil pra criar instâncias na mão dentro do código Java, mas não interfere na deserialização do JSON — o Jackson sempre usa o construtor canônico (o com todos os campos) quando está montando o objeto a partir do JSON.


## 11. Record implementando interface

`record` pode implementar interfaces normalmente (mas **não pode estender outra classe**, já que, por baixo dos panos, todo `record` já estende `java.lang.Record`):

```java
public interface Identificavel {
    String identificador();
}

public record DadosApi(
        @JsonAlias("Name") String nome,
        @JsonAlias("Notas") List<Nota> notas,
        @JsonAlias("Age") int idade
) implements Identificavel {

    @Override
    public String identificador() {
        return nome.toLowerCase().replace(" ", "-");
    }

    public record Nota(
            @JsonAlias("Materia") String materia,
            @JsonAlias("Valor") double valor
    ) {}

}
```

```java
System.out.println(dados.identificador()); // diegho
```


## 12. Record com Generics

Útil pra padronizar o formato de resposta de várias APIs diferentes, reaproveitando a mesma estrutura:

```java
public record Resposta<T>(boolean sucesso, T dados, String mensagem) {}
```

```java
ObjectMapper mapper = new ObjectMapper();
DadosApi dados = mapper.readValue(json, DadosApi.class);

Resposta<DadosApi> resposta = new Resposta<>(true, dados, "OK");
```


## 13. Onde usar na prática

O `record` é ideal para:
- **DTOs** (Data Transfer Objects) — representar o corpo de uma requisição/resposta de API;
- **Retorno de métodos que agrupam múltiplos valores** (evita criar uma classe só pra isso);
- **Chaves compostas** em `Map` (já que `equals`/`hashCode` já vêm prontos);
- **Value Objects** em geral, onde imutabilidade é desejada.

*Exemplo prático — usando o record com o JSON completo (conectando com o tutorial de `HttpClient`)*

```java
String json = obterDados("https://api.exemplo.com/dados");
// {"Name":"Diegho","Notas":[{"Materia":"Matemática","Valor":8.5},{"Materia":"Português","Valor":9.0}],"Age":40}

ObjectMapper mapper = new ObjectMapper();
DadosApi dados = mapper.readValue(json, DadosApi.class);

System.out.println(dados.nome());       // Diegho
System.out.println(dados.mediaGeral()); // 8.75
```

O Jackson entende o `record` nativamente (inclusive com `@JsonAlias` e o record `Nota` aninhado dentro da lista), associando os campos do JSON aos *components* automaticamente.

*No contexto Spring Boot (retorno de um Controller)*

```java
@RestController
public class DadosApiController {

    @GetMapping("/dados/{nome}")
    public DadosApi buscar(@PathVariable String nome) {
        List<DadosApi.Nota> notas = List.of(
                new DadosApi.Nota("Matemática", 8.5),
                new DadosApi.Nota("Português", 9.0)
        );
        return new DadosApi(nome, notas, 40);
    }

}
```

O Spring converte o `record` (com sua lista de records aninhados) em JSON automaticamente, do mesmo jeito que faria com uma classe comum.


## 14. Record x Classe tradicional x Lombok

| | Record | Classe + Lombok (`@Data`) | Classe tradicional |
|---|---|---|---|
| Boilerplate | Nenhum | Nenhum (via anotação) | Todo escrito na mão |
| Imutável | Sim, por padrão | Não, por padrão | Depende de como você escreve |
| Precisa de dependência externa | Não (nativo) | Sim (Lombok) | Não |
| Pode ter setters | Não | Sim | Sim |
| Pode estender outra classe | Não | Sim | Sim |

Regra prática: use `record` quando o objetivo é só **carregar dados de forma imutável** (DTOs, respostas de API, como o nosso `DadosApi`). Para entidades com comportamento mais complexo, estado mutável, ou que precisam herdar de outra classe, uma classe tradicional (ou com Lombok) ainda é o caminho.


## Checklist rápido
- [ ] `record NomeDoRecord(Tipo campo1, Tipo campo2) {}` já gera construtor, getters, `equals`, `hashCode` e `toString`
- [ ] Getters não têm prefixo `get` — é só `objeto.campo()`
- [ ] `@JsonAlias` mapeia nomes diferentes do JSON pro mesmo campo (só na deserialização)
- [ ] Records aninhados representam objetos/listas dentro do JSON (ex: `Nota` dentro de `DadosApi`)
- [ ] É imutável por padrão, sem setters
- [ ] Construtor compacto (`public NomeDoRecord { ... }`) serve pra validar/normalizar dados
- [ ] Pode ter métodos próprios, membros `static` e implementar interfaces
- [ ] Não pode estender outra classe
- [ ] Ideal para DTOs e retornos de API

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```