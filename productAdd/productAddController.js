(function(){
'use strict';

    angular.module('myApp')
    .controller('productAddController',['$state','$localStorage',productAddController]);

    function productAddController($state,$localStorage){
    var vm = this;

        vm.submitForm = function(){
            var product = JSON.parse(localStorage.getItem("productList"));
            product.push({"pcode":vm.product.pcode,
                "pname":vm.product.pname,
                "pdesc":vm.product.pdesc,
                "pprice":vm.product.pprice,
                "pcategory":vm.product.pcategory,
                "pimage":vm.product.pimage});
            localStorage.setItem("productList", JSON.stringify(product));
            $state.go("productList");
        }
    }

}());