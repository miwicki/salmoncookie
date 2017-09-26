'use strict';

var hours = ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//New contructer function//
var StoreLocations = [];
var storeTable = document.getElementById('stores');
function Store(name, minCust, maxCust, avgPerCust){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.custPh = function(){
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.hourlySales = function(){
    return Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
  };
  StoreLocations.push(this);
}
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales();
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
console.table(StoreLocations);

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
}
function storeRows() {
  for(var j in StoreLocations){
    StoreLocations[j].render();
  }
}
makeHeaderRow();
storeRows();

//Old literal objects://
// var stores1 = document.getElementById('pike');
// var pike = {
//   minCust:23,
//   maxCust:65,
//   avgPerCust:6.3,
//   custPh: function() {
//     return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var (hourlySales() = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
//       liEl.textContent = hours[i] + '-- Sold ' + (hourlySales() + ' cookies';
//       stores1.appendChild(liEl);
//     }
//   }
// };
//
// var stores2 = document.getElementById('seatac');
// var seatac = {
//   minCust:3,
//   maxCust:24,
//   avgPerCust:1.2,
//   custPh: function() {
//     return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
//       liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
//       stores2.appendChild(liEl);
//     }
//   }
// };
//
// var stores3 = document.getElementById('center');
// var center = {
//   minCust:11,
//   maxCust:38,
//   avgPerCust:3.7,
//   custPh: function() {
//     return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
//       liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
//       stores3.appendChild(liEl);
//     }
//   }
// };
//
// var stores4 = document.getElementById('hill');
// var hill = {
//   minCust:20,
//   maxCust:38,
//   avgPerCust:2.3,
//   custPh: function() {
//     return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
//       liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
//       stores4.appendChild(liEl);
//     }
//   }
// };
//
// var stores5 = document.getElementById('alki');
// var alki = {
//   minCust:2,
//   maxCust:16,
//   avgPerCust:4.6,
//   custPh: function() {
//     return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
//       liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
//       stores5.appendChild(liEl);
//     }
//   }
// };
//
//
//
// pike.render();
// seatac.render();
// center.render();
// hill.render();
// alki.render();
