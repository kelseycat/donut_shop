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
  // for (var i = 0; i < this.hoursOpen; i++) {
  //   this.hourlyDonuts.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgDonuts);
}

DonutShop.prototype.calcHourlyDonuts= function(){
  for (var i = 0; i < this.hoursOpen; i++) {
    var hourlyCustomers = this.calcHourlyCustomers();
    var donutsHourTotal = Math.round(hourlyCustomers * this.avgDonuts);
    this.hourlyDonuts.push(donutsHourTotal);
    this.totalDailyDonuts += donutsHourTotal;
  }
};

//practice method from class
DonutShop.prototype.generateTable = function () {
  var tableRow = document.createElement('tr');

  var tableHead = document.createElement('th');
  tableHead.textContent = this.shopLocation;
  var table = document.getElementById('donut-table');

  tableRow.appendChild(tableHead);

  for (var i = 0; i < this.hoursOpen; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.hourlyDonuts[i];
    tableRow.appendChild(tableData);
    }

  var tableData = document.createElement('td');
  tableData.textContent = this.totalDailyDonuts;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
};

//data for all shops
var downtown  = new DonutShop ('Downtown', 8, 43, 4.50);
var capHill   = new DonutShop ('Capitol Hill', 4, 37, 2.00);
var southLU   = new DonutShop ('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop ('Wedgewood', 2, 28, 1.25);
var ballard   = new DonutShop ('Ballard', 8,  58, 3.75);
//create an array of all shops
var allShops = [downtown, capHill, southLU, wedgewood, ballard];



for (var i = 0; i < allShops.length; i++){
  allShops[i].calcHourlyDonuts();
  allShops[i].generateTable();
}


