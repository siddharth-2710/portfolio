import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons'
import {loadStyle} from 'lightning/platformResourceLoader';
export default class NavMenu extends LightningElement {

    renderedCallback(){
        loadStyle(this, ICONS + '/style.css');
    }

    toggleMenu() {
        this.refs.myTopnav.classList.toggle('responsive');
    } 
}