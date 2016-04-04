import {Component} from 'angular2/core';

@Component({
    selector: 'show-todo',
    templateUrl: 'app/showTodo/showTodo.html',
    inputs: ['todo']

})

export class showTodo {
    todo: any;
    constructor() {
    }
}