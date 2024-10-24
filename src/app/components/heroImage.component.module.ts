import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HeroImage } from "./heroImage.component"


@NgModule({
    declarations:[HeroImage],
    imports:[CommonModule],
    exports:[HeroImage]
})
export class HeroImageModule {
    
}