

uma vez instalado o jackson como no item 07, vamos continuar o exemplo...

## 3. A peça central: `ObjectMapper`

Toda operação do Jackson passa por uma instância de `ObjectMapper`. Boa prática: criar **uma única instância** e reutilizá-la (é thread-safe depois de configurado).

```java
import com.fasterxml.jackson.databind.ObjectMapper;

ObjectMapper mapper = new ObjectMapper();
```


## 4. Serialização — Objeto Java → JSON

```java
public record Pessoa(String nome, int idade) {}
```

```java
ObjectMapper mapper = new ObjectMapper();
Pessoa pessoa = new Pessoa("Diegho", 36);

String json = mapper.writeValueAsString(pessoa);
System.out.println(json);
// {"nome":"Diegho","idade":36}
```

*Formatando com indentação (útil pra debug/log)*
```java
ObjectMapper mapper = new ObjectMapper();
mapper.enable(SerializationFeature.INDENT_OUTPUT);

String json = mapper.writeValueAsString(pessoa);
// {
//   "nome" : "Diegho",
//   "idade" : 36
// }
```

*Serializando listas*
```java
List<Pessoa> pessoas = List.of(new Pessoa("Diegho", 36), new Pessoa("Paula", 30));
String json = mapper.writeValueAsString(pessoas);
// [{"nome":"Diegho","idade":36},{"nome":"Paula","idade":30}]
```

*Salvando direto em arquivo*
```java
mapper.writeValue(new File("pessoa.json"), pessoa);
```


## 5. Deserialização — JSON → Objeto Java

```java
String json = "{\"nome\":\"Diegho\",\"idade\":36}";

Pessoa pessoa = mapper.readValue(json, Pessoa.class);
System.out.println(pessoa.nome()); // Diegho
```

*Deserializando listas*
Aqui é preciso um pouco mais de cuidado, porque o Java "apaga" o tipo genérico em tempo de execução (*type erasure*). Usamos `TypeReference` para contornar isso:

```java
import com.fasterxml.jackson.core.type.TypeReference;

String json = "[{\"nome\":\"Diegho\",\"idade\":36},{\"nome\":\"Paula\",\"idade\":30}]";

List<Pessoa> pessoas = mapper.readValue(json, new TypeReference<List<Pessoa>>() {});
```

*Lendo direto de um arquivo ou InputStream*
```java
Pessoa pessoa = mapper.readValue(new File("pessoa.json"), Pessoa.class);
```

*Conectando com o tutorial do HttpClient*
```java
String jsonRecebido = obterDados("https://viacep.com.br/ws/01001000/json/");
Endereco endereco = mapper.readValue(jsonRecebido, Endereco.class);
```


## 6. Anotações mais usadas

### `@JsonProperty` — renomear campo
Quando o nome do campo no JSON é diferente do atributo Java:

```java
public class Pessoa {

    @JsonProperty("full_name")
    private String nome;

    private int idade;

    // getters/setters
}
```
```json
{"full_name": "Diegho", "idade": 36}
```

### `@JsonIgnore` — ignorar um campo
Não serializa nem deserializa esse campo:

```java
public class Usuario {
    private String nome;

    @JsonIgnore
    private String senha; // nunca aparece no JSON
}
```

### `@JsonIgnoreProperties` — ignorar campos desconhecidos
Por padrão, se o JSON tiver um campo que não existe na classe Java, o Jackson lança erro. Essa anotação evita isso:

```java
@JsonIgnoreProperties(ignoreUnknown = true)
public class Pessoa {
    private String nome;
    private int idade;
    // qualquer outro campo no JSON que não exista aqui é ignorado
}
```

### `@JsonInclude` — omitir valores nulos/vazios
```java
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Pessoa {
    private String nome;
    private String sobrenome; // se for null, não aparece no JSON gerado
}
```

### `@JsonFormat` — formatar datas
```java
public class Evento {

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data;

}
```

### `@JsonCreator` e `@JsonProperty` no construtor
Útil quando a classe não tem construtor vazio (comum em `record` ou classes imutáveis com atributos `final`):

```java
public class Pessoa {
    private final String nome;
    private final int idade;

    @JsonCreator
    public Pessoa(
            @JsonProperty("nome") String nome,
            @JsonProperty("idade") int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

**Obs:** com `record`, isso normalmente não é necessário — o Jackson já reconhece os *components* automaticamente pelo nome, desde que a versão seja recente o suficiente.


## 7. Trabalhando com datas (`LocalDate`, `LocalDateTime`)

Por padrão, o Jackson **não** entende os tipos de data modernos do Java (`java.time.*`) sem um módulo extra:

*Adicionar dependência*
```xml
<dependency>
    <groupId>com.fasterxml.jackson.datatype</groupId>
    <artifactId>jackson-datatype-jsr310</artifactId>
    <version>2.22.1</version>
</dependency>
```
*(no Spring Boot, esse módulo já vem incluso automaticamente junto com o Spring Web)*

*Registrar o módulo*
```java
ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new JavaTimeModule());
mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS); // evita virar timestamp numérico
```

Depois disso, `LocalDate`, `LocalDateTime`, etc, funcionam normalmente.


## 8. Tratando erros comuns

*Campo desconhecido no JSON*
InvalidDefinitionException: Java 8 date/time type java.time.LocalDate not supported by default

Solução: registrar o `JavaTimeModule` (seção 7).


## 9. Usando Jackson dentro do Spring Boot

A boa notícia: dentro do Spring Boot, você **não precisa chamar `ObjectMapper` manualmente** na maioria dos casos — a conversão acontece automaticamente nos `@RestController`.

```java
public record PessoaRequest(String nome, int idade) {}
public record PessoaResponse(Long id, String nome, int idade) {}
```

```java
@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @PostMapping
    public PessoaResponse criar(@RequestBody PessoaRequest request) {
        // o Spring já deserializou o JSON recebido em PessoaRequest automaticamente
        Long id = 1L;
        return new PessoaResponse(id, request.nome(), request.idade());
        // o Spring vai serializar esse retorno em JSON automaticamente
    }

}
```

- `@RequestBody` — avisa o Spring pra pegar o corpo da requisição (JSON) e converter pro tipo do parâmetro, usando Jackson por trás;
- O valor de retorno do método também é convertido automaticamente pra JSON na resposta.

*Customizando o `ObjectMapper` global do Spring (opcional)*

Se precisar mudar um comportamento padrão (ex: ignorar campos desconhecidos em toda a aplicação), cria-se um `@Bean`:

```java
@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.registerModule(new JavaTimeModule());
        return mapper;
    }

}
```

O Spring detecta esse `@Bean` e passa a usá-lo em todos os `Controller`s da aplicação.


## Checklist rápido
- [ ] `ObjectMapper` é a classe central — crie uma instância e reutilize
- [ ] `writeValueAsString()` serializa (Java → JSON) / `readValue()` deserializa (JSON → Java)
- [ ] Para listas, use `TypeReference<List<T>>` na deserialização
- [ ] `@JsonProperty`, `@JsonIgnore`, `@JsonInclude`, `@JsonIgnoreProperties` são as anotações mais comuns
- [ ] Datas modernas (`java.time.*`) exigem o módulo `JavaTimeModule`
- [ ] No Spring Boot, `@RequestBody`/retorno do Controller já fazem a conversão automaticamente
- [ ] `record` funciona nativamente com Jackson, sem precisar de `@JsonCreator`

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```