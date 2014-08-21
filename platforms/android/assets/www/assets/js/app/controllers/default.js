

//Main controller
myApp.controller('mainController', function($scope, localStorageService, $location) {

	$scope.title	= 'Homepage';
	$scope.message	= 'home';
	
    $scope.isActive = function (viewLocation) {
                 return viewLocation === $location.path();
                 
    };
                 
    localStorageService.clearAll();
    //sites
    localStorageService.set('site.1','{ "id":1,"name": "Fenouillet", "couv": "fenouillet.jpg", "description": "Le spot de bloc toulonnais! Dans la foret des colines qui dominent Hyeres, le site offre de jolie bloc en gneiss bien compact. A l ombre des arbres et donc souvent humide aussi.", "tag": "#toulon #gneiss", "volume": "13"}');
    localStorageService.set('site.2','{ "id":2,"name": "Gordolasque", "couv": "gordolasque.jpg", "descritpion": "Dans la vallee de la gordolasque, la fin de la route se termine par un chaos de beaux blocs parfois haut. Le cadre magique du debut du parc du Mercantour et magique! Frais en été et froid en hiver le site et parfait pour fuire la foule et les chaleurs de la cote.", "tag": "#montagne #mercantour #bellevedere #gneiss", "volume": "4"}');
    localStorageService.set('site.3','{ "id":3,"name": "Roquebrune", "couv": "roquebrune.jpg", "description": "Inevitable depuis l autoroute, le rocher de roqueburne atire l oeil. Sur les flancs de la montagne on touve de nobreuses boules de conglomérat rouge. Faute de pouvoir équiper les falaises qui les suplombent, la quantité de bloc est impressionante et le site est en pleine expension.", "tag": "#conglomerat #ermite", "volume": "15"}');
                 
    //sectors
    localStorageService.set('sector.1','{ "id":1,"name": "Squamish", "approach": "15min", "site": "1"}');
    localStorageService.set('sector.2','{ "id":2,"name": "Parking", "approach": "15min", "site": "1"}');
    localStorageService.set('sector.3','{ "id":3,"name": "Espigoule", "approach": "15min", "site": "1"}');
    localStorageService.set('sector.4','{ "id":4,"name": "Parking", "approach": "15min", "site": "2"}');
    localStorageService.set('sector.5','{ "id":5,"name": "Chaos", "approach": "15min", "site": "2"}');
    localStorageService.set('sector.6','{ "id":6,"name": "Cascade", "approach": "15min", "site": "3"}');
    localStorageService.set('sector.7','{ "id":7,"name": "Chapelle", "approach": "15min", "site": "3"}');

    
    //lines Fenouilllet/Squamish
    localStorageService.set('line.1','{ "id":1,"name": "Pose ton cul", "images": ["1.jpg", "2.jpg"], "grade": "7a", "site": "1", "sector": "1"}');
    localStorageService.set('line.2','{ "id":2,"name": "La force tranquille", "images": ["1.jpg"], "grade": "7a+", "site": "1", "sector": "1"}');
    localStorageService.set('line.3','{ "id":3,"name": "Put your ass", "images": ["1.jpg"], "grade": "7a+", "site": "1", "sector": "1"}');
    localStorageService.set('line.4','{ "id":4,"name": "Lili", "grade": "7b+", "images": "1.jpg", "site": "1", "sector": "1"}');
    localStorageService.set('line.5','{ "id":5,"name": "Orange and grey", "images": "1.jpg", "grade": "7a+", "site": "1", "sector": "1"}');
    
    //lines Fenouilllet/Parking
    localStorageService.set('line.6','{ "id":6,"name": "Pulpe friction", "images": "1.jpg", "grade": "7a+", "site": "1", "sector": "2"}');
    localStorageService.set('line.7','{ "id":7,"name": "Big traverse", "images": "1.jpg", "grade": "7a", "site": "1", "sector": "2"}');
    localStorageService.set('line.8','{ "id":8,"name": "N33", "images": "1.jpg", "grade": "6a", "site": "1", "sector": "2"}');
    localStorageService.set('line.9','{ "id":9,"name": "N30", "images": "1.jpg", "grade": "6b", "site": "1", "sector": "2"}');
    localStorageService.set('line.10','{ "id":10,"name": "N32", "images": "1.jpg", "grade": "6b", "site": "1", "sector": "2"}');

    //lines Fenouilllet/Espigoule
    localStorageService.set('line.11','{ "id":11,"name": "Le zèbre", "grade": "7b", "site": "1", "sector": "3"}');
    localStorageService.set('line.12','{ "id":12,"name": "Le facomochère", "grade": "7a", "site": "1", "sector": "3"}');
    localStorageService.set('line.13','{ "id":13,"name": "Lart et la technique", "grade": "7a+", "site": "1", "sector": "3"}');
                 
    //lines Gordolasque/Parking
    localStorageService.set('line.14','{ "id":14,"name": "I am not down", "grade": "7a+", "site": "2", "sector": "4"}');
    localStorageService.set('line.15','{ "id":15,"name": "Hypo Canette", "grade": "7b+", "site": "2", "sector": "4"}');
    
    //lines Gordolasque/Chaos
    localStorageService.set('line.16','{ "id":16,"name": "Kick parade", "grade": "7a+", "site": "2", "sector": "5"}');
    localStorageService.set('line.17','{ "id":17,"name": "Canabis street", "grade": "7c", "site": "2", "sector": "5"}');

    //lines Roquebrune/Cascade
    localStorageService.set('line.18','{ "id":18,"name": "Zion", "images": ["1.jpg", "2.jpg"], "grade": "7b", "site": "3", "sector": "6"}');
    localStorageService.set('line.19','{ "id":19,"name": "Death in Vegas", "grade": "7b+", "site": "3", "sector": "6"}');
    localStorageService.set('line.20','{ "id":20,"name": "Fermeture éclair", "grade": "7c", "site": "3", "sector": "6"}');
    localStorageService.set('line.21','{ "id":21,"name": "Electric umbrella", "grade": "8a", "site": "3", "sector": "6"}');
    localStorageService.set('line.22','{ "id":22,"name": "Lavande sauvage", "grade": "7a", "site": "3", "sector": "6"}');
    localStorageService.set('line.23','{ "id":23,"name": "Bloc a bloc", "grade": "6c", "site": "3", "sector": "6"}');
    localStorageService.set('line.24','{ "id":24,"name": "La force de tenebres", "grade": "6c", "site": "3", "sector": "6"}');
    localStorageService.set('line.25','{ "id":25,"name": "Solitude", "grade": "6c+", "site": "3", "sector": "6"}');
                 
    //lines Roquebrune/Chapelle
    localStorageService.set('line.26','{ "id":26,"name": "La desmonta", "grade": "7b", "site": "3", "sector": "7"}');
    localStorageService.set('line.27','{ "id":27,"name": "Nonobstant", "grade": "7b", "site": "3", "sector": "7"}');
    localStorageService.set('line.28','{ "id":28,"name": "Chocapic", "grade": "7a+", "site": "3", "sector": "7"}');
    localStorageService.set('line.29','{ "id":29,"name": "La trav de Comete", "grade": "7a", "site": "3", "sector": "7"}');
    localStorageService.set('line.30','{ "id":30,"name": "Grand Bras", "grade": "7b+", "site": "3", "sector": "7"}');
    localStorageService.set('line.31','{ "id":31,"name": "Ls Iwork", "grade": "7c", "site": "3", "sector": "7"}');
    localStorageService.set('line.32','{ "id":32,"name": "Le tenia", "grade": "7b", "site": "3", "sector": "7"}');
});



