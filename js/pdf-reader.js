angular.module('pdfReader', ['pdf', 'angularUtils.directives.dirPagination'])
  .controller('PdfListController', function($scope, $http) {
      
  $scope.search   = '';
  $scope.pdfName = undefined;
  $scope.pdfUrl = undefined;
  $scope.scroll = 0;
  $scope.loading = 'is-invisible';
  $scope.progress = 0;
  $scope.errorStatus = 'is-invisible none';
  $scope.error = undefined;

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }

  $scope.onError = function(error) {
    console.log(error);
    $scope.$apply(function(){$scope.errorStatus = ''});
    $scope.$apply(function(){$scope.error=error.message;})
  }

  $scope.onLoad = function() {
   $scope.errorStatus = 'is-invisible none'
   $scope.loading = '';
  }

  $scope.onProgress = function (progressData) {
    var value = progressData.loaded / progressData.total * 100;
    if( (value - $scope.progress) >= 10 || value >= 100 ) {
        $scope.$apply(function(){$scope.progress = value;});
    }
    
    if( value >= 100 ) {
        $scope.loading = 'is-invisible';
    }
  };
  
  
  $scope.view = function(pdf) {
    $scope.pdfUrl = 'documents/' + pdf.link;
    $scope.pdfName = pdf.title;
    $scope.progress = 0;
  };
  
  $scope.pdfs = [];
  
  $http.get("data/documents.json").then(function(response){ 
     $scope.pdfs = response.data;
  });

});