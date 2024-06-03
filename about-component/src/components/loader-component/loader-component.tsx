import { Component,Prop,State,h } from '@stencil/core';
import './loader-component.css';


@Component({
    tag: 'loader-component',
    styleUrl: 'loader-component.css',
    shadow: true,
})
export class MyComponent {
    @Prop() firstText:string = '';
    @Prop() secondText:string = '';
    @Prop() thirdText:string = '';
    @Prop() interval:number = 2000;

    @State() currentTextDisplayed:string;
    @State() loadingTexts:string[] = [];


    componentDidLoad() {
        this.manageInputTexts();
        this.displayTextBySeconds();
    }

    manageInputTexts(){
        this.loadingTexts.push(this.firstText);
        this.loadingTexts.push(this.secondText);
        this.loadingTexts.push(this.thirdText);
        this.loadingTexts.push('');


    }

    displayTextBySeconds() : void {
        let totalDelay = 0;
    
        this.loadingTexts.forEach((text) => {
          setTimeout(() => {
            this.currentTextDisplayed = text;
          }, totalDelay);
    
          totalDelay += this.interval;
        });
    }

    render() {


        return (
            <div class="loader-overlay">
                <div class="loader"></div>
                <p class="loader__text">{this.currentTextDisplayed}</p>
            </div>
        )
    }
}
