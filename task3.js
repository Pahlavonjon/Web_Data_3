// Task  3.1

var total_visits = 0;
var the_counter_object = document.getElementById("mcount");
the_counter_object.addEventListener("mouseover",mcount);
function mcount() {
    document.getElementById("mcount").innerHTML = total_visits++;
}


// Task  3.2

function get_user_input(){
    var the_content = document.getElementsByClassName("post-content");
    the_content.textContents = (document.getElementsByTagName("textarea")).textContents;
}

function get_the_time () {
    (document.getElementsByClassName("post-time")).innerHTML = Date();
}



var post = document.getElementsByClassName("post_button");
post.addEventListener("click",get_user_input);

var time = document.getElementsByClassName("post_button");
time.addEventListener("click",get_the_time);





document.getElementById("the_button").addEventListener("click",change_the_time);

function change_the_time() {
    document.getElementById("current_time").innerHTML = Date();

}

