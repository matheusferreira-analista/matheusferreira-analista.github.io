// 1. SELECIONANDO OS ELEMENTOS DA TELA
// Estamos criando "variáveis" (const) para guardar os elementos que queremos controlar.
const formulario = document.getElementById('form-contato');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');

// 2. CRIANDO O "OUVINTE" DE EVENTOS
// Estamos dizendo ao JS: "Fique de olho no formulário. Quando alguém tentar fazer o 'submit' (enviar), execute esta função."
formulario.addEventListener('submit', function(evento) {
    
    // 3. A LÓGICA DE VALIDAÇÃO
    // Primeiro, vamos pegar os valores (textos) que o usuário digitou e remover espaços em branco desnecessários com o ".trim()"
    let valorNome = campoNome.value.trim();
    let valorEmail = campoEmail.value.trim();
    let valorMensagem = campoMensagem.value.trim();

    // Verificamos se algum dos campos está vazio
    if (valorNome === '' || valorEmail === '' || valorMensagem === '') {
        // Se estiver vazio, PARAA TUDO. O evento.preventDefault() impede o recarregamento da página e o envio.
        evento.preventDefault(); 
        
        // Exibe um alerta no navegador para o usuário
        alert('Erro: Todos os campos são obrigatórios. Por favor, preencha o formulário completo.');
    } 
    // Se o código chegar aqui, significa que os campos estão preenchidos.
    // Em um sistema real, aqui o formulário seria enviado para o servidor.
    else {
        // Apenas para nosso teste atual:
        alert('Mensagem enviada com sucesso! A equipe Alpha Code entrará em contato.');
    }
});
// =======================================================
// LÓGICA DO MENU RESPONSIVO (CELULAR)
// =======================================================

// 1. Selecionando os elementos que vamos usar
const btnMobile = document.getElementById('btn-mobile');
const navMenu = document.getElementById('nav-menu');

// 2. Criando a função que faz o trabalho
function toggleMenu() {
    // O comando "classList.toggle" funciona literalmente como um interruptor.
    // Se o elemento não tiver a classe 'ativo', ele adiciona. Se já tiver, ele remove.
    navMenu.classList.toggle('ativo');
}

// 3. Colocando o "ouvinte" de cliques no botão
btnMobile.addEventListener('click', toggleMenu);
