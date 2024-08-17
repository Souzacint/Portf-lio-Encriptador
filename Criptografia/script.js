const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// Chaves de criptografia
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    mensagem.classList.remove('bg-image'); // Remove a imagem de fundo
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    mensagem.classList.remove('bg-image'); // Remove a imagem de fundo
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

function btnCopiar() {
    mensagem.select();
    document.execCommand('copy');
}
