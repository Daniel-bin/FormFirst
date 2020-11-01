import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  templateUrl: "./flop-suggestion.component.html"
})
export class FlopSuggestionComponent {
  suggestions = [
    {
      flopName: "",
      year: "",
      stars: ""
    }
  ];

  constructor() {}

  ngOnInit() {}
  addSuggestion(suggestion) {
    console.log(suggestion);
    this.suggestions.push(suggestion);
  }
}
