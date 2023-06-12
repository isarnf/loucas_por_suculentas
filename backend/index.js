const express = require("express");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const fs = require("fs");
const app = express(); 
let cors = require('cors');
// require("express-async-errors");
let suculenta = require("./suculenta.js");

const porta = 12345;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());

const usuario = {"email": "isa@gmail.com", "senha":"123"}

app.post("/login", (req, res) => {
    const email = req.body.email;
    const  senha = req.body.senha;
    if(email == usuario.email && senha == usuario.senha){
        const privateKey = fs.readFileSync("./private.key", "utf8");
        const token = jwt.sign({ email, senha }, privateKey, {
            // expiresIn: 900,
            algorithm: "RS256"
        })
        console.log("Token criado")
        res.status(200).json({ auth: true, token: token });
        
    }else{
        res.status(403).json({ auth: false, mensagem: "Usuário ou senha inválidos!" });
    }
})

app.post('/logout', function(req, res) { 
    console.log("Logout realizado e token cancelado!");
    res.status(200).json({ auth: false, token: null }); 
});

function verificaToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ auth: false, mensagem: "Token não informado" });
    const publicKey = fs.readFileSync("./public.key", "utf8");

    jwt.verify(token,
        publicKey, { algorithm: ["RS256"] },
        function(err, decodificado) {
            if (err) {
                console.log(err);
                return res.status(401).json({ auth: false, mensagem: "Token inválido" });
            }

            console.log(decodificado);
            next();
        }
    );
}


app.get("/colecao", verificaToken, async (req, res) => {
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

app.patch("/colecao/editar/:id", async(req, res) => {
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
        console.log(`Deletando suculenta: ${req.params.id})`)
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
        const data = await suculenta.findByPk(req.params.id);
        console.log(`Detalhando suculenta: ${data.id}, ${data.nome_popular}`)
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
