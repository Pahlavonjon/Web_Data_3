// Task  3.1

var total_visits = 1;
function mcount() {
    document.getElementById("mcount").innerHTML = total_visits++;
}


// Task  3.2

function get_user_input(){
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    result.innerText = document.getElementById("text_area").innerText;

//    // var result = document.querySelectorAll("#post post-content");
//     console.log(result);
//     result.innerHTML = document.getElementsByClassName("textarea").innerHTML;

//     console.log();

}

function gleichzeitig_input() {
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    var the_letter = result.innerText;
    result.innerText = the_letter;
  }

function get_the_time () {
    document.getElementsByClassName("post-time")[0].innerText = Date();
}

//  Task 3.3 

document.getElementById("menu").style.display = "none";

function remove_front() {
    var rest_of_the_page = document.getElementById("main");
    rest_of_the_page.style.display = "none";
    var the_back_menu = document.getElementById("menu");
    the_back_menu.style.visibility = "visible";
}

//  3.4



