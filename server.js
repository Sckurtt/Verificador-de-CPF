// Imports
const { verify } = require("crypto");
const express = require("express");
// const verification = require("./modules_js/verification");
const path = require("path");
const cpf = require(path.join(__dirname, 'modules_js', 'verification'));
const app = express();
// Const Config
const port = process.env.PORT || 8000;
const routesApp = ["/", "/v1/:cpf"];
const pathDir = {
    "public": (path.join(__dirname, 'public')),
    "index": (path.join(__dirname, 'public', 'index.html'))
}
app.use(express.static(pathDir.public)); // Permitir o acesso ao diretório dos arquivos
var respostaAPI = { // !!! Fazer a implementação no script
    "valid":"true",
    "CPF":"",
    "app_version": "v1"
}
// Rotas da aplicação
app.get(routesApp[0], (req, res)=>{
    res.sendFile(pathDir.index);
})
app.get(routesApp[1], (req, res)=>{

    if((req.params.cpf).length == 11){
    var cpfRecebido = req.params.cpf;
    cpfRecebido = (cpfRecebido).toString();
    console.log(`CPF recebido pela API: ${cpfRecebido}`);
    var valid = cpf(cpfRecebido);
    respostaAPI.valid = valid;
    respostaAPI.CPF = cpfRecebido;
    res.send(JSON.stringify(respostaAPI));
    // res.send(valid);
    }else if((req.params.cpf).length != 11){
        respostaAPI.valid = 897; // 897 => C'odigo de erro formato invalido
        var cpfRecebido = req.params.cpf;
        respostaAPI.CPF = cpfRecebido;
        res.send(JSON.stringify(respostaAPI));
    }
})

app.get('*', (req,res)=>{
    res.redirect('/');
})
app.listen(process.env.PORT || 3000, (err)=>{
    err ? console.log(err) : console.log(`Servidor sendo executado na porta ${port}`)
});