(function(){
    "use strict";

    angular
        .module("myApp")
        .controller('productViewController',['$state',productViewController]);
    function productViewController($state) {
        var vm = this;
        var code = $state.params.id;
        var product = JSON.parse(localStorage.getItem("productList"));
        vm.product=product[code];

//alert(code);

        // vm.title="Product Details" + vm.product.pname;
        /*if(vm.employee.tags){
         vm.employee.tagList = vm.employee.tags.toString();
         }*/
    }
}());
