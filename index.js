const btnBaidu = document.querySelector('#btn-baidu');
const btnApache = document.querySelector('#btn-apache');
const btnW3C = document.querySelector('#btn-w3c');
const contDinamico = document.querySelector('#contenido-dinamico');
btnBaidu.addEventListener('click', cargarPaginaBaidu);
btnApache.addEventListener('click', cargarPaginaApache);
btnW3C.addEventListener('click', cargarPaginaW3c);
function cargarPaginaBaidu(){
    contDinamico.setAttribute ('src','http://Baidu.com'); 
}

function cargarPaginaApache(){
    contDinamico.setAttribute ('src','http://Apache.org'); 
}
function cargarPaginaW3c(){
    contDinamico.setAttribute ('src','http://W3.org'); 
}
