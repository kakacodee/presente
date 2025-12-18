window.onload = function() {
    abrirModal();
};

function abrirModal() {
    document.getElementById("modalAuto").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalAuto").style.display = "none";
}
const music = document.getElementById('bgm');
const imge = document.getElementById('imge');
const musicButton = document.getElementsByClassName('button');
const btnimg = document.getElementById('play');

const playlists = [
    'music/aliancaor.mp3',
    'music/Roupa Nova - Whisky a Go-Go (Áudio Oficial).mp3',
    'music/Daniel Caesar - Best Part (Audio) ft. H.E.R..mp3',
    'music/Roupa Nova - A Viagem (Áudio Oficial).mp3',
    'music/Miúcha, Antonio Carlos Jobim - Pela Luz dos Olhos Teus (Pseudo Vídeo).mp3'

];
const imgs = [
    'img/img1.jpeg',
    'img/img2.jpeg',
    'img/img3.jpeg',
    'img/img4.jpeg',
    'img/img5.jpeg'
];
const Txts = [
    'Tocando na sua rádio: Aliança - Tribalistas',
    'Tocando na sua rádio: Whisky a Go-Go - Roupa Nova',
    'Tocando na sua rádio: Best Part - Daniel Caesar ft. H.E.R.',
    'Tocando na sua rádio: A Viagem - Roupa Nova',
    'Tocando na sua rádio: Pela Luz dos Olhos Teus - Miúcha, Antonio Carlos Jobim'
]
let currentMusicIndex = 0;
let currentImgIndex = 0;
let currentTxtIndex = 0;
// inicializa fonte da música e imagem
music.src = playlists[currentMusicIndex];
imge.src = imgs[currentImgIndex];
// referencia o elemento de texto que mostra o nome da faixa (oculto até tocar)
const songTextEl = document.getElementById('songText');
songTextEl.style.display = 'none';
function Music(){
    if (music.paused) {
        music.play()
        btnimg.src = "img/pause-removebg-preview.png"
        music.volume = 0.1
        music.muted = false  
        // mostra o texto da faixa atual ao tocar
        songTextEl.textContent = Txts[currentTxtIndex];
        songTextEl.style.display = 'block';
    } else {
        music.pause();
        btnimg.src = "img/play-button__3_-removebg-preview.png"
        // oculta o texto quando pausar
        songTextEl.style.display = 'none';
    }
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % playlists.length;
    currentImgIndex = (currentImgIndex + 1) % imgs.length;
    currentTxtIndex = (currentTxtIndex + 1) % Txts.length;
    music.src = playlists[currentMusicIndex];
    imge.src = imgs[currentImgIndex];
    // atualiza o texto exibido
    songTextEl.textContent = Txts[currentTxtIndex];
    // carrega e toca a nova música imediatamente
    music.load();
    music.volume = 0.1;
    music.play();
    btnimg.src = "img/pause-removebg-preview.png";
    songTextEl.textContent = Txts[currentTxtIndex];
    songTextEl.style.display = 'block';
}

function prevMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + playlists.length) % playlists.length;
    currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
    currentTxtIndex = (currentTxtIndex - 1 + Txts.length) % Txts.length;
    music.src = playlists[currentMusicIndex];
    imge.src = imgs[currentImgIndex]
    songTextEl.textContent = Txts[currentTxtIndex];
    music.load();
    music.volume = 0.1;
    music.play();
    btnimg.src = "img/pause-removebg-preview.png";
    songTextEl.textContent = Txts[currentTxtIndex];
    songTextEl.style.display = 'block';
}

// ========== GALERIA DE IMAGENS ==========
const galeriaImagens = [
    'img/img6.jpeg',
    'img/img7.jpeg',
    'img/img8.jpeg',
    'img/img9.jpeg',
    'img/img10.jpeg',
    'img/img11.jpeg',
    'img/img12.jpeg',
    'img/img13.jpeg',
    'img/img14.jpeg',
    'img/img15.jpeg',
    'img/img16.jpeg',
    'img/img17.jpeg'
];
const galeriatxt = [
    'Minha princesa',
    'Bobona do meu coração',
    'Meu amor',
    'Meu pastelzinho',
    'Gatona',
    'Tontona',
    'Mulherão',
    'Melhor namorada do mundo',
    'Meu porto seguro',
    'Meu presente de Deus',
    'Meu milagre',
    'Minha futura esposa'
];
let galeriaAtual = 0;
let galeriatxtatual = 0;

function abrirGaleria(index) {
    galeriaAtual = index;
    const modal = document.getElementById('galeriaModal');
    const img = document.getElementById('galeriaImg');
    const txt = document.getElementById('galeriaTexto');
    img.src = galeriaImagens[galeriaAtual];
    txt.textContent = galeriatxt[galeriaAtual];
    modal.classList.add('ativo');
}

function fecharGaleria() {
    const modal = document.getElementById('galeriaModal');
    modal.classList.remove('ativo');
}

function galeriaProxima() {
    galeriaAtual = (galeriaAtual + 1) % galeriaImagens.length;
    document.getElementById('galeriaImg').src = galeriaImagens[galeriaAtual];
    document.getElementById('galeriaTexto').textContent = galeriatxt[galeriaAtual];
}

function galeriaAnterior() {
    galeriaAtual = (galeriaAtual - 1 + galeriaImagens.length) % galeriaImagens.length;
    document.getElementById('galeriaImg').src = galeriaImagens[galeriaAtual];
    document.getElementById('galeriaTexto').textContent = galeriatxt[galeriaAtual];
}

// Fechar galeria ao clicar fora da imagem
document.addEventListener('click', function(event) {
    const modal = document.getElementById('galeriaModal');
    if (event.target === modal) {
        fecharGaleria();
    }
});

// Navegação com teclado
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('galeriaModal');
    if (modal.classList.contains('ativo')) {
        if (event.key === 'ArrowRight') galeriaProxima();
        if (event.key === 'ArrowLeft') galeriaAnterior();
        if (event.key === 'Escape') fecharGaleria();
    }
});


const API_URL = "https://script.google.com/macros/s/AKfycbx4akundr090agOw7S1pLIC323bDRCRxE6LFX05_tfAmYNkf9jZz8Wz6N7bfkAJirQy/exec"
 function SalvarMensagem() { 
    const mensagem = document.getElementById("MensagemCampo").value; 
    if (!mensagem.trim()) return; 
    fetch(API_URL, { method: "POST", body: JSON.stringify({ mensagem: mensagem }) }).then(() => { document.getElementById("MensagemCampo").value = ""; atualizarLista(); }); } 
    function atualizarLista() { fetch(API_URL) .then(res => res.json()) .then(data => { const ul = document.getElementById("mensagensUl"); ul.innerHTML = ""; data.forEach(item => { const li = document.createElement("li"); li.textContent = item.mensagem; }); }); } 
window.onload = atualizarLista;
// Atualiza a lista ao carregar a página window.onload = atualizarLista;