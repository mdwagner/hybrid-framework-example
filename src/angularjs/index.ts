import angular from 'angular';
// import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import { Configuration } from './config';

export default angular.module('app',
  [
    'ui.router',
    'ui.router.upgrade',
    // UI_ROUTER_REACT_HYBRID
  ])
  .config(Configuration)
  .config(['$urlServiceProvider', $urlServiceProvider => $urlServiceProvider.deferIntercept()]);
