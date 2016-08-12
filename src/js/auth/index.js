import angular from 'angular';
import AuthCtrl from './auth.controller';

let authModule = angular.module('app.auth', []);
authModule.controller('AuthCtrl',AuthCtrl);

import AuthConfig from './auth.config';
authModule.config(AuthConfig);

export default authModule;
