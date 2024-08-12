
function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.querySelector('.cripto').addEventListener('click', function() {
    const textoOriginal = document.querySelector('.text-input').value;
    const textoCriptografado = criptografar(textoOriginal);
    mostrarMensagemCriptografada(textoCriptografado);
});

document.querySelector('.descripto').addEventListener('click', function() {
    const textoCriptografado = document.querySelector('.text-input').value;
    const textoOriginal = descriptografar(textoCriptografado);
    mostrarMensagemCriptografada(textoOriginal);
});


function mostrarMensagemCriptografada(texto) {
    const mensagemDiv = document.querySelector('.mensagem');
    const copyButton = document.getElementById('copy-btn');
    
    mensagemDiv.textContent = texto;
    mensagemDiv.style.textAlign = 'center';
    mensagemDiv.style.fontSize = '1.2rem';
    mensagemDiv.style.height = 'auto'
    copyButton.style.display = 'block'; 
}

function copiar(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Mensagem copiada!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

document.getElementById('copy-btn').addEventListener('click', () => {
    const mensagemDiv = document.querySelector('.mensagem').textContent;
    if (mensagemDiv) {
        copiar(mensagemDiv);
    }
});
