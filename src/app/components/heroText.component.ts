import { Component } from "@angular/core";

@Component({
    selector:"app-hero-text",
    templateUrl:"./heroText.component.html"
})
export class HeroText {
 styles = {
    main:{
        "font-family": "'Josefin Sans', sans serif",
        "margin":"0 auto",
        "margin-top":"7.875vh",
        "text-align":"center",
        "font-size":"2rem",
        "line-height":"2.5rem",
        "width":"90%",
        "font-weight":"300",
        "letter-spacing":"0.93rem",
        "color": "hsl(0, 36%, 70%)"
    },
    span:{
        "color":"hsl(0, 6%, 24%)",
        "font-weight":"600"
    },
    paragraph: {
        "width":"78.67vw",
        "font-family": "'Josefin Sans', sans serif",
        "text-align":"center",
        "margin":"0 auto",
        "font-size":"0.85rem",
        "margin-top":"3.8vh",
        "color": "hsl(0, 36%, 70%)",
        "line-height":"1.5rem"
    }
 }
}