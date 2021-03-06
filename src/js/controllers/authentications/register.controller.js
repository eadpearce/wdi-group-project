angular
  .module('wdi-group-project')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = register;
  function register() {
    User
      .register(vm.user).$promise
      .then(data => {
        console.log(data);
        CurrentUserService.getUser();
        $state.go('widgetsIndex');
      }, err => {
        console.log(err);
      });
  }
}
