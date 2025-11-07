let alugado = false;
let img;
let button;

function alterarStatus(numero){
    img = document.getElementById(`game-${numero}`).querySelector('div')
    button = document.getElementById(`game-${numero}`).querySelector('a')

        if (img.classList.contains('dashboard__item__img--rented', 'dashboard__item__img--rented::after') && button.classList.contains('dashboard__item__button--return')){
            alugado = true;
        } else {
            alugado = false;
        }

        if (alugado == false){
            img.classList.add('dashboard__item__img--rented', 'dashboard__item__img--rented::after');
            button.classList.add('dashboard__item__button--return');
            alterarStatusAtual()
        } else {
            img.classList.remove('dashboard__item__img--rented', 'dashboard__item__img--rented::after');
            button.classList.remove('dashboard__item__button--return');
            alterarStatusAtual()
        }
}

function alterarStatusAtual(){
    if (alugado == false){
        button.innerText = 'Devolver';
        alugado = true;
    } else {
        button.innerText = 'Alugar';
        alugado = false;
    }
}