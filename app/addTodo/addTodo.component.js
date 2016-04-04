System.register(['angular2/core', '../showTodo/showTodo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, showTodo_component_1;
    var addTodo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (showTodo_component_1_1) {
                showTodo_component_1 = showTodo_component_1_1;
            }],
        execute: function() {
            addTodo = (function () {
                function addTodo() {
                    this.todos = [];
                }
                addTodo.prototype.addTodo = function (val1, val2) {
                    this.todos.push({ title: val1.value, desc: val2.value });
                    console.log(this.todos);
                };
                addTodo = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        directives: [showTodo_component_1.showTodo],
                        templateUrl: 'app/addTodo/addTodo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], addTodo);
                return addTodo;
            }());
            exports_1("addTodo", addTodo);
        }
    }
});
//# sourceMappingURL=addTodo.component.js.map