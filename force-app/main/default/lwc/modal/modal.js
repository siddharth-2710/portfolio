import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import FIRSTNAME from '@salesforce/schema/Lead.FirstName';
import LASTNAME from '@salesforce/schema/Lead.LastName';
import COMPANY from '@salesforce/schema/Lead.Company';
import DESCRIPTION from '@salesforce/schema/Lead.Description';
import EMAIL from '@salesforce/schema/Lead.Email';
export default class Modal extends LightningModal {
    objectApiName = 'Lead'
    @api headerText;
    fields = [FIRSTNAME, LASTNAME, EMAIL,COMPANY,DESCRIPTION];

    async handleSuccess(){
        this.close('ok');
    }
    handleClose(){
        this.close();
    }
}