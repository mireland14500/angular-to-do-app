import { Component } from "@angular/core";

@Component({
    selector: 'app-todo',
    template: `Title: {{ title }}`
})
export class ToDo {
    title: string = 'What do you need to do today?'
}