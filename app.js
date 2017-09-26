'use strict';

var hours = ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var pike = {
  minCust:23,
  maxCust:65,
  avgPerCust:6.3,
  custPh: function() {
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var stores1 = document.getElementById('pike');
      var liEl = document.createElement('li');
      var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
      liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
      stores1.appendChild(liEl);
    }
  }
};

var stores2 = document.getElementById('seatac');
var seatac = {
  minCust:3,
  maxCust:24,
  avgPerCust:1.2,
  custPh: function() {
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
      liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
      stores2.appendChild(liEl);
    }
  }
};

var stores3 = document.getElementById('center');
var center = {
  minCust:11,
  maxCust:38,
  avgPerCust:3.7,
  custPh: function() {
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
      liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
      stores3.appendChild(liEl);
    }
  }
};

var stores4 = document.getElementById('hill');
var hill = {
  minCust:20,
  maxCust:38,
  avgPerCust:2.3,
  custPh: function() {
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
      liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
      stores4.appendChild(liEl);
    }
  }
};

var stores5 = document.getElementById('alki');
var alki = {
  minCust:2,
  maxCust:16,
  avgPerCust:4.6,
  custPh: function() {
    return Math.floor((Math.random() * this.maxCust - this.minCust + 1) + this.minCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var hourlySales = Math.floor((this.custPh(this.minCust,this.maxCust)) * this.avgPerCust);
      liEl.textContent = hours[i] + '-- Sold ' + hourlySales + ' cookies';
      stores5.appendChild(liEl);
    }
  }
};



pike.render();
seatac.render();
center.render();
hill.render();
alki.render();
