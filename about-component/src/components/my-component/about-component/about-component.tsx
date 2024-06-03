import { Component, Method, Prop, State, h } from '@stencil/core';
import './about-component.css';
// import { format } from '../../utils/utils';

@Component({
    tag: 'about-component',
    styleUrl: 'about-component.css',
    shadow: true,
})
export class MyComponent {
    //data
    @Prop() technology: string;
    @Prop() iconUrl: string;
    @State() isVisible: boolean = false;

    //styles can be set from outside
    @Prop() backdropBackground: string = '#E6E6E6';
    @Prop() modalBackground: string = '#4C0863';
    @Prop() fontColor: string = 'white';

    @Method()
    openModal() {
        this.isVisible = true;
    }

    @Method()
    closeModal() {
        this.isVisible = false;
    }

    render() {
        const backdropStyle = {
            backgroundColor: this.backdropBackground,
          };
      
          const modalStyle = {
            backgroundColor: this.modalBackground,
            color: this.fontColor,
          };

        return (
            <div class={{ backdrop: true, hidden: !this.isVisible }} style={backdropStyle}>
                <section class="content" style={modalStyle}>
                    <div class="title-container">
                        <h1 class="title">{this.technology} Projects</h1>
                        <div class="logo-container">
                            <img src={this.iconUrl} class="tech-logo" alt="" />
                        </div>

                    </div>
                    <p class="description">
                        This project is a mockup created solely for the purpose of showcasing my web development skills using {this.technology}. All the information and data presented here are entirely fictitious and are not intended to represent real-world facts or scenarios.

                        This mock project is designed to provide a tangible example of my ability to build and design web applications. It serves as a portfolio piece, demonstrating the techniques and practices I employ in my work.

                        
                    </p>

                    <button class="confirm-btn" onClick={() => this.closeModal()}> Got it ✔️</button>
                </section>
            </div>
        )
    }
}
