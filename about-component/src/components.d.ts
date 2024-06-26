/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AboutComponent {
        "backdropBackground": string;
        "closeModal": () => Promise<void>;
        "fontColor": string;
        "fontFamily": string;
        "iconUrl": string;
        "modalBackground": string;
        "openModal": () => Promise<void>;
        "technology": string;
    }
    interface LoaderComponent {
        "firstText": string;
        "interval": number;
        "secondText": string;
        "thirdText": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAboutComponentElement extends Components.AboutComponent, HTMLStencilElement {
    }
    var HTMLAboutComponentElement: {
        prototype: HTMLAboutComponentElement;
        new (): HTMLAboutComponentElement;
    };
    interface HTMLLoaderComponentElement extends Components.LoaderComponent, HTMLStencilElement {
    }
    var HTMLLoaderComponentElement: {
        prototype: HTMLLoaderComponentElement;
        new (): HTMLLoaderComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "about-component": HTMLAboutComponentElement;
        "loader-component": HTMLLoaderComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AboutComponent {
        "backdropBackground"?: string;
        "fontColor"?: string;
        "fontFamily"?: string;
        "iconUrl"?: string;
        "modalBackground"?: string;
        "technology"?: string;
    }
    interface LoaderComponent {
        "firstText"?: string;
        "interval"?: number;
        "secondText"?: string;
        "thirdText"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "about-component": AboutComponent;
        "loader-component": LoaderComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-component": LocalJSX.AboutComponent & JSXBase.HTMLAttributes<HTMLAboutComponentElement>;
            "loader-component": LocalJSX.LoaderComponent & JSXBase.HTMLAttributes<HTMLLoaderComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
