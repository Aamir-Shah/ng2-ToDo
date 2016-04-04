import {Component} from 'angular2/core';
import {showTodo} from '../showTodo/showTodo.component';

@Component({
    selector: 'add-todo',
    directives: [showTodo],
    templateUrl: 'app/addTodo/addTodo.html'
})

export class addTodo {
    todos: any[] = [];
    constructor() {
    }

    addTodo(val1: HTMLInputElement, val2: HTMLInputElement) {
        this.todos.push({ title: val1.value, desc: val2.value });
        val1.value = "";
        val2.value = "";
    }
}