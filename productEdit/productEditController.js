(function() {
    'use strict';
    angular.module('myApp')
        .controller('productEditController',['$localStorage','$state',productEditController]);
    function productEditController ($localStorage,$state){
        var vm=this;
        var code = $state.params.id;
        var product = JSON.parse(localStorage.getItem("productList"));

        vm.product = product[code];
        //delete product[code];
        //product.push({pcode:vm.product.pcode,
        //    pname:vm.product.pname,
        //    pdesc:vm.product.pdesc,
        //    pprice:vm.product.pprice,
        //    pcategory:vm.product.pcategory
        //    });
        //localStorage.setItem("productList", JSON.stringify(product));

        vm.submitForm= function()
        {
            product[code].pcode=vm.product.pcode;
            product[code].pname=vm.product.pname;
            product[code].pdesc=vm.product.pdesc;
            product[code].pprice=vm.product.pprice;
            product[code].pcategory=vm.product.pcategory;
            //product.push({pcode:vm.product.pcode,
            //    pname:vm.product.pname,
            //    pdesc:vm.product.pdesc,
            //    pprice:vm.product.pprice,
            //    pcategory:vm.product.pcategory
            //});
            localStorage.setItem("productList", JSON.stringify(product));
            $state.go("productList");
            console.log(product);
        }

        //vm.txtCode = vm.product.pcode;

        }


}());
