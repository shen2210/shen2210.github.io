var btnContact = document.querySelector('.open_modal_btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('#icon_close');
var btnClose = document.querySelector('.modal_footer button');

function toggleModal(){
    modal.classList.toggle('hide');
}

btnContact.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal();
    }
})

