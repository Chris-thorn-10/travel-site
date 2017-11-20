import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    } 
    
    events() {
        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this)); //.bind constrains the this keyword
        
        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        
        // pushes any key on the keyboard
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    
    keyPressHandler(e) {
        if (e.keyCode == 27){
            this.closeModal();
        }
        
    }
    
    openModal() {
        this.modal.addClass("modal__is-visible");
        return false; // prevents browser from scrolling to the top of the page when "#" link button clicked
    }
    
    closeModal() {
        this.modal.removeClass("modal__is-visible"); 
    }
}

export default Modal; 