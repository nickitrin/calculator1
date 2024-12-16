function sum() {
    // Coleta os valores dos campos
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    fetch("/sum", {
            method: "POST",
            headers: {
                        "Content-Type": "application/json"},
            body: JSON.stringify({ a: a, b: b })
        })
        .then(response => response.json())
        .then(data => {
            if (data.result !== undefined) {
                // Exibe o resultado da soma
                document.getElementById("result").innerText = "Resultado: " + data.result;
            } else {
                document.getElementById("result").innerText = "Erro: " + data.error;
            }
        })
        .catch(error => {
            document.getElementById("result").innerText = "Erro na comunicação com o servidor.";
        });

    }