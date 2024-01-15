function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
      skills: '=',
      onRemove: '&'
    },
    templateUrl: 'views/skills-member.html',
    controller: function($scope) {
      $scope.remove = function() {
        $scope.onRemove();
      };
    }
  };
}