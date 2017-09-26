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
