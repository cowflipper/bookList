const items = document.querySelectorAll('#item');
const imageDiv = document.querySelector('#imageDiv');
const img = document.querySelector('#img');
const button = document.querySelector('#idsend');
let time;
let check = 0;


// Удаление/добавление класса и изменение счетчика 'check'
items.forEach((item) =>{
    item.addEventListener('click', function() {
        if(item.classList.contains('check')) {
            item.classList.remove('check');
            check--;
            console.log(check);
            
        } else {
            item.classList.toggle('check');
            check ++;
            console.log(check);
        }
    }) 
})

// Нажатие кнопки 'button'
button.addEventListener('click', function() {
    if (button.textContent === 'Отправить') {
        button.textContent = 'Отменить отправку';
        time = setTimeout(delLine, 2000);
        
    } else {
        button.textContent = 'Отправить';
        clearTimeout(time);
        items.forEach((item) =>{
            item.classList.remove('check');
        })
        check = 0;
        console.log(check);
        img.src = "assets/c8cc24bba37a25c009647b8875aae0e3.jpg";
        
    }
})

// Проверка счетчика 'check' и изменение картинки
function delLine(){
items.forEach((item) =>{
    item.classList.remove('check');
    button.textContent = 'Отправить';
})
if( check === 4) {
    img.src = 'assets/scale_1200.jpg';
} else{
    img.src = 'assets/VOeVVHUD9eg.jpg'
}
check = 0;
console.log(check);
}
