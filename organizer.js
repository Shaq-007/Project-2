var clicks = 0;
    var Reamining = 100;
    function onClick() {
        clicks += 1;
        Remaining = Reamining - clicks;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("Remaining").innerHTML = Remaining;
     
     };

     function login(){ 
        fetch("http://localhost:3000")
     .then((response)=> response.json())
     .then(data => {
         if (data === "successful login") {
             alert("Welcome")
         } else {
             alert("Unknown user")
         }
     })
     }