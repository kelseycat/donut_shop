"use strict";

//constructor

function DonutShop(shopLocation, minCustomers, maxCustomers, avgDonuts, hourlyDonuts, totalDailyDonuts){
  this.shopLocation     = shopLocation;
  this.minCustomers     = minCustomers;
  this.maxCustomers     = maxCustomers;
  this.avgDonuts        = avgDonuts;
  this.hourlyDonuts     = [ ];
  this.totalDailyDonuts = 0;
  this.hoursOpen        = 11;
}

DonutShop.prototype.calcHourlyCustomers = function(){
  var hourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  return hourlyCustomers;
}

DonutShop.prototype.calcHourlyDonuts= function(){
  for (var i = 0; i < this.hoursOpen; i++) {
    var hourlyCustomers = this.calcHourlyCustomers();
    var donutsHourTotal = Math.round(hourlyCustomers * this.avgDonuts);
    this.hourlyDonuts.push(donutsHourTotal);
    this.totalDailyDonuts += donutsHourTotal;
  }
};

//render from class
DonutShop.prototype.generateTable = function () {
  var table           = document.getElementById('donut-table');
  var shopData        = document.createElement('tr');
  var tableHead       = document.createElement('th');
  tableHead.innerHTML = this.shopLocation;
  shopData.appendChild(tableHead);

  for (var i = 0; i < this.hoursOpen; i++){
    var tableData = document.createElement('td');
    tableData.innerHTML = this.hourlyDonuts[i];
    shopData.appendChild(tableData);
    }

  var tableData = document.createElement('td');
  tableData.innerHTML = this.totalDailyDonuts;
  shopData.appendChild(tableData);
  table.appendChild(shopData);


 var addNewLocation = function(event){
  event.preventDefault();
  inputLocation = document.getElementById('shop-location');
  inputMin = parseInt(document.getElementById('min-customers').value);
  inputMax = parseInt(document.getElementById('max-customers').value);
  inputAvg = parseFloat(document.getElementById('donut-average').value);


  function addNewLocation(store){
    allShops.push(store);
  }
  var buttonClick = document.getElementById('submit-shops');
  buttonClick.addEventListener('click', addNewLocation);
 }
};

//data for all shops
var downtown  = new DonutShop ('Downtown', 8, 43, 4.50);
var capHill   = new DonutShop ('Capitol Hill', 4, 37, 2.00);
var southLU   = new DonutShop ('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop ('Wedgewood', 2, 28, 1.25);
var ballard   = new DonutShop ('Ballard', 8,  58, 3.75);
//create an array of all shops
var allShops = [downtown, capHill, southLU, wedgewood, ballard];

//populate the table with array data
for (var i = 0; i < allShops.length; i++){
  allShops[i].calcHourlyDonuts();
  allShops[i].generateTable();
}

//add event listener




