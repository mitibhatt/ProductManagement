(function(){
    "use strict";
    angular
        .module("myApp")
        .factory("productService",['$http',productService]);

    function productService($http){
        function getDetails()
        {
            return  $http.get('data.json')
        }
        return{
            getDetails:getDetails()
            }
        }
}());