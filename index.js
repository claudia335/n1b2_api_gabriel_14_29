const express = require('express');
const app = express();
const port = 3000;


// Middleware para analisar JSON
app.use(express.json());


// Função para calcular o produtório iterativamente
const produtórioIterativo = (m, n) => {
    let produto = 1;
    for (let i = m; i <= n; i++) {
        produto *= i;
    }
    return produto;
};


// Função para calcular o produtório recursivamente
const produtórioRecursivo = (m, n) => {
    if (m > n) return 1; // Base case
    return m * produtórioRecursivo(m + 1, n);
};


// Rota para calcular o produtório
app.post('/produtorio', (req, res) => {
    const { m, n, metodo } = req.body;


    // Validação dos parâmetros
    if (typeof m !== 'number' || typeof n !== 'number' || (metodo !== 'iterativo' && metodo !== 'recursivo')) {
        return res.status(400).json({ error: 'Parâmetros inválidos. Certifique-se de enviar m, n e metodo.' });
    }


    let resultado;


    // Chamada do método apropriado
    if (metodo === 'iterativo') {
        resultado = produtórioIterativo(m, n);
    } else {
        resultado = produtórioRecursivo(m, n);
    }


    // Retornando o resultado em JSON
    res.json({ resultado });
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});