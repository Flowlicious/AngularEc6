import angular from 'angular';
import ListErrors from './list-errors.component';


let componentsModule = angular.module('app.components', []);
componentsModule.component('listErrors',ListErrors);

export default componentsModule;