myApp.controller('SiteListCtrl', function($scope, $location) {

	$scope.title	= 'Sites';
	$scope.message	= 'page 1';
	
	$scope.sites = [];
	//This should be factorize in local storage?
	hasNext = true;
	i = 1;
	while(hasNext){
		$scope.sites[i-1] = localStorageService.get('site.' + i);
		i++;
		if(localStorageService.get('site.' + i) === null) {
			hasNext = false;
		}
	}
	
	
	$scope.detail = function(siteId) {
		$location.path('/site/' + siteId);
	};
});

myApp.controller('SiteDetailCtrl', function($scope, $routeParams, $location, localStorageService) {
	id = $routeParams.siteId;
	$scope.site = localStorageService.get('site.'+ id);
	
	/* Get child line */
	$scope.sectors = [];
	hasNext = true;
	i = 1;
	while(hasNext){
		sector = localStorageService.get('sector.' + i);
		
		if( sector.site === id ){
			$scope.sectors.push(sector);
		}
		
		i++;
		if(localStorageService.get('sector.' + i) === null) {
			hasNext = false;
		}
	}
	
	$scope.map = {
		    center: {
		        latitude: 45,
		        longitude: -73
		    },
		    zoom: 8
		};
    
    $scope.lineList = function(siteId,sectorId) {
            $location.path('/site/' + siteId + '/sector/' + sectorId);
    };
});

