/**
 * Created by rdm0509 on 8/12/16.
 */

import  { Component } from "@angular/core";

@Component({
    selector: "general",
    styles: [`
        h1 {
            color:#545454;
            background:#02A8F4;
            padding:15px;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
        }
    `],
    template: `
        <h1>{{title}}</h1>
    `
})

export class GeneralComponent {
    title:String = 'Hello World';
}