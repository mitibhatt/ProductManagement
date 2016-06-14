(function () {
    'use strict';

    var app = angular.module('myApp', ["ui.router", "ngStorage"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/mainView.html"
                })
                .state("productList", {
                    url: "/productDetails/:load",
                    templateUrl: "productDetails/product.html",
                    controller: "productController as vm"
                })
                .state("productEdit", {
                    url: "/productDetails/edit/:id",
                    templateUrl: "productEdit/productEdit.html",
                    controller: "productEditController as vm"
                })
                .state("productDetail", {
                    url: "/productView/:id",
                    templateUrl: "productView/productView.html",
                    controller: "productViewController as vm"
                })
                .state("productAdd", {
                    url: "/productAdd",
                    templateUrl: "productAdd/productAdd.html",
                    controller: "productAddController as vm"
                })
        }]
    );
}());