import { isPlatformBrowser } from "@angular/common";
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID} from "@angular/core";
import { Subscription, fromEvent } from "rxjs"

@Component({
    selector:"app-hero-image",
    templateUrl:"./heroImage.component.html",
    styleUrl:"./heroImage.component.css"
})
export class HeroImage implements OnDestroy, OnInit {

    path!: string;

    resizeSubscription!: Subscription;
    loadSubscription!: Subscription;

    constructor(@Inject(PLATFORM_ID) private platformId : any){}
    
    ngOnInit(): void {
        if(isPlatformBrowser(this.platformId)){
            this.loadSubscription = fromEvent(window,"load")
                .subscribe(()=> {
                    if(window.innerWidth >= 1000){
                        this.path = "images/hero-desktop.jpg"

                    } else {
                        this.path = "images/hero-mobile.jpg";
                    }
                })
            this.resizeSubscription = fromEvent(window , "resize")
            .subscribe(()=> {
                if(window.innerWidth >= 1000){
                    this.path = "images/hero-desktop.jpg"

                } else {
                    this.path = "images/hero-mobile.jpg";
                }
            })
        }
            
        }

    ngOnDestroy(): void {
        if(this.resizeSubscription){
            this.resizeSubscription.unsubscribe()
        }
        if(this.loadSubscription){
            this.loadSubscription.unsubscribe()
        }
        
    }
    
}