//redo of script.js to check logic

//create a new constructor function
var DonutShop = function(shopLocation, minCustomers, maxCustomers, avgDonuts, hoursOpen){
  this.shopLocation    = shopLocation;
  this.minCustomers    = minCustomers;
  this.maxCustomers    = maxCustomers;
  this.avgDonuts       = avgDonuts;
  this.hoursOpen       = 11;
  this.hourlyDonutTotal= [ ];
  this.dailyDonutTotal = 0;
};

//calculate hourly customers for one location at a time
DonutShop.protoype.calcHourlyCustomers = function(){
  for (var i = 0; i < this.hoursOpen; i++){
    this.hourlyDonutTotal[i].push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
  }
};

//calculate
DonutShop.protoype.totalHourlyDonuts = function(){
  for (var i = 0; i < this.hoursOpen; i++) {
    var hourlyCustomers = this.calcHourlyCustomers();
    var donutsEachHour = Math.round(hourlyCustomers * this.avgDonuts);
    this.hourlyDonutTotal.push(donutsEachHour);
    this.dailyDonutTotal += donutsEachHour;
  }
};


//render into table
DonutShop.protoype.render = function(){
  var tableRow    = document.createElement('tr');
  tableRow.setAttribute('id', this.shopLocation);
  var tableHead = document.createElement('th');
  var table = document.getElementById('donut-table');
  tableHead.textContent = this.storeLocation;
  tableRow.appendChild(tableHead);

  for (var i =0; i < this.hoursOpen; i++){
    var tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyDonutTotal[i];
    tableRow.appendChild(tableCell);
  }

  var tableCell = document.createElement('td');
  tableCell.textContent = this.dailyDonutTotal;

  tableRow.appendChild(tableCell);
  table.appendChild(tableRow);
};


//create an array of all shops
var allShops = [ ];

//data for all shops
allShops.push(new DonutShop ('Downtown', 8, 43, 4.50));
allShops.push(new DonutShop ('Capitol Hill', 4, 37, 2.00));
allShops.push(new DonutShop ('South Lake Union', 9, 23, 6.33));
allShops.push(new DonutShop ('Wedgewood', 2, 28, 1.25));
allShops.push(new DonutShop ('Ballard', 8,  58, 3.75));

DonutShop.render();


// Shop.prototype.makeTable  = function(){
//     var tr  = document.createElement('tr');
//     tr.setAttribute("id", this.storeLocation)
//     var th  = document.createElement('th');
//     //gets  table element   in  HTML  to  attach  the new elements  to
//     var tbl = document.getElementById('table');
//     //insert  store location  into  the new row
//     th.textContent  = this.storeLocation;
//     //  th.setAttribute('class',  this.storeLocation);
//     tr.appendChild(th);
//     //  loop  to  insert  hourly  donuts  into  table
//     for (var  i = 0;  i < this.hours; i++){
//         var td  = document.createElement('td');
//         td.textContent  = this.hourlyDonuts[i];
//         //  td.setAttribute('class',  this.storeLocation);
//         tr.appendChild(td);
//     }
//     //insert  daily donuts  total into  table
//     var td  = document.createElement('td');
//     td.textContent  = this.dailyDonuts;
//     //  td.setAttribute('class',  this.storeLocation);
//     tr.appendChild(td);
//     //add the new row to  the table
//     tbl.appendChild(tr);
// };
// var locationArray = [];
// //create  instances of  each  donut shop
// locationArray.push(new  Shop("Downtown",  8,  43, 4.5));
// locationArray.push(new  Shop("Capital Hill",  4,  37, 2));
// locationArray.push(new  Shop("South Lake  Union", 9,  23, 6.33));
// locationArray.push(new  Shop("Wedgewood", 2,  28, 1,25));
// locationArray.push(new  Shop("Ballard", 8,  58, 3.75));
// //call  method  that  adds  data  to  table for each  store location  the first time
// for (var  i = 0;  i < locationArray.length; i++){
//     locationArray[i].calculateHourlyDonuts();
//     locationArray[i].makeTable();
