import angular from 'angular';
import UserService from './user.service';
import JWT from './jwt.service';


// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);
servicesModule.service('User',UserService);
servicesModule.service('JWT',JWT);

export default servicesModule;
