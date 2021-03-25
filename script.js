let conta = 0;
const btn1 = document.querySelector('.share');
const btn2 = document.querySelector('.share-2');

const showFloater = () => {
    if(conta == 0){
        document.querySelector('.floating').style.display = 'grid';
        conta = 1;
    }else if(conta == 1){
        document.querySelector('.floating').style.display = 'none'
        conta = 0;
    }
}

btn1.addEventListener('click',showFloater)
btn2.addEventListener('click',showFloater)