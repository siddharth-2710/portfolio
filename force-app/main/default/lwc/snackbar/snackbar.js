import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {

    snackbarMessage;

    @api 
    showSnackbar(message){
        this.snackbarMessage = message;
        const snackbar = this.template.querySelector('.snackbar');
        snackbar.classList.add('show');
        setTimeout(()=>{
            snackbar.classList.remove('show');
        },2800);
    }
}