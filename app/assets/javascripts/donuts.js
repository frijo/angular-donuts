Restangular.all('donuts').getList().then(function(donuts) {
      $scope.gridOptions.data = _.map(donuts, function(d) {
        return {
          title: d.title,
          flavor: d.flavor,
          cellTemplate: '<a href="{{row.entity.url}}">{{row.entity.title}}</a>'
        };
    });
});
