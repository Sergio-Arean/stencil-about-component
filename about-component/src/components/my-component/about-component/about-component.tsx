import { Component, Method, Prop, State, h } from '@stencil/core';
import './about-component.css';
// import { format } from '../../utils/utils';

@Component({
  tag: 'about-component',
  styleUrl: 'about-component.css',
  shadow: true,
})
export class MyComponent {
  @State() isVisible:boolean = true;

  @Method()
  openModal() {
    this.isVisible = true;
  }
  
  @Method()
  closeModal() {
    this.isVisible = false;
  }

  render() {
    return (
    <div class={{backdrop: true, hidden: !this.isVisible}}>
      <section class="content">
        <h1 class="title">"Title" Projects</h1>
        <p class="description">
        This project is a mockup created solely for the purpose of showcasing my web development skills. All the information and data presented here are entirely fictitious and are not intended to represent real-world facts or scenarios.

This mock project is designed to provide a tangible example of my ability to build and design web applications. It serves as a portfolio piece, demonstrating the techniques and practices I employ in my work.

Thank you for your understanding.
        </p>

        <button class="confirm-btn" onClick={()=>this.closeModal()}> Got it ✔️</button>
      </section>
    </div>
    )
  }
}
