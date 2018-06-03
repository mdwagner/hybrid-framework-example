import { Component } from '@angular/core';
import { TransitionService } from '@uirouter/angular';

@Component({
  selector: 'ng2-component',
  template: `
    <h1>Angular 2+ Component</h1>
  `
})
export default class Ng2Component {
  constructor(private transition: TransitionService) {}
  ngOnInit() {
    console.log('loading component', this.transition);
  }
}
