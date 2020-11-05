let bookingList = document.getElementById("booking-list");
window.addEventListener("load",function(){
    Getbooking();
});

function Getbooking() {
    let url = 'https://api.sheety.co/9039ad4366f6581bdbf4877b07917633/bookingApp/bookings';
    
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        var bookings = document.getElementById("booking-list");
        var bookingIds = [];
      
      for (var i = 0; i < json.bookings.length; i++) {
        var name = json.bookings[i].name;
        var email = json.bookings[i].email;
        var pax = json.bookings[i].pax;
        var id = json.bookings[i].id;
        var date = json.bookings[i].date;
        var buttonId = "delete" + id;

        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = ""; //Remarks
        row.insertCell(5).innerHTML = "<button id='" + buttonId + "'>Delete</button><br/>";
        
              
        bookings.innerHTML += "<button id='" + buttonId + "'>Delete</button><br/>";
        
        bookingIds.push(buttonId);
        
        
      }
      
      for (let j= 0; j < bookingIds.length; j++) {
        var el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function() {
          let theId = bookingIds[j].replace("delete","");
          //DeleteBooking(theId);
          
        })
      }
    });
  }
  