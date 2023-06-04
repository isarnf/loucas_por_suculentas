let express = require("express");
require("express-async-errors");
let suculenta = require("./suculenta.js");
let app = express(); 
const porta = 12345;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/colecao", async (req, res) => {
    console.log(`Listando todas as suculentas...`);
    res.status(200).send(await suculenta.findAll(req.body));
});

app.post("/colecao/cadastrar", async(req,res)=>{
    console.log(`Cadastrando nova suculenta: ${req.body.id}) ${req.body.nome_popular}`);
    try{
        res.status(200).send(await suculenta.create(req.body));
    }catch{
        console.log(`Suculenta não cadastrada!`);
    }
});

app.put("/colecao/editar/:id", async(req, res) => {
    console.log(`Editando suculenta: ${req.body.id}) ${req.body.nome_popular}`)
    try{
        const suculenta_a_editar = suculenta.findByPk(req.params.id);
        res.status(200).send(await suculenta_a_editar.then(suculenta.update(
        {nome_popular: req.body.nome_popular,
        nome_cientifico: req.body.nome_cientifico,
        data_aquisicao: req.body.data_aquisicao,
        cor: req.body.cor},
        {where: {id: req.params.id}},
    )));
    }catch{
        console.log(`Suculenta não editada!`);
    }
    
});

app.delete("/colecao/deletar/:id", async(req, res) => {
    try{
        console.log(`Deletando suculenta: ${req.body.id}) ${req.body.nome_popular}`)
        const suculenta_a_deletar = suculenta.findByPk(req.params.id);
        res.status(200).send(await suculenta_a_deletar.then(suculenta.destroy({
            where: {id: req.params.id},
        })));
    }catch{
        console.log(`Suculenta não deletada!`);
    }
    
});


app.get("/colecao/:id", async(req, res) => {
    try{
        console.log(`Detalhando suculenta: ${req.body.id}) ${req.body.nome_popular}`)
        res.status(200).send(await suculenta.findByPk(req.params.id));
    }catch{
        console.log(`Não foi possível detalhar suculenta.`);
    }
    
});

async function start() {
    await suculenta.sync();
    app.listen(porta, function(){
        console.log(`Servidor rodando na porta: ${porta}`)
    })
}


start();