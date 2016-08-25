export default class User {
    constructor(AppConstants, $http,JWT,$state) {
        'ngInject';

        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this.current = null;
    }

    attemptAuth(type, credentials) {
        let route = (type === 'login') ? '/login' : '';
        return this._$http({
            url: this._AppConstants.api + '/users' + route,
            method: 'POST',
            data: {
                user: credentials
            }
        }).then( // On success...
            (res) => {
                // Store the user's info for easy lookup
                this._JWT.save(res.data.user.token);
                this.current = res.data.user;
                return res;
            }
        );
    }

    logout(){
      this.current = null;
      this._JWT.destroy();
      this._$state.go(this._$state.$current, null, { reload: true });
    }
}
