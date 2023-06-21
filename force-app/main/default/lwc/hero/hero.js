import { LightningElement } from 'lwc';
import modal from 'c/modal';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Hero extends LightningElement {
    imageURL = IMAGES + '/hero.png'    
    snackbar;

    async handleShowModal(event){
        this.result = await modal.open({
            size:'Small',
            headerText:'Contact Me Form'
        });
        if(this.result = 'ok'){
            this.snackbar = this.refs.snackbar;
            this.snackbar.showSnackbar('Your request has been recieved');
        }
    }
}