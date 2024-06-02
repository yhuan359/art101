// Author: Yifeng Huang
// Date: 6/1/24
// Created while learning from example in class 

// create a button listener
$("#my-button").click(function(){
  // call ajax
  $.ajax(ajaxObj);
})

const URL = "https://api.chucknorris.io/jokes/random";

// setup ajax object
const ajaxObj = {
  url: URL,
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
}

// create ajax success callback (named)
function ajaxSuccess(data) {
    // parse json
    const joke = data.value;

    // put joke in output div
    $("#output").html(joke);
}