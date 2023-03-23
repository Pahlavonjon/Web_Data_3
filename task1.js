


document.getElementById("the_button").addEventListener("click",change_the_time);

function change_the_time() {
    document.getElementById("current_time").innerHTML = Date();

}



// function get_the_date() {
//     const DATE = new Date();
//     const the_date = DATE.toDateString();
//     return the_date;
// }

// function get_the_time() {
//     const DATE = new Date();
//     const the_time = DATE.toLocaleTimeString();
//     return the_time;
// }


//     console.log('Date: ' + get_the_date());
//     console.log('Time: ' + get_the_time());


