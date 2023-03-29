var total_visits = 1;
function mcount() {
    document.getElementById("mcount").innerHTML = total_visits++;
}
function get_user_input(){
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    result.innerText = document.getElementById("text_area").value;

}
function get_the_time () {
    document.getElementsByClassName("post-time")[0].innerText = Date();
}

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
function change_the_text_color_blue(){
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    result.style.color = "blue";
}
function change_the_text_color_red(){
    var result = document.querySelector("#post");
    result = document.querySelector(".post-content");
    result.style.color = "red";
}
function background_color_change(){
    var the_background = document.getElementById("background_input").value;
    document.body.style.backgroundColor = the_background;
}

function post_multiple(){
    let the_quantity_value = document.getElementById("quantitys");
    let farben = document.getElementsByClassName("farben");
    let typ = document.getElementsByClassName("typ");
    let textareaa = document.getElementsByTagName("textarea");
    for (var k = 1; k <= the_quantity_value.value; k++ ){
        const posts_div = document.createElement('div');
        const time_p = document.createElement('p');
        const text_p = document.createElement('p');


        // document.body.append(posts_div);
        // document.body.append(time_p);
        // document.body.append(text_p);
        
        time_p.classList.add("post-time");
        text_p.classList.add("post-content");
        posts_div.classList.add("new_post_div");
        time_p.innerText = new Date();
        text_p.innerText = textareaa[0].value;
        if (farben[0].checked == true){
            text_p.style.color = "blue";
        }
        if (farben[1].checked == true){
            text_p.style.color = "red";
        }
        if (typ[0].checked == true){
            text_p.style.fontWeight = "bold";
        }
        if (typ[1].checked == true){
            text_p.style.fontWeight = "italic";
        }
        posts_div.append(time_p);
        posts_div.append(text_p);
        var the_post_destination = document.getElementById("posts");
        the_post_destination.appendChild(posts_div);
    }
}

