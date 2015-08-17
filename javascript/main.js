//constructor

var DonutShop = function (shopLocation, minCustomers, maxCustomers, avgDonuts){
  this.shopLocation     = shopLocation;
  this.minCustomers     = minCustomers;
  this.maxCustomers     = maxCustomers;
  this.avgDonuts        = avgDonuts;
  this.hourlyDonuts     = [ ];
  this.hoursOpen        = 11;
  this.totalDailyDonuts = 0;
};

//get random number of cusomters per hour
DonutShop.prototype.calcHourlyCustomers = function(){
  var hourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  return hourlyCustomers;
};

//get total donut estimate for every hourlyDonuts
DonutShop.prototype.calcHourlyDonuts = function(){
  for(var i = 0; i < this.hoursOpen; i++){
    var hourlyCustomers = this.calcHourlyCustomers();
    var donutsHourTotal = Math.round(hourlyCustomers * this.avgDonuts);
    this.hourlyDonuts.push(donutsHourTotal);
    this.totalDailyDonuts += donutsHourTotal;
  }
};

//render to the table
DonutShop.prototype.generateTable = function(){
  var table        = document.getElementById('donut-table');
  var tableRow     = document.createElement('tr');
  var tableHead    = document.createElement('th');
  tableHead.innerHTML = this.shopLocation;
  tableRow.appendChild(tableHead);

  //add numbers to td
  for (var i = 0; i < this.hoursOpen; i++) {
     tableData = document.createElement('td');
     tableData.innerHTML = this.hourlyDonuts[i];
     tableRow.appendChild(tableData);
    }

  var tableData = document.createElement('td');
  tableData.innerHTML = this.totalDailyDonuts;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);

  var addNewLocation = function(event){
    event.preventDefault();
    inputLocation = document.getElementById('shop-location');
    inputMin      = parseInt(document.getElementById('min-customers').value);
    inputMax      = parseInt(document.getElementById('max-customers').value);
    inputAvg      = parseFloat(document.getElementById('donut-average').value);

  function addLocationData(store){
    allShops.push(store);
  }
  shopData.id        = this.shopLocation;
  shopData.innerHTML = this.shopLocation;
  table.appendChild(shopData);
  };
};


//new instances for all the locations
var downtown  = new DonutShop ('Downtown', 8, 43, 4.50);
var capHill   = new DonutShop ('Capitol Hill', 4, 37, 2.00);
var southLU   = new DonutShop ('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop ('Wedgewood', 2, 28, 1.25);
var ballard   = new DonutShop ('Ballard', 8,  58, 3.75);

//put into an array
var allShops = [downtown, capHill, southLU, wedgewood, ballard];

//populate the table with array data
for (var i = 0; i < allShops.length; i++){
  allShops[i].calcHourlyDonuts();
  allShops[i].generateTable();
};


var submitShopInfo = function(){
  var donutForm        = document.getElementById('donut-form');
  var userLocation     = document.getElementById('shop-location');
  var userMinCustomers = parseInt(document.getElementById('min-customers'));
  var userMaxCustomers = parseInt(document.getElementById('max-customers'));
  var userAvgDonuts    = parseInt(document.getElementById('donut-average'));
  var userDonutShop    = new DonutShop(userLocation, userMinCustomers, userMaxCustomers, userAvgDonuts);
  userDonutShop.generateTable();
  allShops.push(addNewLocation());
};


var submitButton = document.getElementById('submit-shops');
submitButton.addEventListener('click', submitShopInfo);

