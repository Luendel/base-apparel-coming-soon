import { Component } from "@angular/core";

@Component({
    selector:"app-form",
    templateUrl:"./form.component.html"
})
export class FormComponent {
    styles = {
        section:{
            "margin-top": "5vh",
            "padding-bottom": "5vh"
        },
        fieldset:{
            "width": "82.9vw",
            "margin": "0 auto",
            "height": "5.75vh",
            "border": "1px solid hsl(0, 36%, 70%)",
            "border-radius": "2rem",
            "color": "hsl(0, 36%, 70%)",
            "display":"flex",
            "justify-content": "space-between"
        },
        input:{
            "height":"100%",
            "width":"65.34vw",
            "border":"none",
            "font-family":"'Josefin Sans', sans serif",
            "text-indent":"3.75vw",
            "border-radius": "2rem",
            "background": "transparent"
        }
        ,
        image:{
            "width":"17.07vw",
            "height":"100%",
            "background": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
            "border-radius":"2rem",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "box-shadow":" 1px 1px 0.6rem hsl(0, 74%, 74%)"
        }
    }
}