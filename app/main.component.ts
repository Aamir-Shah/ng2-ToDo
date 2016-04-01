import {Component} from 'angular2/core';
import {navBar} from './navbar/nav.component'

@Component({
    selector: 'my-app',
    directives: [navBar],
    template: `
                <nav-bar></nav-bar>
`
})

export class mainComponent {
    constructor() {

    }
}