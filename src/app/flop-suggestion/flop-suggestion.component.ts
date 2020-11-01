import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  templateUrl: "./flop-suggestion.component.html"
})
export class FlopSuggestionComponent {
  suggestions = [];

  constructor() {}

  ngOnInit() {}
  addSuggestion(fromVal) {
    console.log(fromVal);
    let suggestion = {
      title: fromVal.flopName,
      year: fromVal.year,
      stars: fromVal.stars
    };

    this.suggestions.push(suggestion);
    console.log(this.suggestions[0]);
  }
}
