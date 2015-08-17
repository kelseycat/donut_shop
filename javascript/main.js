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

  var tableRow     = document.createElement('tr');
  var tableHead    = document.createElement('th');
  var table        = document.getElementById('donut-table');

  tableHead.textContent = this.shopLocation;
  tableRow.appendChild(tableHead);

  //add numbers to td
  for (var i = 0; i < this.hoursOpen; i++) {
     tableData = document.createElement('td');
     tableData.textContent = this.hourlyDonuts[i];
     tableRow.appendChild(tableData);
    }

  var tableData = document.createElement('td');
  tableData.textContent = this.totalDailyDonuts;
  tableRow.appendChild(tableData);

  table.appendChild(tableRow);
};

var allShops = [ ];
allShops.push(downtown = new DonutShop ('Downtown', 8, 43, 4.50));
allShops.push(capHill  = new DonutShop ('Capitol Hill', 4, 37, 2.00));
allShops.push(southLU  = new DonutShop ('South Lake Union', 9, 23, 6.33));
allShops.push(wedgewood =new DonutShop ('Wedgewood', 2, 28, 1.25));
allShops.push(ballard  = new DonutShop ('Ballard', 8,  58, 3.75));

//populate the table with array data
for (var i = 0; i < allShops.length; i++){
  allShops[i].calcHourlyDonuts();
  allShops[i].generateTable();
};

var addNewLocation = function(){
  var inputLocation = document.getElementById('shop-location');
  var inputMin      = parseInt(document.getElementById('min-customers').value);
  var inputMax      = parseInt(document.getElementById('max-customers').value);
  var inputAvg      = parseInt(document.getElementById('donut-average').value);

  for(var i = 0; i < allShops.length; i++){

    allShops.push(addNewLocation(inputLocation, inputMin, inputMax, inputAvg));
    allShops[allShops.length].calcHourlyDonuts();
    allShops[allShops.length].this.generateTable();
  }

};


var submitButton = document.getElementById('submit-shops');
submitButton.addEventListener('click', addNewLocation, false);

