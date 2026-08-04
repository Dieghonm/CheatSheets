// exemplo no projeto https://github.com/Dieghonm/aprendendoJava, projeto climaAPI
<!-- https://github.com/Dieghonm/aprendendoJava/tree/main/src/main/java/com/diegho/aprendendoJava/projetos/climaAPI -->

# Java — Consumindo APIs com HttpClient

Desde o Java 11, existe um cliente HTTP nativo na linguagem (`java.net.http`), então não precisamos de bibliotecas externas (tipo RestTemplate do Spring ou Axios do JS) pra fazer uma requisição simples.


## 1. Imports necessários

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.IOException;
```


## 2. Anatomia de uma requisição GET

```java
public String obterDados(String endereco) {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(endereco))
            .build();
    HttpResponse<String> response = null;
    try {
        response = client
                .send(request, HttpResponse.BodyHandlers.ofString());
    } catch (IOException e) {
        throw new RuntimeException(e);
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }

    String json = response.body();
    return json;
}
```

*Explicando parte por parte*

**`HttpClient client = HttpClient.newHttpClient();`**
Cria o "cliente" que vai efetivamente disparar a requisição. Pensa nele como o equivalente ao `fetch` do JavaScript ou ao `requests` do Python — é a ferramenta que sabe conversar HTTP.

**`HttpRequest request = HttpRequest.newBuilder()...`**
Monta a requisição em si: qual URL, qual verbo HTTP, quais headers, etc. Usa o padrão *Builder* (por isso os `.metodo()` encadeados).
- `.uri(URI.create(endereco))` — define a URL de destino. `URI.create()` transforma a `String` recebida em um objeto `URI`, que é o tipo que o `HttpRequest` exige;
- `.build()` — finaliza a montagem e devolve o objeto `HttpRequest` pronto;
- **Obs:** quando nenhum verbo é especificado (como `.GET()` ou `.POST()`), o padrão é `GET`.

**`client.send(request, HttpResponse.BodyHandlers.ofString())`**
Efetivamente dispara a requisição e **espera a resposta** (é síncrono/bloqueante — o código só continua depois que a resposta chegar).
- Primeiro parâmetro: a requisição montada;
- Segundo parâmetro (`BodyHandlers.ofString()`): diz como processar o corpo da resposta — nesse caso, como `String`. Existem outros handlers, como `ofByteArray()`, `ofFile(path)`, `discarding()` (ignora o corpo).

**`response.body()`**
Depois que a resposta chega, `.body()` extrai o conteúdo — no nosso caso, o JSON como texto puro.

*Sobre o try/catch*
O método `send()` é declarado lançando duas exceptions verificadas (*checked exceptions*):
- `IOException` — problema de rede (sem internet, servidor fora do ar, etc);
- `InterruptedException` — a thread foi interrompida enquanto esperava a resposta.

Como são *checked exceptions*, o Java obriga a tratar (`try/catch`) ou declarar no método (`throws`). No código, elas são recapturadas como `RuntimeException` — uma forma comum de "converter" uma exception verificada em não verificada, pra não precisar propagar `throws` por toda a cadeia de chamadas.


## 3. Testando

```java
public class Main {
    public static void main(String[] args) {
        ConsumidorApi api = new ConsumidorApi();
        String resultado = api.obterDados("https://viacep.com.br/ws/01001000/json/");
        System.out.println(resultado);
    }
}
```

Saída esperada (exemplo usando a API pública ViaCEP):
```json
{"cep":"01001-000","logradouro":"Praça da Sé","bairro":"Sé","localidade":"São Paulo","uf":"SP", ...}
```


## 4. Adicionando Query Params

Query params (`?chave=valor`) simplesmente entram direto na URL, já que ela é montada como `String`:

```java
public String buscarPorNome(String nome) {
    String endereco = "https://api.exemplo.com/usuarios?nome=" + nome;
    return obterDados(endereco);
}
```

Para múltiplos parâmetros:
```java
String endereco = "https://api.exemplo.com/usuarios?nome=" + nome + "&idade=" + idade;
```

**Atenção:** se o valor tiver espaços ou caracteres especiais, é preciso fazer o *encode* pra não quebrar a URL:
```java
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

String nomeCodificado = URLEncoder.encode(nome, StandardCharsets.UTF_8);
```


## 5. Adicionando Headers

Útil pra enviar autenticação (token, API key), tipo de conteúdo, etc:

```java
HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create(endereco))
        .header("Authorization", "Bearer " + token)
        .header("Accept", "application/json")
        .build();
```


## 6. Fazendo um POST (enviando dados)

```java
public String cadastrar(String endereco, String corpoJson) {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(endereco))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(corpoJson))
            .build();

    HttpResponse<String> response;
    try {
        response = client.send(request, HttpResponse.BodyHandlers.ofString());
    } catch (IOException | InterruptedException e) {
        throw new RuntimeException(e);
    }

    return response.body();
}
```

*O que mudou em relação ao GET*
- `.header("Content-Type", "application/json")` — avisa o servidor que estamos enviando JSON;
- `.POST(HttpRequest.BodyPublishers.ofString(corpoJson))` — define o verbo como `POST` e o corpo da requisição (o `BodyPublishers.ofString()` é o "irmão" do `BodyHandlers.ofString()` que vimos antes, só que pra enviar em vez de receber);
- Repare que dá pra juntar os dois `catch` em um só, usando `|` (multi-catch), já que o tratamento é igual nos dois casos.

*Uso:*
```java
String corpo = "{\"nome\":\"Diegho\",\"idade\":36}";
String resultado = cadastrar("https://api.exemplo.com/usuarios", corpo);
```


## 7. Verificando o status da resposta

É importante conferir se a requisição realmente deu certo antes de usar o corpo:

```java
if (response.statusCode() == 200) {
    System.out.println("Sucesso: " + response.body());
} else {
    System.out.println("Erro " + response.statusCode() + ": " + response.body());
}
```

*Códigos HTTP comuns*
- `200` — OK (sucesso);
- `201` — Created (criado com sucesso, comum em POST);
- `400` — Bad Request (requisição mal formada);
- `401` — Unauthorized (falta autenticação);
- `404` — Not Found;
- `500` — Internal Server Error (erro no servidor).


## 8. Convertendo o JSON em objeto Java (bônus)

O `HttpClient` só devolve o JSON como `String` "crua" — pra transformar isso em um objeto Java de verdade, usamos uma biblioteca de parsing, como o **Jackson** (o mesmo que o Spring Boot já usa por baixo dos panos).

*Adicionar no pom.xml*
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.0</version>
</dependency>
```

*Criar uma classe representando o JSON*
```java
public class Endereco {
    private String cep;
    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;

    // getters e setters
}
```

*Convertendo*
```java
import com.fasterxml.jackson.databind.ObjectMapper;

ObjectMapper mapper = new ObjectMapper();
Endereco endereco = mapper.readValue(json, Endereco.class);

System.out.println(endereco.getLogradouro());
```


## Checklist rápido
- [ ] `HttpClient` é nativo do Java (11+), não precisa de dependência externa pra requisições simples
- [ ] `HttpRequest` monta a requisição (URL, verbo, headers, corpo)
- [ ] `client.send()` é bloqueante e pode lançar `IOException`/`InterruptedException`
- [ ] `BodyHandlers` define como ler a resposta / `BodyPublishers` define como enviar o corpo
- [ ] Sempre checar `response.statusCode()` antes de confiar no `body()`
- [ ] Para transformar o JSON em objeto Java, usar uma lib de parsing (Jackson, Gson, etc)

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```