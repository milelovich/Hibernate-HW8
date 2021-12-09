angular.module('app', []).controller('indexController', function ($scope, $http) {
    const contextPath = 'http://localhost:8189/app';

    // console.log(123);

    $scope.loadProducts = function () {
        $http.get(contextPath + '/products')
            .then(function (response) {
                // console.log(response.data)
                $scope.ProductsList = response.data;
            });
    };

    $scope.deleteProduct = function (productId) {
        $http.get(contextPath + '/products/delete/' + productId)
            .then(function (response) {
                $scope.loadProducts();
            });
    }

    // GET http://localhost:8189/app/products/change_score?productId=1&delta=2
    $scope.changeScore = function (productId, delta) {
        // console.log('Click!');
        $http({
            url: contextPath + '/products/change_score',
            method: 'GET',
            params: {
                productId: productId,
                delta: delta
            }
        }).then(function (response) {
            $scope.loadProducts();
        });
    }

    $scope.createProductJson = function () {
        console.log($scope.newProductJson);
        $http.post(contextPath + '/products', $scope.newProductJson)
            .then(function (response) {
                $scope.loadProducts();
            });
    }


    $scope.findProductsByPriceBetween = function () {
        console.log($scope.findProductsByPriceBetween);
        $http.post(contextPath + '/products', $scope.findProductsByPriceBetween)
            .then(function (response) {
                $scope.loadProducts();
            });
    }

    $scope.sumTwoNumbers = function () {
        console.log($scope.calcAdd);
        $http({
            url: contextPath + '/calc/add',
            method: 'get',
            params: {
                a: $scope.calcAdd.a,
                b: $scope.calcAdd.b
            }
        }).then(function (response) {
            alert('Сумма равна ' + response.data.value);
            $scope.calcAdd.a = 10000;
        });
    }

    $scope.loadProducts();
});