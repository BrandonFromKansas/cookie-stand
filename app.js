
let salesData = document.getElementById("sales-data")
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
//Constructor for each location
function CookieStand(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.cookiesSoldEachHour = []
  this.dailyStoreTotal = 0;
}



let seattleStore = new CookieStand("Seattle", 23, 65, 6.3)
// console.log(seattleStore)
let tokyoStore = new CookieStand("Tokyo", 3, 24, 1.2)
// console.log(tokyoStore)
let dubaiStore = new CookieStand("Dubai", 11, 38, 3.7)
// console.log(dubaiStore)
let parisStore = new CookieStand("Paris", 20, 38, 2.3)
// console.log(parisStore)
let limaStore = new CookieStand("Lima", 2, 16, 4.6)



// Method to simulate cookies purchased.
CookieStand.prototype.simulateCookiesPurchased = function() {

  for (let i = 0; i < hours.length; i++) {
    let customer = getRandomNumberBetween(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.round(customer * this.avgSale);
    // console.log('cookiesSold', cookiesSold)
    this.cookiesSoldEachHour.push(cookiesSold);
    this.dailyStoreTotal += cookiesSold;
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


CookieStand.prototype.render = function () {
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

  // create rows for each store
  renderStoreRow(seattleStore, salesData);
  renderStoreRow(tokyoStore, salesData);
  renderStoreRow(dubaiStore, salesData);
  renderStoreRow(parisStore, salesData);
  renderStoreRow(limaStore, salesData);
}

function renderStoreRow(store, table) {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.textContent = store.name;
  row.appendChild(cell);
  console.log(store)
  for (let i = 0; i < hours.length; i++) {
    //console.log(hours)
    cell = document.createElement("td");
    cell.textContent = store.cookiesSoldEachHour[i];
    row.appendChild(cell);
  }

  cell = document.createElement("td");
  cell.textContent = store.dailyStoreTotal;
  row.appendChild(cell);

  table.appendChild(row);
}

//Call the render fucntion to display the table. Yeah, that's what I've been trying to do
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();

function displayCityInfo(location) {
  let container = document.createElement('div');
  let title = document.createElement('h2');
  title.textContent = `${location.name}`;
  container.appendChild(title);

  let list = document.createElement('ul');
  let hoursItem = document.createElement('li');
  let contactInfoItem = document.createElement('li');
  let locationItem = document.createElement('li');
  let totalCookiesItem = document.createElement('li');

  hoursItem.textContent = `Hours open: ${location.hours}`;
  contactInfoItem.textContent = `Contact info: Phone - ${location.phone}`;
  locationItem.textContent = `Location: ${location.location}`;
  totalCookiesItem.textContent = `Total cookies: ${location.totalCookies}`;

  list.appendChild(hoursItem);
  list.appendChild(contactInfoItem);
  list.appendChild(locationItem);
  list.appendChild(totalCookiesItem);

  container.appendChild(list);
  document.body.appendChild(container);

}








// // Method to render cookies per hour for a location
// CookieStand.prototype.render = function() {
//   //let container = document.createElement('div');
//   const salesData = document.getElementById("root");
//   const locationData = document.createElement("section");
//   locationData.classList.add("location");
//   salesData.appendChild(locationData);
//   const title = document.createElement('h2');
//   title.textContent = `${location.name}`;
//   console.log(title)
//   salesData.appendChild(title);
//   console.log(salesData)
//   let list = document.createElement('ul');
//   salesData.appendChild(list)
//   location.cookiesSoldEachHour.forEach((cookies, index) => {
//     console.log(cookies)
//     let listItem = document.createElement('li');
//     listItem.textContent = `${location.hours.split(', ')[index]}: ${cookies} cookies`;
//     list.appendChild(listItem);
//   });

// }

//Display results for each location
// displayCookiesPerHour(seattle);
// displayCookiesPerHour(tokyo);
// displayCookiesPerHour(dubai);
// displayCookiesPerHour(paris);
// displayCookiesPerHour(lima);



// Call a function to display city information list
//displayCityIfoList();

// function displayCityInfo(location) {
//   let container = document.createElement('div');
//   let title = document.createElement('h2');
//   title.textContent = `${location.name}`;
//   container.appendChild(title);

//   let list = document.createElement('ul');
//   let hoursItem = document.createElement('li');
//   let contactInfoItem = document.createElement('li');
//   let locationItem = document.createElement('li');

//   hoursItem.textContent = `Hours open: ${location.hours}`;
//   contactInfoItem.textContent = `Contact info: Phone - ${location.phone}`;
//   locationItem.textContent = `Location: ${location.location}`;

//   list.appendChild(hoursItem);
//   list.appendChild(contactInfoItem);
//   list.appendChild(locationItem);
  
//   container.appendChild(list);
//   document.body.appendChild(container);
// }
