---------- TÍTULO DO PROJETO: LOUCAS POR SUCULENTAS ----------

Este projeto tem como objetivo o desenvolvimento de um sistema web completo para colecionadores de suculentas. 
O sistema consiste em um CRUD básico, no qual é possível cadastrar, editar, deletar e listar as suculentas que fazem parte 
da coleção. Dessa forma, o colecionador pode manter um registro de todos os elementos da sua coleção, sendo possível 
determinar facilmente o nome popular, espécie (nome científico), data de aquisição e cor da suculenta, bem como do número 
de plantas que compõem a sua coleção.

Ferramentas utilizadas: 
- Backend: serviços em modelo REST (requisições HTTP via diferentes verbos) usando node.js 
- Frontend: desenvolvido com framework React.js
- Rotas: 
    o / = é a home (landing page) do sistema, a qual não necessita de login para ser exibida
    o /colecao = lista as suculentas cadastradas na coleção. Caso o ID da suculenta seja passado como parâmetro, detalha 
    as informações de uma suculenta específica já cadastrada previamente
    o /colecao/cadastrar = rota que permite o cadastro de novas suculentas
    o /coleção/editar = rota que permite a edição de uma suculenta, sendo necessário passar o ID da 
    suculenta a ser editada como parâmetro
    o /colecao/deletar = rota que permite a remoção de uma suculenta cadastrada previamente, sendo necessário passar o ID 
    da suculenta a ser deletada como parâmetro
    o /login = rota que permite que o usuário realize o login no sistema com a credencial previamente cadastrada. 
- Bibliotecas utilizadas:
    o express
    o sequelize
    o mysql2
    o express-async-errors
    o cors
    o fs
    o jsonwebtoken
    o body-parser
    o sqlite3
    o moment
    o eslint
    o bootstrap5
    



Para rodar o sistema de forma integrada, é necessário abrir o terminal e navegar até a pasta backend, localizada dentro da pasta principal loucas_por_suculentas. Executar o comando "npm install" para baixar todas as dependências utilizadas no projeto e, em seguida, digitar o comando "node index.js" para rodar o servidor na porta 12345.
Então, abrir outro terminal, navegar até a pasta frontend, também localizada dentro da pasta principal "loucas_por_suculentas" e executar o comando "npm install" seguido por "npm start". O frontend roda na porta 3000. Portanto, para acessar o projeto, o seguinte caminho deve ser digitado no navegador: http://localhost:3000.
Para o login, utilizar as seguintes credenciais já cadastradas: email = isa@gmail.com, senha = 123.
OBS: As imagens utilizadas nesse site para background/logo não me pertencem. Foram baixadas do site www.pexels.com.br.

