import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
export default class SkillsCards extends LightningElement {
    adminImageURL = IMAGES + '/admin.png';  
    trainingImageURL = IMAGES + '/training.png';  
    serviceImageURL = IMAGES + '/service.png';  
}