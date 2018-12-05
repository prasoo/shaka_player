var app = angular.module("playerApp",[]);

app.controller("playController", ['$scope', '$location', '$window' , function($scope){


  	$scope.viewFull = function(){
  		var landingUrl = "http://" + $window.location.host + "/viewFull.html";
       $window.location.href = landingUrl;
       
  	}

	$scope.mediaPlayer = [
                     {
                     	title: 'claydee',
                     	videoId: "https://www.youtube.com/embed/K68UrdUOr2Y?list=RDzuAcaBkcYGE?ecver=1"
                     },
                     {
                     	title: 'Manuel Riva',
                     	videoId: 'https://www.youtube.com/embed/wjT2JVlUFY4?list=RDzuAcaBkcYGE?ecver=1'
                     },
                     {
                     	title: 'youtube Dev',                    	
                     	videoId: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                     },
                     
                     {
                     	title: 'burak yeter',
                     	videoId: 'https://www.youtube.com/embed/Y1_VsyLAGuk?list=RDzuAcaBkcYGE?ecver=1'
                     },
                     {
                     	title: 'F.O. & Peeva',
                     	videoId: 'https://www.youtube.com/embed/UY1bt8ilps4?ecver=1'
                     },
                     {
                     	title: 'Machine Gun Kelly',
                     	videoId: 'https://www.youtube.com/embed/QpbQ4I3Eidg?ecver=1'
                     }

				];
}]);


app.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});

app.directive('youtubePlayer', function() {
  return {
    restrict: 'E',
    scope: {
      header: '@',
      video: '@'
    },
    transclude: true,
    replace: true,
    template: '<iframe ng-src="{{video | trustUrl}}" width="100%" height="230" frameborder="0" allowfullscreen></iframe>',
    link: function(scope, element, attrs) {
      scope.header = attrs.header;
    }
  };
});