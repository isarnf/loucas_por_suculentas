---------- TÍTULO DO PROJETO: LOUCAS POR SUCULENTAS ----------

Este projeto tem como objetivo o desenvolvimento de um sistema web completo para colecionadores de suculentas. 
O sistema consiste em um CRUD básico, no qual é possível cadastrar, editar, deletar e listar as suculentas que fazem parte 
da coleção. Dessa forma, o colecionador pode manter um registro de todos os elementos da sua coleção, sendo possível 
determinar facilmente o nome popular, espécie (nome científico), data de aquisição e cor do elemento, bem como do número 
de elementos que compõem a sua coleção.

Ferramentas utilizadas: 
- Backend: serviços em modelo REST (requisições HTTP via diferentes verbos). 
- Rotas: 
    o /colecao = lista as suculentas cadastradas na coleção. Caso o ID da suculenta seja passado como parâmetro, detalha 
    as informações de uma suculenta específica já cadastrada previamente
    o /colecao/cadastrar = rota que permite o cadastro de novas suculentas
    o /coleção/editar = rota que permite a edição de uma suculenta, sendo necessário passar o ID da 
    suculenta a ser editada como parâmetro
    o /colecao/deletar = rota que permite a remoção de uma suculenta cadastrada previamente, sendo necessário passar o ID 
    da suculenta a ser deletada como parâmetro
- Bibliotecas utilizadas:
    o express
    o sequelize
    o mysql2/promise
    o express-async-errors
- Frontend: 
    o React


