import './polyfills';
import { NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UrlService } from '@uirouter/core';
import { RootModule } from './angular/app.module';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import angular from 'angular';

setAngularJSGlobal(angular);
platformBrowserDynamic()
  .bootstrapModule(RootModule)
    .then(platformRef => {
      // get() UrlService from DI (this call will create all the UIRouter services)
      const url: UrlService = platformRef.injector.get(UrlService);

      // Instruct UIRouter to listen to URL changes
      function startUIRouter() {
        url.listen();
        url.sync();
      }

      const ngZone: NgZone = platformRef.injector.get(NgZone);
      ngZone.run(startUIRouter);
    });
