// throw encerra o programa

const x = "10";

if (!Number.isInteger(x)) {
    // Encerra o programa.
    throw new Error("O valor da variável x não é um inteiro.");
}

console.log("Continuando o código...");

try {
    x = 2;
} catch (err) {
    console.log("Error:", err);
}

console.log("Continuando o código...");