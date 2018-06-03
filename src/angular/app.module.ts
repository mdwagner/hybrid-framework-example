import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import AppModule from '../angularjs';
import AppComponent from './app.component';

const NgState: NgHybridStateDeclaration = {
  name: 'index.home.h1',
  url: '/h1',
  component: AppComponent
};

@NgModule({
  imports: [
    BrowserModule,
    // Provide Angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterUpgradeModule.forRoot({ states: [NgState] }),
  ],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
})
export class RootModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // The DOM must be already be available
    const rootElement = document.getElementById('root');
    this.upgrade.bootstrap(rootElement!, [AppModule.name], {strictDi: true});
  }
}
