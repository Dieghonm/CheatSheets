// exemplo no projeto https://github.com/Dieghonm/aprendendoJava, projeto climaAPI
<!-- https://github.com/Dieghonm/aprendendoJava/tree/main/src/main/java/com/diegho/aprendendoJava/projetos/climaAPI -->

# Java — Interfaces

## 1. O que é uma interface?

Uma interface define um **contrato**: uma lista de métodos que uma classe se compromete a implementar, sem dizer *como* esses métodos funcionam. Quem implementa a interface fica obrigado a fornecer o comportamento (o "como").

```java
public interface Pagavel {
    double calcularPagamento();
}
```

Isso significa: "toda classe que implementar `Pagavel` precisa saber calcular um pagamento". Como cada classe faz esse cálculo é problema dela.


## 2. Implementando uma interface

```java
public class Funcionario implements Pagavel {

    private double salarioBase;

    public Funcionario(double salarioBase) {
        this.salarioBase = salarioBase;
    }

    @Override
    public double calcularPagamento() {
        return salarioBase;
    }

}
```

```java
public class Freelancer implements Pagavel {

    private double valorHora;
    private int horasTrabalhadas;

    public Freelancer(double valorHora, int horasTrabalhadas) {
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    @Override
    public double calcularPagamento() {
        return valorHora * horasTrabalhadas;
    }

}
```

Repare: as duas classes calculam o pagamento de formas completamente diferentes, mas ambas "prometem" ter o método `calcularPagamento()`, porque implementam `Pagavel`.


## 3. Por que isso é útil? (Polimorfismo)

A grande vantagem é poder tratar objetos diferentes de forma **uniforme**, através do tipo da interface:

```java
List<Pagavel> pessoas = List.of(
        new Funcionario(3000),
        new Freelancer(50, 160)
);

double totalFolha = 0;
for (Pagavel pessoa : pessoas) {
    totalFolha += pessoa.calcularPagamento(); // não importa se é Funcionario ou Freelancer
}

System.out.println(totalFolha); // 11000.0
```

O código que percorre a lista **não precisa saber** se está lidando com um `Funcionario` ou um `Freelancer` — só precisa saber que é um `Pagavel`, e que, portanto, tem `calcularPagamento()`. Isso é **polimorfismo**: tratar objetos de tipos diferentes de forma uniforme, através de um tipo comum.


## 4. Uma classe pode implementar várias interfaces

Diferente de herança de classe (onde só se pode `extends` uma única classe), uma classe **pode implementar quantas interfaces quiser**:

```java
public interface Pagavel {
    double calcularPagamento();
}

public interface Identificavel {
    String identificador();
}

public class Funcionario implements Pagavel, Identificavel {

    private String nome;
    private double salarioBase;

    public Funcionario(String nome, double salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    @Override
    public double calcularPagamento() {
        return salarioBase;
    }

    @Override
    public String identificador() {
        return nome.toLowerCase().replace(" ", "-");
    }

}
```

É assim que classes conseguem "acumular comportamentos" de fontes diferentes, mesmo o Java não permitindo herança múltipla de classes.


## 5. Métodos `default`

Desde o Java 8, uma interface pode ter métodos com **implementação já pronta**, usando a palavra-chave `default`. Quem implementa a interface **não é obrigado** a sobrescrever esse método (mas pode, se quiser).

```java
public interface Pagavel {

    double calcularPagamento();

    default double calcularPagamentoComBonus(double bonus) {
        return calcularPagamento() + bonus;
    }

}
```

```java
Funcionario funcionario = new Funcionario("Diegho", 3000);
System.out.println(funcionario.calcularPagamentoComBonus(500)); // 3500.0
```

*Por que isso existe:* permite **adicionar novos métodos numa interface já existente**, sem quebrar todas as classes que já a implementavam. Antes do Java 8, adicionar um método novo numa interface obrigava a alterar toda classe que a implementasse.


## 6. Métodos `static`

Interfaces também podem ter métodos `static` — pertencem à interface em si, não a uma instância, e não podem ser sobrescritos:

```java
public interface Pagavel {

    double calcularPagamento();

    static Pagavel salarioMinimo() {
        return new Funcionario("Sem nome", 1518.00);
    }

}
```

```java
Pagavel pessoa = Pagavel.salarioMinimo(); // chamado direto na interface, sem instanciar nada antes
```

Muito comum pra criar métodos utilitários ligados ao conceito da interface (fábricas, validações genéricas, etc).


## 7. Métodos `private` (Java 9+)

Desde o Java 9, interfaces podem ter métodos `private` — servem só pra organizar/reaproveitar código **entre os próprios métodos `default`/`static` da interface**, não podem ser chamados de fora:

```java
public interface Pagavel {

    double calcularPagamento();

    default double calcularPagamentoComBonus(double bonus) {
        return aplicarArredondamento(calcularPagamento() + bonus);
    }

    default double calcularPagamentoComDesconto(double desconto) {
        return aplicarArredondamento(calcularPagamento() - desconto);
    }

    private double aplicarArredondamento(double valor) {
        return Math.round(valor * 100.0) / 100.0;
    }

}
```


