window.csPageOptions = {
  // configure the widget for a friendlyer mobile interface
  mobile_render: true,
  inlineOauth: 'mobile',

  // pass the full address book to the contactListCtrl
  beforeDisplayContacts:function(contacts, b, c) {
    // obtain access to the ContactListCtrl's scope
    var scope = angular.element(document.getElementById('ContactListCtrl')).scope();
    scope.$apply(function() {
      scope.fullAddressbook = contacts;
    });
  },
  // pass only the selected contacts to the contactListCtrl
  afterSubmitContacts: function(contacts){
    // obtain access to the ContactListCtrl's scope
    var scope = angular.element(document.getElementById('ContactListCtrl')).scope();
    scope.$apply(function() {
      scope.contacts = contacts;
    });
  }
};

// Asynchronously include the widget library.
(function(u){
  var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
  a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
})('//api.cloudsponge.com/widget/rouse-group-inc.js');

// initialize the angular app
myapp.controller('ContactListCtrl', function($scope) {    // contacts is the array of selected contacts

    $scope.message= "msg";

    $scope.contacts = [];
    // fullAddressbook is the array of all contacts in the user's address book
    $scope.fullAddressbook = [];
  });
