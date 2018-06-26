var app = angular.module('app',['ui.router','ngAnimate','ngSanitize','Directives','Services','Configs']);
// 运行配置
app.run(['$rootScope','$http','$state','G',function($rootScope,$http,$state,G){
    // 拦截器
    if(!(sessionStorage.getItem("uid"))){
        G.expire();
    }
    $rootScope.$on('$stateChangeStart',function(event,toState){
        // 隐藏导航操作
        $rootScope.navScope = true;
        if(toState.name === 'register'){
            $rootScope.navScope = false;
        }else{
            $rootScope.navScope = true;
        }
    });

}]);
// 路由配置
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        // 系统首页
        .state('home',{
            url:'/home',
            views:{
                'view':{
                    controller:'homeCtrl',
                    templateUrl:'tpl/home/home.html'
                }
            }
        })
        // 用户管理
        .state('user',{
            url:'/user',
            views:{
                'view':{
                    controller:'userCtrl',
                    templateUrl:'tpl/user/user.html'
                }
            }
        })

}]);
