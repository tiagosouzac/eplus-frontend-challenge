![Eplus](https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png)

# E-Plus Frontend Challenge

Olá! Neste repositório você encontra minha solução para o desafio proposto pela Agência E-Plus. O desafio consiste em:

> Você precisará codificar o layout que segue no projeto, para isso será necessário consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

Para isso, escolhi utilizar:

- NextJS
- HTML
- CSS
- JavaScript

Você pode conferir a solução desenvolvida no diretório ["e-plus challenge"](https://github.com/tiagosouzac/eplus-frontend-challenge/tree/master/eplus-challenge) deste repositório.

## Como executar o projeto

Para executar o código em sua máquina, é necessário clonar o projeto. Utilizando o terminal de seu computador, navegue até a pasta desejada e execute os comandos:

```
git clone https://github.com/tiagosouzac/eplus-frontend-challenge.git
cd eplus-frontend-challenge
cd eplus-challenge
```

Em seguida, instale as dependências necessárias a execução (use o gerenciador de pacotes de sua preferência) e execute o projeto:

**NPM:**

```
npm init
npm run dev
```

**Yarn:**

```
yarn
yarn dev
```

O projeto estará disponível localmente para acesso em [localhost:3000](http://localhost:3000) (caso não esteja disponível, será aberto em outra porta do localhost).

## Sobre o desenvolvimento

Iniciei o projeto através do comando `yarn create next-app`, criando a estrutura inicial e instalando as dependências necessárias sua execução. A partir disso, desenvolvi o layout solicitado através de componentes, que recebem as propriedades/informações necessárias para sua renderização em tela, como no caso do carrinho e dos botões com ícones.

Foram desenvolvidas 2 funções principais:

- Responsividade: foi realizada a adaptação do layout para utilização em dispositivos móveis, transferindo parte dos elementos do cabeçalho para um menu lateral.

- Carrinho: o carrinho de compras recebe os dados em JSON vindos da API (feita de forma bastante simples através da própria API do NextJS, apenas para demonstração) e para isso foi utilizado o `fetch`. Tentei utilizar todas as informações que cada item do JSON retornava, por exemplo, se um item está disponível ou não, com isso, é mostrada uma mensagem de "Indisponível" no item.

Em ambos os casos, para exibir ou esconder o carrinho e o menu lateral, utilizei o evento de clique sobre o botão com o respectivo ícone no cabeçalho, sendo gerenciados por um estado para cada com `useState` e com as funções "toggle". Ao mudar o estado, o componente é renderizado ou removido da tela através do JSX.

Ainda no carrinho, criei uma função que calcula o valor total dos itens contidos nele usando o método `reduce`, considerando no cálculo se o item está ou não disponível e retornando a string já formatada em "R$".

## Melhorias/alternativas

Durante os momentos finais da codificação, refleti sobre alguns pontos que poderiam ter sido melhor trabalhados:

- A responsividade, adicionando mais media queries e fazendo alterações mais simples na interface em cada um deles.

- Utilizei o `useEffect` para realizar o `fetch` das informações do JSON na API, no entanto, poderia ter aproveitado melhor as funções do NextJS, como `getInitialProps`.

- Aproveitando o React 18, poderia também ter utilizado o Suspense no carregamento dos items.

- A abordagem utilizada para revelar ou esconder o carrinho e o menu lateral poderia também ser feita através das classes CSS, possibilitando até mesmo animações/transições para melhor visual e experiência do usuário.

- Para a estilização, poderia ter utilizado o Styled Components ao invés do .module.css, por exemplo, entretanto preferi manter este projeto mais "puro", sem o auxílio de bibliotecas/frameworks como este.

## Resultado

![E-Plus Challenge - Resultado do desktop](https://github.com/tiagosouzac/eplus-frontend-challenge/blob/assets/E-Plus%20Challenge.jpg?raw=true)
![E-Plus Challenge - Resultado do mobile](https://github.com/tiagosouzac/eplus-frontend-challenge/blob/assets/E-Plus%20Challenge%20(Mobile).jpg?raw=true)
![E-Plus Challenge - Menu lateral](https://github.com/tiagosouzac/eplus-frontend-challenge/blob/assets/E-Plus%20Challenge%20(Mobile%20menu).jpg?raw=true)

## Algumas considerações:

- Os ícones usados são todos do Material Design (https://material.io/icons/).
- A fonte utilizada é Montserrat (disponível no Google Fonts).
