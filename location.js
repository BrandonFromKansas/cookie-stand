function CookieStand(city, phone, location, hours, minCustomers, maxCustomers, avgSales) {
  this.city = city;
  this.phone = phone;
  this.location = location;
  this.hours = hours;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
}
let seattle = new CookieStand('Seattle', '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121', '6am - 7pm', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', '222-222-2222', 'Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8634', '6am - 7pm', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai', '6am - 7pm', 11, 38, 3.7);
let paris = new CookieStand('Paris', '444-444-4444', 'Champ de Marrs, 5 Avenue Anatole France, 75007 Paris', '6am - 7pm', 20, 38, 2.3);
let lima = new CookieStand('Lima', '555-555-5555', 'Ca. Gral Borgoño cuadra 8, Miraflores 15074', '6am - 7pm', 2, 16, 4.6);




let locations = [seattle, tokyo, dubai, paris, lima];




function displayLocationInfo() {
  let locationinfo = document.getElementById('output');
  locations.forEach(function (location) {
    let div = document.createElement('div');
    div.innerHTML = `<h3>${location.city}</h3>
                     <p>Contact Info: ${location.phone}</p>
                     <p>Location: ${location.location}</p>
                     <p>Hours: ${location.hours}</p>`;
    locationinfo.appendChild(div);
  });
}
displayLocationInfo();