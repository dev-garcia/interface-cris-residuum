# InterfaceCrisResiduum

Este projeto foi gerado com o Angular CLI na versão 16.2.3.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/` em seu navegador.

### Geração de Código

Execute `ng generate component nome-do-componente`para gerar um novo componente.

Para ficar mais organizado podemos usar `ng g c components/nome-do-componente`, que irá gerar o componente dentro da pasta "components".

### Compilação (Build)

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`

### Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Executando Testes de Ponta a Ponta (end-to-end)

Execute `ng e2e` para executar os testes de ponta a ponta usando uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de teste de ponta a ponta.

### Ajuda Adicional

Para obter mais ajuda com o Angular CLI, use `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Tailwind Css

A instalação é bem simples, só seguir a documentação do Tailwind na seção do framework, no caso aqui o Angular.

### Tailwind Css mais flowbite

A instalação é bem simples, só seguir a documentação do Tailwind na seção do framework, no caso aqui o Angular. https://flowbite.com/docs/getting-started/angular/

### Tailwind Css mais Prettier

A instalação é bem simples, só seguir a documentação do Tailwind na seção do Prettier. https://github.com/tailwindlabs/prettier-plugin-tailwindcss

### GitHub

- git init
- git add .
- git commit -m "comentario da mudança"
- git branch -M main
- git remote add origin https://github.com/dev-garcia/interface-cris-residuum.git
- git push -u origin main

Puxar a versão mais recente do repositório:

- git fetch origin // busca as informações mais recentes do repositório remoto.
- git pull origin main // Isso fará o download das mudanças mais recentes do branch "main" do repositório remoto para o seu branch local.

### DataTable no Angular

A instalação e configuração peguei neste link: http://l-lin.github.io/angular-datatables/#/welcome

Primeiro executamos o comando `ng add angular-datatables`, ele vai fazer automaticamente a instalação e a configuração de:

- npm install jquery --save
- npm install datatables.net --save
- npm install datatables.net-dt --save
- npm install angular-datatables --save
- npm install @types/jquery --save-dev
- npm install @types/datatables.net --save-dev

Usando o comando não precisamos fazer a instalação de todas as depedências e as configrurações manualmente!
