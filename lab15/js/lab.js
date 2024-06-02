// Author: Yifeng Huang
// Date: 6/1/24
// Created while learning from example in class 

// create a listening button
$("#my-button").click(function(){
  // call ajax
  $.ajax(ajaxObj);
})

const URL = "https://api.chucknorris.io/jokes/random";

// set up an ajax object
const ajaxObj = {
  url: URL,
  type: "GET",
  dataType: "json",
  success: ajaxSuccess
}

// if ajax succeeeds
function ajaxSuccess(data) {
    // parse json
    const joke = data.value;

    // output prints joke
    $("#output").html(joke);
}
