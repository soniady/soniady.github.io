let bookingList = document.getElementById("booking-list");
window.addEventListener("load",function(){
    Getbooking();
});

function Getbooking() {
    let url = 'https://api.sheety.co/9039ad4366f6581bdbf4877b07917633/bookingApp/bookings';//slash issue
    
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        var bookings = document.getElementById("booking-list");
        var bookingIds = [];
      
      for (var i = 0; i < json.bookings.length; i++) {
        var gName = json.bookings[i].name;
        var gEmail = json.bookings[i].email;
        var gPax = json.bookings[i].pax;
        var gId = json.bookings[i].id;
        var gRemarks = json.bookings[i].remarks;
        var gDate = json.bookings[i].date;
        var buttonId = "delete" + id;

        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = gDate;
        row.insertCell(5).innerHTML = gRemarks; //Remarks
        row.insertCell(6).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";
        
              
        bookings.innerHTML += "<button id='" + buttonId + "'>Delete</button><br/>";
        
        bookingIds.push(buttonId);
        
        
      }
      
      for (let j= 0; j < bookingIds.length; j++) {
        var el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function() {
          let theId = bookingIds[j].replace("delete","");
          DeleteBooking(theId);
          
        })
      }
    });
  }
  
  function DeleteBooking(id) {

    if(confirm("Are you sure you want to delete")) {
        let url = 'https://api.sheety.co/9039ad4366f6581bdbf4877b07917633/bookingApp/bookings/' + id;
        fetch(url, {
          method: 'DELETE',
        })
        .then((response) => {  
            let table = document.getElementById("booking-list");
            for(let i= 1; i < table.row.length; i++ ){
                table.deleteRow(i);
            }  
          GetBooking();
        });
            } else {
                alert("Delete cancelled");
            }

      }