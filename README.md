# Boas vindas ao repositório do projeto de Front-End Online Store MVP (Minimum Viable Product)!


https://user-images.githubusercontent.com/78225894/140182155-0b339673-b105-44b2-a66b-0ab8a15fffa7.mp4

# Equipe

<a href="https://www.linkedin.com/in/dayvid-ferreira-b8740620b/">Dayvid Ferreira</a>

<a href="https://www.linkedin.com/in/juliobnascimento/">Julio Barros</a>

<a href="https://www.linkedin.com/in/lucasquearis/">Lucas Almeida Santos</a>

<a href="https://www.linkedin.com/in/luisffg/">Luis Fernando F Gorgulho</a>

<a href="">Thales Daniel</a>

# Sumário

- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [O que foi desenvolvido no projeto](#o-que-foi-desenvolvido-no-projeto)
- [Instruções para rodar o projeto](#instruções-para-rodar-o-projeto)
  - [Documentação da API do Mercado Livre](#documentação-da-api-do-mercado-livre)
    - [Exemplo de requisição para listar categorias](exemplo-de-requisição-para-listar-categorias)
    - [Exemplo de requisição de busca](#exemplo-de-requisição-de-busca)
  - [Usando o Trello como ferramenta kanban](#usando-o-trello-como-ferramenta-kanban)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Grupos de prioridade](#grupos-de-prioridade)
  - [Lista de requisitos](#lista-de-requisitos)
    - [1. Implemente o módulo de acesso à api do Mercado Livre](#1-implemente-o-módulo-de-acesso-à-api-do-mercado-livre)
    - [2. Crie uma página de listagem de produtos vazia](#2-crie-uma-página-de-listagem-de-produtos-vazia)
    - [3. Crie a página do carrinho de compras](#3-crie-a-página-do-carrinho-de-compras)
    - [4. Liste as categorias de produtos disponíveis via API na página principal](#4-liste-as-categorias-de-produtos-disponíveis-via-api-na-página-principal)
    - [5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos](#5-liste-os-produtos-buscados-por-termos-com-os-dados-resumidos-associados-a-esses-termos)
    - [6. Selecione uma categoria e mostre somente os produtos daquela categoria](#6-selecione-uma-categoria-e-mostre-somente-os-produtos-daquela-categoria)
    - [7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto](#7-redirecione-para-uma-tela-com-a-exibição-detalhada-ao-clicar-na-exibição-resumida-de-um-produto)
    - [8. Adicione produtos a partir da tela de listagem de produtos](#8-adicione-produtos-a-partir-da-tela-de-listagem-de-produtos)
    - [9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada](#9-adicione-um-produto-ao-carrinho-a-partir-de-sua-tela-de-exibição-detalhada)
    - [10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade](#10-visualize-a-lista-de-produtos-adicionados-ao-carrinho-em-sua-página-e-permita-a-manipulação-da-sua-quantidade)
    - [11. Avalie e comente acerca de um produto em sua tela de exibição detalhada](#11-avalie-e-comente-acerca-de-um-produto-em-sua-tela-de-exibição-detalhada)
    - [12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento](#12-finalize-a-compra-vendo-um-resumo-dela-preenchendo-os-seus-dados-e-escolhendo-a-forma-de-pagamento)
    - [13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece](#13-mostre-junto-ao-ícone-do-carrinho-a-quantidade-de-produtos-dentro-dele-em-todas-as-telas-em-que-ele-aparece)
    - [14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque](#14-limite-a-quantidade-de-produtos-adicionados-ao-carrinho-pela-quantidade-disponível-em-estoque)
    - [15. Mostre quais produtos tem o frete grátis](#15-mostre-quais-produtos-tem-o-frete-grátis)
    - [16. Faça um layout para o site](#16-faça-um-layout-para-o-site)
    - [17. Faça um layout responsivo para o site](#17-faça-um-layout-responsivo-para-o-site)
    - [18. Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço](#18-crie-um-seletor-dropdown-para-ordenar-a-lista-de-produto-por-maior-e-menor-preço)
    - [19. Coloque uma animação no carrinho para quando um produto for adicionado](#19-coloque-uma-animação-no-carrinho-para-quando-um-produto-for-adicionado)
    - [20. Crie um slider lateral para exibir o carrinho na tela principal](#20-crie-um-slider-lateral-para-exibir-o-carrinho-na-tela-principal)
    - [21. Destaque, na tela principal, os produtos já adicionados ao carrinho](#21-destaque-na-tela-principal-os-produtos-já-adicionados-ao-carrinho)
    - [22. Impeça que a quantidade do produto seja negativa](#22-impeça-que-a-quantidade-do-produto-seja-negativa)

# Habilidades desenvolvidas

* Entender o que são Métodos Ágeis
* Entender o que é Kanban
* Entender o que é Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
* Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End da Trybe

---

## O que foi desenvolvido no projeto

Neste projeto criamos uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho. A partir dessas demandas, teremos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

---

# Intruções para rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:luiszeh/online-store.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd online-store`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

### Execução de testes unitários

Utilizamos [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários. Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta. Uma dessas marcações é o atributo `data-testid` e fizemos uso dele aqui.

Na descrição dos requisitos (logo abaixo) foi pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar evidente essa configuração: se o requisito pedir _"crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode escrever_:

```html
<button data-testid="my-action" ></button>
```

ou

```html
<a data-testid="my-action"><a/>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação. Afim de verificar a solução proposta, você pode executar todos os testes unitários localmente com o comando abaixo:

```bash
npm test
```

Você pode executar os testes para um único requisito passando, como parâmetro para o comando, o nome do arquivo de teste alvo:

```bash
npm test src/__tests__/requirement1.test.js
```

### Documentação da API do Mercado Livre

A página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, foi preciso consultar os seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

### Usando o Trello como ferramenta kanban

Uma forma para meu grupo organizar as atividades e dividir as tarefas foi através de um modelo de kanban.

![trello-online-store](https://user-images.githubusercontent.com/78225894/140180785-bf045bb2-0e38-4902-a6f7-5d794cc1c282.png)

---

## Requisitos do projeto

Foi de suma importância que o grupo se organizasse utilizando o kanban para maior eficiência e para que se minimizem os conflitos que a união de vários códigos trará.

### Grupos de prioridade

Os requisitos são organizados por grupos de prioridade. **Demandas de um grupo de prioridade podem ser realizadas em paralelo, e são pré-requisito para as demandas do grupo de prioridade seguinte.** Por exemplo:

- **Requisitos 1 e 2:** Prioridade 0 (Deve ser feito PRIMEIRO)
- **Requisitos 3 a 5:** Prioridade 1 (Devem ser feitos APÓS OS REQUISITO 1 E 2, mas podem ser feitos em paralelo)
- **Requisitos 5 a 7:** Prioridade 2 (Devem ser feitos APÓS OS REQUISITO 3 A 5, mas podem ser feitos em paralelo)
...

## Lista de requisitos
---

#### 1. Implemente o módulo de acesso à api do Mercado Livre

**PRIORIDADE 0** - Implemente um módulo que acessa a API do Mercado Livre

**Observações técnicas**

Você deve (**OBRIGATORIAMENTE**) utilizar o arquivo `src/services/api.js` para acessar a API do Mercado Livre em sua aplicação.  Utilize (**OBRIGATORIAMENTE**) o módulo **[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)** para realizar as requisições. Já deixamos 2 funções a serem implementadas para isso e é **importante utilizar apenas estas 2 funções e mantê-las com esses nomes** para que os testes possam ser validados.
**Nota importante:** precisamos lembrar que todos os fetchs ao rodar os testes das chamadas de API serão mockados, portanto se fazer alguma dessas chamadas com um outro fetch dentro da função, isso pode gerar algum problema na validação.


```javascript
export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
```

Essas funções devem realizar uma chamada para a API do Mercado Livre e retornar uma [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) com os dados de resultado. Com essa implementação, o uso dessas funções deve ser algo parecido com o exemplo abaixo:

```javascript
import * as api from './services/api'

api.getCategories().then(categories => { console.log(categories) })
```

A variável `categories` deve conter o objeto JSON com as categorias obtidas através da chamada da API do Mercado Livre:

```json
[
  {
      "id": "MLB5672",
      "name": "Acessórios para Veículos"
  },
  {
      "id": "MLB271599",
      "name": "Agro"
  },
  {
      "id": "MLB1403",
      "name": "Alimentos e Bebidas"
  }
]
```

O que será verificado:
```
  - Implementa a função `getCategories`.
  - Implementa a função `getProductsFromCategoryAndQuery`.
```

#### 2. Crie uma página de listagem de produtos vazia

**PRIORIDADE 0** - Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria".

- [Tela principal - Antes da busca](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_02.png)

**Observações técnicas**

A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

  * Esta página deve ficar no path `/`, renderizável a partir do acesso ao componente `<App />`.
  * Mostre a mensagem `"Digite algum termo de pesquisa ou escolha uma categoria."`.
  * Adicione o atributo `data-testid` com o valor `home-initial-message` no elemento da mensagem.

O que será verificado:
```
  - A raiz da aplicação, em `<App />`, renderiza com sucesso
  - A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma categoria.'
```

#### 3. Crie a página do carrinho de compras

**PRIORIDADE 1** - Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio.

- [Tela do carrinho de compras](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_03.png)
- [Tela principal - Com botão do carrinho de compras](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/bonus_shopping_cart_button.png)

**Observações técnicas**

Quem usa o site irá adicionar produtos em seu carrinho de compras e finalizar a compra. A listagem de produtos deve ter um ícone de carrinho que, ao ser clicado, leva à página do carrinho. Inicialmente, o carrinho deverá estar vazio.

  * O elemento com o ícone de carrinho de compras deve ficar visível na página inicial (listagem de produtos) e também na página de detalhes de um produto (descrita posteriormente)
  * Adicione o atributo `data-testid` com o valor `shopping-cart-button` no elemento com o ícone de carrinho de compras. **Atenção!** O **elemento** que faz o direcionamento para a página do carrinho é quem deve conter o `data-testid`. Se você fizer isso com um `<Link />`, por exemplo, é este quem deve conter o `data-testid`.
  * Mostre a mensagem `"Seu carrinho está vazio"` na página de carrinho de compras quando não existirem produtos no carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-empty-message` no elemento da mensagem.

O que será verificado:
```
  - A home deve ter o botão do carrinho de compras
  - Clicar no botão deve levar à página do carrinho vazio, com a mensagem 'Seu carrinho está vazio' nela
```

#### 4. Liste as categorias de produtos disponíveis via API na página principal

**PRIORIDADE 1** - Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela.

- [Tela principal - Com a lista de categorias](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_04.png)

**Observações técnicas**

Um endpoint da API do Mercado Livre retorna as categorias de produto disponíveis para busca. Em momento posterior tais categorias serão usadas para filtrar a listagem de produtos. Por hora, elas devem ser listadas na tela da listagem, conforme protótipo.

  * Adicione o atributo `data-testid` com o valor `category` nos elementos que possuem os nomes das categorias

O que será verificado:
```
  - Exibe as categorias retornadas pela API na página de listagem de produtos
```

#### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

**PRIORIDADE 1** - Criar a listagem de produtos. Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço. Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos. Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado".

- [Tela principal - Após a busca](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_05.1.png)
- [Tela principal - Nenhum produto encontrado](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_05.2.png)

**Observações técnicas**

A alma do site é a sua lógica de busca e listagem de produtos. Após digitar seus termos na caixa de busca uma requisição deverá ser feita à API do Mercado Livre utilizando a ação de um botão, tendo como parâmetros a frase digitada, e tais produtos deverão aparecer na tela numa exibição resumida, conforme protótipo anexo.

  * Adicione o atributo `data-testid` com o valor `query-input` no elemento `input` que servirá para a pessoa que usa sua aplicação digitar o termo de busca.
  * Adicione o atributo `data-testid` com o valor `query-button` no elemento que dispara a chamada para a API com o termo de busca pesquisado.
  * Adicione o atributo `data-testid` com o valor `product` nos elementos que possuem os dados dos produtos.

Obs: é importante ressaltar a necessicadade de utilizar a função `getProductsFromCategoryAndQuery`, que é mencionada no requisito 1 para a validação dos testes.

O que será verificado:
```
  - Exibe todos os produtos retornados pela API, dado um determinado filtro
```

#### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

**PRIORIDADE 2** - Como pessoa usuária, eu quero clicar em uma categoria e ver a listagem de produtos ser filtrada de  acordo com os produtos daquela categoria.

O que será verificado:

- A página, agora, deve poder usar as categorias recuperadas da API para filtrar os produtos buscados. Os termos e as categorias inseridas por quem usa devem ser usados em conjunto para filtragens mais específicas.

O que será verificado:
```
  - Filtra corretamente os produtos de uma página para exibir somente os daquela categoria
```

#### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

PRIORIDADE 3 - Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras.

- [Tela - Detalhamento do produto](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_07.png)

**Observações técnicas**

A exibição detalhada de um produto será a página para exibir tudo o que se tem acerca de um produto específico.

  * Adicione o atributo `data-testid` com o valor `product-detail-link` no elemento que ao ser clicado, enviará a pessoa que usa a aplicação para a página de detalhes do produto. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-detail-name` no elemento que possui o nome do produto na tela de detalhes.

Obs: é importante ressaltar a necessicadade de utilizar a função `getProductsFromCategoryAndQuery`, que é mencionada no requisito 1 para a validação dos testes.

O que será verificado:
```
  - Clicar no card do produto leva à página com seus detalhes
```

#### 8. Adicione produtos a partir da tela de listagem de produtos

**PRIORIDADE 3** - Na tela de listagem de produtos, permitir adicionar o produto ao carrinho.

**Observações técnicas**

Configure uma forma de adicionar produtos ao carrinho de compras a partir da tela de listagem de produtos.

  * Adicione o atributo `data-testid` com o valor `product-add-to-cart` nos elementos que executam a ação de adicionar os produtos ao carrinho de compras.
  * Desenvolva algo da forma simples: um elemento adiciona um produto.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

O que será verificado:
```
  - Adiciona da tela de listagem um produto que aparece no carrinho
```

#### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

**PRIORIDADE 3** - Na tela de exibição detalhada do produto, permitir adicionar o produto ao carrinho.

- [Tela principal - Adicionar ao carrinho na exibição detalhada](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_13.png)

**Observações técnicas**

Poder adicionar produtos ao carrinho a partir de sua tela de exibição detalhada será um canal importante de conversões de venda.

  * Adicione o atributo `data-testid` com o valor `product-detail-add-to-cart` no elemento que possui a ação de adicionar o produto ao carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

Obs: o teste deste requisito utiliza `data-testids` que são desenvolvidos em outros requisitos:

  * `data-testid="category"` pedido no requisito 4.
  * `data-testid="product-detail-link"` pedido no requisito 7.
  * `data-testid="product-detail-name"` pedido no requisito 7.
  * `data-testid="shopping-cart-button"` pedido no requisito 3.

O que será verificado:
```
  - Adiciona um produto ao carrinho da sua tela de detalhes
```

#### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

**PRIORIDADE 3** - Adicionar lista de produtos ao carrinho, com valor total ao final. Criar botões (-) e (+) para cada produto do carrinho, permitindo alterar a quantidade desejada de cada produto. A quantidade não pode ser negativa. Criar também botão (X) para remover produtos do carrinho e botão para finalizar a compra.

- [Tela - Carrinho de compras com quantidades](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_10.png)

**Observações técnicas**

São operações básicas de carrinho a alteração da quantidade de um determinado produto nele e a visualização de tudo o que foi adicionado, com a soma dos valores.

  * Adicione elementos na página do carrinho de compras para aumentar ou diminuir a quantidade de cada produto presente no carrinho.
  * Adicione o atributo `data-testid` com o valor `product-increase-quantity` no elemento que aumenta a quantidade de um produto. Adicione esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-decrease-quantity` no elemento que diminui a quantidade de um produto. Adicione esse atributo para todos os produtos.

O que será verificado:
```
  - Adiciona produtos ao carrinho e manipula suas quantidades
```

#### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

**PRIORIDADE 3** - Adicionar formulário ao produto, em sua exibição detalhada, para permitir adicionar avaliações com nota de 1 a 5 estrelas e comentários (o comentário deve ser opcional, sendo possível enviar apenas a nota). Exibir a lista de avaliações já feitas. Se quem usa sai e volta da tela, a nota e as avaliações não devem ser apagadas.

- [Tela - Detalhamento do produto com avaliações](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_11.1.png)
- [Tela - Detalhamento do produto com avaliações pregressas](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_11.2.png)

**Observações técnicas**

Avaliações positivas de um produto contribuem para boas vendas e nos dão insumos para, no tempo, destacarmos os produtos melhores e fazermos anúncios direcionados. Produtos ruins, de forma análoga, podem eventualmente ser penalizados por avaliações ruins.

  * Adicione um campo de texto para que a pessoa que utiliza a aplicação possa escrever algo sobre o produto.
  * Adicione o atributo `data-testid` com o valor `product-detail-evaluation` no campo de texto.

O que será verificado:
```
  - Avalia um produto na sua tela de detalhes
```

#### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

**PRIORIDADE 4** - Implementar tela para a finalização da compra. A tela deve conter uma seção para revisão dos produtos com o valor total da compra, um formulário para ter as informações do comprador e um a seção para escolher o método de pagamento. Ao se clicar em "Comprar", deve-se validar que o formulário está preenchido e que a forma de pagamento foi escolhida e, em caso positivo, deve-se zerar o estado, redirecionar para a tela inicial (listagem de produtos). Caso algo não tenha sido preenchido, mantém-se na mesma tela com o dados sem apagar e destaca-se os campos não preenchidos em vermelho.

- [Tela - Finalização de compra](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_12.png)

**Observações técnicas**

O último grande passo do fluxo do e-commerce é a finalização da compra por parte de quem usa.

  * Adicione um botão para finalizar a compra. Este botão ao ser clicado, deve enviar os dados referente à lista para uma página de "_checkout_".
  * Adicione o atributo `data-testid` com o valor `checkout-products` no botão que leva a pessoa à página de "_checkout_".
  * A página de "_checkout_" deve apresentar a listagem dos produtos e o valor total da compra.
  * A página de "_checkout_" também deve possuir elementos para que a pessoa insira os dados e finalize a compra.
  * Elemento "Nome completo" deve possuir o atributo `data-testid` com o valor `checkout-fullname`.
  * Elemento "Email" deve possuir o atributo `data-testid` com o valor `checkout-email`.
  * Elemento "CPF" deve possuir o atributo `data-testid` com o valor `checkout-cpf`.
  * Elemento "Telefone" deve possuir o atributo `data-testid` com o valor `checkout-phone`.
  * Elemento "CEP" deve possuir o atributo `data-testid` com o valor `checkout-cep`.
  * Elemento "Endereço" deve possuir o atributo `data-testid` com o valor `checkout-address`.
  * (**Não avaliativo**) Você pode criar um botão que simule a compra desses produtos, na verdade, esse botão não precisa realizar nenhuma função específica.

O que será verificado:
```
  - Faz os passos da compra com sucesso: recupera produtos de uma categoria; adiciona-os ao carrinho; faz o checkout; insere todos os dados
```

#### 13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

**PRIORIDADE 4** - Adicionar ao ícone do carrinho, em todas as telas em que ele aparece, um número com a quantidade de produtos adicionados.

- [Tela - Listagem de produtos com carrinho e quantidade](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_13.png)

**Observações técnicas**

A partir de uma pesquisa com usuários e concorrentes, identificamos que existe a necessidade de uma visualização da quantidade de produtos do carrinho de uma forma dinâmica e acessível.

  * Adicione o atributo `data-testid` com o valor `shopping-cart-size` no elemento que contém a quantidade de produtos presente na lista.
  * A quantidade a ser exibida é o número total de itens, ou seja, se a pessoa adiciona o produto1 5 vezes na tela de listagem e o produto2 2 vezes na tela de detalhes, o valor a ser exibido no carrinho é 7.
  * Esse elemento deve ser visível da página de listagem de produtos e da página de detalhes de produto.

Obs: é importante ressaltar a necessicadade de utilizar a função `getProductsFromCategoryAndQuery`, que é mencionada no requisito 1 para a validação dos testes.

O que será verificado:
```
  - Vê a quantidade de produtos no carrinho da tela de listagem
  - Vê a quantidade de produtos no carrinho da tela de detalhes
  - Verifica a persistência dos items no carrinho
```

#### 14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque

**PRIORIDADE 4** - Adicionar quantidade disponível do produto (disponível via chamada da API na chave "available_quantity") e limitar a compra de acordo com a quantidade em estoque. Desabilite os botões de (+) daquele produto na aplicação ao se alcançar a quantidade máxima dele no estoque.

**Observações técnicas**

Produtos tem disponibilidades limitadas. É uma péssima experiência de uso adicionar ao carrinho produtos que, no fim do processo, não se pode comprar.

O que será verificado:
```
  - Não adiciona ao carrinho mais produtos do que o disponível em estoque
```

#### 15. Mostre quais produtos tem o frete grátis

**PRIORIDADE 4** - Adicionar indicador de frete grátis à exibição resumida e detalhada do produto.

- [Tela principal - Exibição detalhada de produto com frete gratis](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_15.1.png)
- [Tela - Detalhamento de produto com frete gratis](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_15.2.png)

**Observações técnicas**

As pessoas que vendem no Mercado Livre disponibilizam frete grátis a alguns produtos. Devemos incorporar isso ao e-commerce.

  * Adicione um elemento que mostre essa informação para cada produto que possua frete grátis na tela de listagem.
  * Adicione o atributo `data-testid` com o valor `free-shipping` em elementos que apresentem essa informação para todos os produtos que possuam frete grátis.

O que será verificado:
```
  - Exibe corretamente a informação de frete grátis dos produtos
```

#### 16. Faça um layout para o site

**PRIORIDADE 5** - Adicionar ao site um layout agradável para quem usa ter uma boa experiência.

#### 17. Faça um layout responsivo para o site

**PRIORIDADE 5** - Faça um layout responsivo completo, para telas pequenas.

#### 18. Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço

**PRIORIDADE 5** - Criar um seletor dropdown que permite a lista de produtos ser ordenada por maior e menor preço.

- [Tela principal - Ordenação por preço](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/bonus_ordering.png)

#### 19. Coloque uma animação no carrinho para quando um produto for adicionado

**PRIORIDADE 5** - Coloque uma animação no carrinho quando adicionar/remover um produto.

#### 20. Crie um slider lateral para exibir o carrinho na tela principal

**PRIORIDADE 5** - Exibir o conteúdo do carrinho num slider na lateral da tela, de forma que ele possa ser exibido e escondido através da interação com botão (veja os detalhes no card).

- [Tela - Listagem com carrinho populado.png](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/bonus_slider.1.png)
- [Tela - Listagem com carrinho vazio.png](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/bonus_slider.1.png)

#### 21. Destaque, na tela principal, os produtos já adicionados ao carrinho

**PRIORIDADE 5** - Destacar produtos que já foram adicionados ao carrinho, diferenciando-o dos demais produtos da lista da página principal (veja os detalhes no card).

- [Tela - Listagem com destaque.png](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/bonus_marked_product.png)

#### 22. Impeça que a quantidade do produto seja negativa

**PRIORIDADE 5** - Da tela de detalhamento de produto, permitir alterar a quantidade daquele produto no carrinho, se ele estiver lá, com botões (-) e (+). A quantidade não pode ser negativa (veja detalhes no card).

- [Tela - Detalhamento do produto com quantidade.png](https://github.com/tryber/sd-12-project-frontend-online-store/tree/master/wireframes/card_09.png)

---

* Projeto proposto pela <a href="https://www.betrybe.com/">Trybe</a> e requisitos desenvolvidos por <a href="https://www.linkedin.com/in/luisffg/">Luis Fernando</a>
