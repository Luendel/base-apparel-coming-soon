import { Component } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {

    estilos = {
        logo_div: {
            "padding-top" : "3.8vh",
            "padding-bottom":"3.8vh"
        },
        logo:{
            "margin-left" : "8.5vw",
            "width":"26.67vw"
        }
    }
}