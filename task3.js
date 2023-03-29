// Task  3.1

var total_visits = 1;
function mcount() {
    document.getElementById("mcount").innerHTML = total_visits++;
}



// Task  3.2

function get_user_input(){
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    result.innerText = document.getElementById("text_area").value;

}

function get_the_time () {
    document.getElementsByClassName("post-time")[0].innerText = Date();
}



//  Task 3.3 

var the_back = document.getElementById("menu");
the_back.style.display = 'none';

function remove_front() {
    var rest_of_the_page = document.getElementById("main");
    rest_of_the_page.style.display = "none";
    var the_back_menu = document.getElementById("menu");
    the_back_menu.style.display = 'inline';

}

function show_front(){
    var the_back_menu = document.getElementById("menu");
    the_back_menu.style.display = 'none';
    var rest_of_the_page = document.getElementById("main");
    rest_of_the_page.style.display = 'inline';
}




//  3.4



