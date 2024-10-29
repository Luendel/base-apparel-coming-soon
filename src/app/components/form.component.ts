import { Component } from "@angular/core";

@Component({
    selector:"app-form",
    templateUrl:"./form.component.html",
    styleUrl:"./form.component.css"
})
export class FormComponent {
    text: string = ""
    isEmailValid:boolean = false
    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    mySubmit(){
        if(this.text == "" || !this.regex.test(this.text)){
            alert(this.text)
        }
    }

    handleText(event:Event){
        let element = event.target as HTMLInputElement
        this.text = element.value
    }

    validateInputText(html_Element: HTMLElement, html_field: HTMLElement, html_caption: HTMLElement){

        if(this.text == "" || !this.regex.test(this.text)){
            html_Element.style.opacity = "100%"
            html_field.style.border = "2px solid hsl(0, 93%, 68%)"
            html_caption.style.color = "hsl(0, 74%, 74%)"
            html_caption.style.userSelect = "text"
        }
        else {
            html_Element.style.opacity = "0%"
            html_field.style.border = "1px solid hsl(0, 36%, 70%)"
            html_caption.style.color = "transparent"
            html_caption.style.userSelect = "none"
        }
    }   

}