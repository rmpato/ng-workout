import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1> {{getMin(23,43)}}',
    styles: [`
    h1 {
        color: blue;
    }`]
})

export class HelloWorldComponent implements OnInit, OnDestroy {
    intervalSub;
    title;

    ngOnInit() {
        this.title = 'Hello World'
        this.intervalSub = setInterval(() => {
            console.log("Hello from ngOnInit")
        }, 1000)
    }

    ngOnDestroy() {
        console.log("ondestroy")
        if (this.intervalSub) {
            clearInterval(this.intervalSub);
        }
    }

    getMin(a, b) {
        return a < b ? a : b
    }
}