
let salesData = document.getElementById("sales-data");
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let totalsPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalSales = 0;
const allCookieStands = []

//Constructor for each location
function CookieStand(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.cookiesSoldEachHour = []
  this.dailyStoreTotal = 0;
  this.totalSales = 0;
}



let seattleStore = new CookieStand("Seattle", 23, 65, 6.3)
let tokyoStore = new CookieStand("Tokyo", 3, 24, 1.2)
let dubaiStore = new CookieStand("Dubai", 11, 38, 3.7)
let parisStore = new CookieStand("Paris", 20, 38, 2.3)
let limaStore = new CookieStand("Lima", 2, 16, 4.6)

allCookieStands.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);
console.log(allCookieStands)


// Method to simulate cookies purchased.
CookieStand.prototype.simulateCookiesPurchased = function() {

  for (let i = 0; i < hours.length; i++) {
    let customer = getRandomNumberBetween(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.round(customer * this.avgSale);
    this.cookiesSoldEachHour.push(cookiesSold);
    this.dailyStoreTotal += cookiesSold;
    totalSales += cookiesSold;
  };
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


seattleStore.simulateCookiesPurchased()
tokyoStore.simulateCookiesPurchased()
dubaiStore.simulateCookiesPurchased()
parisStore.simulateCookiesPurchased()
limaStore.simulateCookiesPurchased()


function render () {
  //Create header row
  let headerRow = document.createElement("tr");
  let headerCell = document.createElement("th");
  headerCell.textContent = "City";
  headerRow.appendChild(headerCell);
  for (let i = 0; i < hours.length; i++) {
    headerCell = document.createElement("th");
    headerCell.textContent = hours[i];
    headerRow.appendChild(headerCell);
  }

  headerCell = document.createElement("th");
  headerCell.textContent = "Daily Total";
  headerRow.appendChild(headerCell);

  salesData.appendChild(headerRow);

}



CookieStand.prototype.renderStoreRow = function () {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.textContent = this.name;
  row.appendChild(cell);
  for (let i = 0; i < hours.length; i++) {
    //console.log(hours)
    cell = document.createElement("td");
    cell.textContent = this.cookiesSoldEachHour[i];
    row.appendChild(cell);
    totalsPerHour[i] += this.cookiesSoldEachHour[i]
    console.log(totalsPerHour[i])
    console.log(this.cookiesSoldEachHour[i])
  }

  cell = document.createElement("td");
  cell.textContent = this.dailyStoreTotal;
  row.appendChild(cell);

  salesData.appendChild(row);
}

//Call the render fucntion to display the table. Yeah, that's what I've been trying to do
render()
seattleStore.renderStoreRow();
tokyoStore.renderStoreRow();
dubaiStore.renderStoreRow();
parisStore.renderStoreRow();
limaStore.renderStoreRow();


function createTableFooter () {
  let footer = document.getElementById("sales-data");
  let row = document.createElement("tr");
  footer.appendChild(row);

  let totalLabel = document.createElement("td");
  totalLabel.textContent = "Totals by the hour";
  row.appendChild(totalLabel)

  for(let i=0; i<totalsPerHour.length; i++) {
    let td = document.createElement("td");
    td.textContent = totalsPerHour[i];
    row.appendChild(td);
    totalSales += totalsPerHour[i]
  }

  let mainTotal = document.createElement("td");
  mainTotal.textContent = `${totalSales}`;
  row.appendChild(mainTotal);

  }

  function start() {
    console.log("Starting Footer");
  }

  createTableFooter()





