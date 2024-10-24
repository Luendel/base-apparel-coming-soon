import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { HeroText } from "./heroText.component";

@NgModule({
    declarations:[HeroText],
    imports:[CommonModule],
    exports:[HeroText]
})
export class HeroTextModule {
    
}