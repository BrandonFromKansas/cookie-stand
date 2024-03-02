
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
  this.simulateCookiesPurchased();
  allCookieStands.push(this);
}
// Method to simulate cookies purchased.
CookieStand.prototype.simulateCookiesPurchased = function () {
  //iterate through hours array
  for (let i = 0; i < hours.length; i++) {
    //create a variable called customer that uses the function getRandomNumberBetween and passes the minimum and maximum values 
    let customer = getRandomNumberBetween(this.minCustomers, this.maxCustomers);
    // create a variable called cookiesSold that multiplies the customer variable by the average sale.
    let cookiesSold = Math.round(customer * this.avgSale);
    this.cookiesSoldEachHour.push(cookiesSold);
    this.dailyStoreTotal += cookiesSold;
    totalSales += this.cookiesSoldEachHour[i];
  };

}
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function render() {
  //Create header row
  let header = document.getElementById('salesTableHeader');
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
  header.appendChild(headerRow);
}
CookieStand.prototype.renderStoreRow = function () {
  let body = document.getElementById('salesTableBody');
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
  body.appendChild(row);
}
//Call the render fucntion to display the table. Yeah, that's what I've been trying to do
// render()
// seattleStore.renderStoreRow();
// tokyoStore.renderStoreRow();
// dubaiStore.renderStoreRow();
// parisStore.renderStoreRow();
// limaStore.renderStoreRow();
let footer = document.getElementById("salesTableFooter");
function createTableFooter() {
  let row = document.createElement("tr");
  footer.appendChild(row);
  let totalLabel = document.createElement("td");
  totalLabel.textContent = "Totals by the hour";
  row.appendChild(totalLabel)
  for (let i = 0; i < totalsPerHour.length; i++) {
    let td = document.createElement("td");
    td.textContent = totalsPerHour[i];
    row.appendChild(td);
    // totalSales += totalsPerHour[i]
    console.log(totalSales);
  }
  let mainTotal = document.createElement("td");
  mainTotal.textContent = totalSales;
  row.appendChild(mainTotal);
}
function start() {
  console.log('Starting process');
  // instances for each cookiestand
  new CookieStand('Seattle', 23, 65, 6.3);
  new CookieStand('Tokyo', 3, 24, 1.2);
  new CookieStand('Dubai', 11, 38, 3.7);
  new CookieStand('Paris', 20, 38, 2.3);
  new CookieStand('Lima', 2, 16, 4.6);
  console.log('Created the stores:', allCookieStands);
  render();
  for (let i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].renderStoreRow();
    console.log(allCookieStands);
  }
  createTableFooter();
}
start()
let storeform = document.getElementById("addNewStore");
storeform.addEventListener("submit", function (event) {
  event.preventDefault();
  let location = event.target.name.value;
  // console.log(location);
  let mincustomers = parseInt(event.target.mincustomers.value);
  let maxcustomers = parseInt(event.target.maxcustomers.value);
  let averagecookies = parseFloat(event.target.averagecookies.value);
  // console.log(location, mincustomers, maxcustomers, averagecookies);
  let store = new CookieStand(location, mincustomers, maxcustomers, averagecookies);
  console.log(store);
  store.renderStoreRow();
  footer.innerHTML = "";
  createTableFooter();
});





















