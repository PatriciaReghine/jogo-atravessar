// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("jogo/imagens/estrada.png");
  imagemDoAtor = loadImage("jogo/imagens/ator-1.png");
  imagemCarro = loadImage("jogo/imagens/carro-1.png");
  imagemCarro2 = loadImage("jogo/imagens/carro-2.png");
  imagemCarro3 = loadImage("jogo/imagens/carro-3.png");
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
  
  somDaTrilha = loadSound("jogo/sons/trilha.mp3");
  somColisao = loadSound("jogo/sons/colidiu.mp3");
  somPonto = loadSound("jogo/sons/pontos.wav");
}

