# HISTORY API

## Conceito

A History API é uma api da web que cria um histórico de acesso das páginas que o usuário visitou.

Ela funciona como uma pilha, sempre que clicamos em um novo link, ou acessamos uma nova URL, será adicionado como último item no histórico.

Por padrão é isso, acessar uma rota, ou clicar em um link href="http://novarota..."

A janela do browser já nos permite visualizar e percorrer esse histórico, indo para frente ou para trás na navegação. Por padrão isso irá carregar novamente aquela página.

### Métodos

A History api disponibiliza alguns métodos:

#### go()
Permite enviar o usuário para um local específico do histórico.

- go(0): Página atual
- go(-1): Página anterior
- go(1): Página para frente

#### back()
Permite enviar o usuário para a página anterior

#### forward()
Permite enviar o usuário para a página posterior.

### pushState()
É um pouco mais complexo. Ele recebe um objeto e permite adicionar dinamicamente um novo registro no histórico.

---

## Ideia do projeto com SPA
A ideia do projeto é criar uma SPA com JS nativo, explorando principalmente o método pushState.

O método pushState é muito útil nas SPAs, pois a ideia de uma SPA é ter um html, css, js iniciais com o mínimo de conteúdo possível na primeira renderização, ao clicar nos links que redirecionem para outra página, prevenir o padrão no navegador, adicionar um registro no histórico e então carregar via JS o html necessário para aquela rota.

Desse modo conseguimos prevenir o comportamento padrão dos links da aplicaçaão, ao mesmo tempo que adicionamos um registro no histórico, permitindo que o usuário faça a navegação e além disso carregando dinamicamente o HTML, otimizando a performance, já que não será necessário carregar novamente o html, css e demais recursos.

## Organização do projeto

#### /server.js
Para a nossa SPA funcionar, é necessário um servidor para lidar com as rotas.
É um servidor express bem simples que basicamente irá pegar qualquer requisição do navegador e enviar o html padrão.
Além disso é configurado um middleware para servir os arquivos estáticos de JS, css 

#### /frontend
É a pasta com todos os arquivos do client

#### /frontend/index.html
É o HTML inicial, que será exibido em todas as rotas.
Aqui devemos carregar também o JS inicial, ele será o responsável por modificar os eventos do documento para funcionar o pushState e carregamento dos conteúdos dinâmicos

#### /frontend/static/css
CSS

#### /frontend/static/js/index.js
É o arquivo JS principal. Nele iremos adicionar eventos ao carregar o html inicial.
Ao clicar em um link com o atributo data-link, pegamos a rota desejada, instanciamos uma view com os dados para a página e então mudamos o conteúdo dinamicamente dentro de #app.

#### /frontend/static/js/views
Aqui são criadas as views.
São classes que definem como cada página deve ser exibida.
Muda o título da página e também retorna o html que deve ser renderizado na página.