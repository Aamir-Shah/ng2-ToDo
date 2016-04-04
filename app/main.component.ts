import {Component} from 'angular2/core';
import {navBar} from './navbar/nav.component';
import {addTodo} from './addTodo/addTodo.component';
import {showTodo} from './showTodo/showTodo.component'

@Component({
    selector: 'my-app',
    directives: [navBar, addTodo, showTodo],
    template: `
                <nav-bar></nav-bar>
                <add-todo></add-todo>           
`
})

export class mainComponent {
    constructor() {

    }
}