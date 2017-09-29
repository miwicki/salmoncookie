'use strict';

var hours = ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var StoreLocations = [];
var totalCookiesArray = [];
var finalTotal = 0;
var storeTable = document.getElementById('stores');
function Store(name, minCust, maxCust, avgPerCust){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.hourlySales();
  StoreLocations.push(this);
};
Store.prototype.custPh = function(){
  var rando1 = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  this.customersEachHour.push(rando1);
  return rando1;
};
Store.prototype.hourlySales = function(){
  for (var i = 0; i < hours.length; i++){
    var rando2 = Math.floor(this.custPh() * this.avgPerCust);
    this.cookiesEachHour.push(rando2);
    this.totalDailyCookies += rando2;
  }
};
function hourlyTotals(){
  for (var i = 0; i < hours.length; i++){
    var storeTotal = 0;
    for (var j = 0; j < StoreLocations.length; j++){
      storeTotal = storeTotal + StoreLocations[j].cookiesEachHour[i];
    }
    totalCookiesArray.push(storeTotal);
  }
};
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i] + ' cookies sold';
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
console.table(StoreLocations);
// console.log(this.customersEachHour, 'customersEachHour');
// console.log(this.cookiesEachHour);

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
function makeFooterRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);

  hourlyTotals();
  finalTotal = 0;
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = totalCookiesArray[i];
    finalTotal += totalCookiesArray[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = finalTotal;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
function storeRows() {
  for(var j in StoreLocations){
    StoreLocations[j].render();
  }
}
makeHeaderRow();
storeRows();
makeFooterRow();
