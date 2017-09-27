myApp.controller('WhereMyPeeps', function (PeepsService) {
    var vm = this;

    //array of results from server
    vm.allPeeps = [];
    
    //populates the DOM on load w/ peeps in Server
    PeepsService.get();
    // tells wmp controller to get the peeps from Server from the Peeps Service
    vm.peepsFromServer = PeepsService.peepsFromServer 
    console.log('peeps', vm.peepsFromServer);
    
    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name: vm.nameIn,
            location: vm.locationIn
        }; //end peepToAdd
        PeepsService.add(peepToAdd);
        PeepsService.get();
    }; 
    
}); // end controller
