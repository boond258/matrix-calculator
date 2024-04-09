function multiplyMatrices() {
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);

    if (cols1 !== rows2) {
        alert("Matrix multiplication not possible. Number of columns of Matrix 1 must be equal to the number of rows of Matrix 2.");
        return;
    }

    const matrix1 = [];
    const matrix2 = [];

    for (let i = 0; i < rows1; i++) {
        matrix1.push([]);
        for (let j = 0; j < cols1; j++) {
            matrix1[i].push(parseInt(prompt(`Enter element (${i + 1},${j + 1}) of Matrix 1:`)));
        }
    }

    for (let i = 0; i < rows2; i++) {
        matrix2.push([]);
        for (let j = 0; j < cols2; j++) {
            matrix2[i].push(parseInt(prompt(`Enter element (${i + 1},${j + 1}) of Matrix 2:`)));
        }
    }

    const result = multiply(matrix1, matrix2);
    displayResult(result);
}

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

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h3>Result Matrix</h3>";

    const table = document.createElement('table');
    for (let row of result) {
        const tr = document.createElement('tr');
        for (let val of row) {
            const td = document.createElement('td');
            td.textContent = val;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    resultDiv.appendChild(table);
}