## 8. Constantes em interface

Todo campo declarado em uma interface é implicitamente `public static final` (mesmo sem escrever isso):

```java
public interface Pagavel {

    double SALARIO_MINIMO = 1518.00; // já é public static final

    double calcularPagamento();

}
```

```java
System.out.println(Pagavel.SALARIO_MINIMO); // 1518.0
```

**Atenção:** como toda interface só permite constantes (não é possível ter atributos "normais", mutáveis), isso não é uma forma de guardar estado — só de compartilhar valores fixos.


## 9. Interface x Classe abstrata

É comum confundir os dois. Principais diferenças:

| | Interface | Classe abstrata |
|---|---|---|
| Herança múltipla | Sim, `implements` várias | Não, `extends` só uma |
| Atributos com estado | Não (só constantes) | Sim |
| Construtor | Não tem | Pode ter |
| Métodos sem corpo | Sim (o padrão) | Sim (`abstract`) |
| Métodos com corpo | Sim (`default`/`static`) | Sim (normal) |

*Regra prática:*
- Use **interface** quando quer definir um **contrato de comportamento** que classes completamente diferentes entre si podem cumprir (ex: `Pagavel`, `Comparable`, `Identificavel`);
- Use **classe abstrata** quando as classes envolvidas já têm uma relação de "é um tipo de" mais forte, e você quer compartilhar **estado** (atributos) e código entre elas, além de comportamento.


## 10. Interface funcional (base das lambdas)

Uma **interface funcional** é uma interface com **exatamente um método abstrato** (métodos `default`/`static` não contam). Isso permite implementá-la de forma resumida, usando *lambda expressions*:

```java
@FunctionalInterface
public interface Validador {
    boolean validar(String valor);
}
```

*Forma tradicional (classe anônima)*
```java
Validador naoVazio = new Validador() {
    @Override
    public boolean validar(String valor) {
        return valor != null && !valor.isEmpty();
    }
};
```

*Forma resumida (lambda)*
```java
Validador naoVazio = valor -> valor != null && !valor.isEmpty();

System.out.println(naoVazio.validar(""));       // false
System.out.println(naoVazio.validar("Diegho")); // true
```

A anotação `@FunctionalInterface` é opcional, mas recomendada — o compilador avisa se, por engano, você adicionar um segundo método abstrato, o que quebraria a possibilidade de usar lambda.

*Interfaces funcionais já prontas no Java*
O Java já vem com várias interfaces funcionais genéricas, no pacote `java.util.function`, evitando ter que criar a sua toda vez:

```java
import java.util.function.Predicate;
import java.util.function.Function;
import java.util.function.Consumer;
import java.util.function.Supplier;

Predicate<String> naoVazio = valor -> !valor.isEmpty();       // recebe algo, retorna boolean
Function<String, Integer> tamanho = valor -> valor.length();  // recebe algo, retorna outra coisa
Consumer<String> imprimir = valor -> System.out.println(valor); // recebe algo, não retorna nada
Supplier<String> saudacao = () -> "Olá!";                      // não recebe nada, retorna algo
```


## 11. Interface conectando com o que já vimos (record + Jackson)

Retomando o exemplo do `DadosApi` dos tutoriais anteriores:

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

Aqui, `record` também pode implementar interfaces normalmente — a única regra que muda é que `record` não pode `extends` outra classe (já vimos isso no tutorial de record).


## 12. No contexto Spring Boot

Interfaces são usadas o tempo todo no Spring, principalmente em:
- **`Repository`** — você declara a interface, o Spring Data gera a implementação sozinho em tempo de execução;
- **Contratos entre camadas** — ex: `Service` sendo uma interface, com uma implementação concreta (`ServiceImpl`), facilitando trocar a implementação (útil em testes, usando mocks).

```java
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // você nem precisa implementar nada — o Spring Data cria a implementação automaticamente
    Optional<Usuario> findByEmail(String email);
}
```

Vamos ver esse exemplo específico (Spring Data JPA) com mais profundidade quando chegarmos no tutorial de banco de dados.


## Checklist rápido
- [ ] Interface define um contrato (métodos sem implementação, por padrão)
- [ ] `implements` pode ser usado várias vezes na mesma classe (herança múltipla de comportamento)
- [ ] `default` — método com implementação, opcional de sobrescrever
- [ ] `static` — método da interface em si, chamado sem instância
- [ ] `private` (Java 9+) — reaproveita código entre `default`/`static` da própria interface
- [ ] Campos em interface são sempre `public static final` (constantes)
- [ ] Interface funcional = 1 método abstrato → permite usar lambda
- [ ] `record` pode implementar interfaces, mas não pode `extends` classes

*modelo*
**modelo**
- [ ] modelo
- [ ] `modelo`

```java

```