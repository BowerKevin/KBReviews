// get buttons from tour-dates page
var add_stop = document.getElementById("add-stop");
var reset = document.getElementById("reset");

if (add_stop) {
    add_stop.addEventListener("click", function () {
        // grab entered text fields and date
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var date = document.getElementById("date").value;
        var stop = "";

        // create our own date format
        year = date.slice(0, 4);
        month = date.slice(5, 7);
        day = date.slice(8,);

        new_date = month + "-" + day + "-" + year;

        // determine if use wants to enter a US location
        us = ["us", "united states", "u.s", "u.s.a"];
        is_us = false

        us.forEach(element => {
            if (element == country.toLowerCase()) {
                is_us = true;
            }
        });

        // create string given location, US vs other
        if (is_us) {
            if (city == "" || country == "" || date == "" || state == "") {
                return
            }
            stop = city + ", " + state + ", " + country + " - " + new_date;
        }

        else {
            if (city == "" || country == "" || date == "") {
                return
            }
            stop = city + ", " + country + " - " + new_date;
        }

        var ul = document.getElementById("stop-list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(stop));
        ul.appendChild(li);
    })

    reset.addEventListener("click", function () {
        document.getElementById("city").value = "";
        document.getElementById("country").value = "";
        document.getElementById("date").value = "";
        document.getElementById("state").value = "";
    })
}

