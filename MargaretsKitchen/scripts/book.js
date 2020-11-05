function BookNow(guestName,guestEmail,guestPax,guestDate) {
    let url = 'https://api.sheety.co/9039ad4366f6581bdbf4877b07917633/bookingApp/bookings/';
  let body = {
    bookings: {
      name:guestName,
      email:guestEmail,
      pax:guestPax,
      date:guestDate,
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type":"application/json"
    }
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.bookings);
    document.getElementById("bookMsg").innerHTML = json.bookings.name + " sucessfully added!";
    GetBooking();
  });
}

document.getElementById("bookNow").addEventListener("click",function(){
   let name = document.getElementById("guestName").value;
   let email = document.getElementById("guestEmail").value;
   let pax = document.getElementById("guestPax").value;
   let remarks = document.getElementById("guestRemarks").value;

   console.log(name + "," + email + "," + pax + "," + remarks);


});