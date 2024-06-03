import { Component,State,h } from '@stencil/core';
import './loader-component.css';


@Component({
    tag: 'loader-component',
    styleUrl: 'loader-component.css',
    shadow: true,
})
export class MyComponent {

    @State() currentTextDisplayed:string;
    @State() loadingTexts:string[] = ['Searching articles...','Your reading adventure is about to begin!',''];


    componentDidLoad() {
        let totalDelay = 0;
        const delayInterval = 2000;
    
        this.loadingTexts.forEach((text) => {
          setTimeout(() => {
            this.currentTextDisplayed = text;
          }, totalDelay);
    
          totalDelay += delayInterval;
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
