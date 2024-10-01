const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const produtórioIterativo = (m, n) => {
    let produto = 1;
    for (let i = m; i <= n; i++) {
        produto *= i;
    }
    return produto;
};

const produtórioRecursivo = (m, n) => {
    if (m > n) return 1; // Caso base
    return m * produtórioRecursivo(m + 1, n);
};