myApp.controller('SectorCtrl', function($scope, $routeParams, $location, localStorageService) {
    id = $routeParams.siteId;
    idd = $routeParams.sectorId;
    $scope.site = localStorageService.get('site.'+ id);
    $scope.current = localStorageService.get('sector.'+ idd);
    $scope.currency = idd;
    /* Get child sector */
    $scope.sectors = [];
    hasFollow = true;
    j = 1;
    while(hasFollow){
        sector = localStorageService.get('sector.' + j);
                 
        if( sector.site === id ){
                 if( sector.id == idd ){
                 sector.check = "selected";  
                 }
                 $scope.sectors.push(sector);
                
        }
        j++;
        if(localStorageService.get('sector.' + j) === null) {
            hasFollow = false;
        }
    };
                
             
    /* Get child line */
    $scope.lines = [];
    hasNext = true;
    i = 1;
    while(hasNext){
        line = localStorageService.get('line.' + i);
                 
        if( line.site === id ){
            $scope.lines.push(line);
        }
                 
        i++;
        if(localStorageService.get('line.' + i) === null) {
            hasNext = false;
        }
    }
                 
                 
                 
    $scope.detail = function(lineId) {
        $location.path('/line/' + lineId);
    };
    $scope.back = function(siteId) {
        $location.path('/site/' + siteId);
    };
                 
});

myApp.controller('LineListCtrl', function($scope, $location, localStorageService) {
	$scope.title	= 'Lines';
	$scope.message	= 'Lines List';
	
	$scope.lines = [];
	hasNext = true;
	i = 1;
	while(hasNext){
		$scope.lines[i-1] = localStorageService.get('line.' + i);
		i++;
		if(localStorageService.get('line.' + i) === null) {
			hasNext = false;
		}
	}
                 
    $scope.sites = [];
    //This should be factorize in local storage?
    hasNext = true;
    j = 1;
    while(hasNext){
        $scope.sites[j] = localStorageService.get('site.' + j);
        j++;
        if(localStorageService.get('site.' + j) === null) {
            hasNext = false;
        }
    }
	
	$scope.detail = function(lineId) {
		$location.path('/line/' + lineId);
	};
});

myApp.controller('LineDetailCtrl', function($scope, $routeParams, $location, localStorageService) {
	id = $routeParams.lineId;
    idSite = $routeParams.siteId
	$scope.line = localStorageService.get('line.'+ id);
    $scope.site = localStorageService.get('site.'+ id);

	                     
});

myApp.controller('menu3Controller', function($scope, $rootScope) {
	$scope.title	= 'Menu 3';
	$scope.message	= 'page 3';
	
});

myApp.controller('helpController', function($scope, $rootScope) {
	$scope.title	= 'Help';
	$scope.message	= 'Help page';
	
});