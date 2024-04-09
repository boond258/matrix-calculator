const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/multiply-matrices', (req, res) => {
    const { matrix1, matrix2 } = req.body;

    const result = multiply(matrix1, matrix2);
    res.json({ result });
});

function multiply(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i].push(sum);
        }
    }

    return result;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
