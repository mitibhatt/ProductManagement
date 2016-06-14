(function () {
    'use strict';
    angular.module('myApp')
        .controller('productController', ['productService', '$localStorage', '$state', productController]);

    function productController(productService, $localStorage, $state) {
        var vm = this;
        if ($state.params.load == "1") {
            productService.getDetails.success(function (data) {

                localStorage.setItem("productList", JSON.stringify(data));
                vm.product = data;
            });
        }
        else {
            vm.product = JSON.parse(localStorage.getItem("productList"));
        }
        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }

    };

}());