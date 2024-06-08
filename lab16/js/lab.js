// Author: Yifeng Huang
// Date: 6/7/24
// Created while learning from example in class 


const URL = "https://xkcd.com/info.0.json";

// create a button listener
$("#my-button").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(ajaxObj);
})

// setup ajax object
const ajaxObj = {
  url: URL,
  data: { 
    id: 123,
    api_key: "blahblahblah",
  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

// create ajax success callback (named)
function ajaxSuccess(data) {
   console.log("Data:", data);
  // parse json
  const title = data.title;
  const alt = data.alt;
  const imageURL = data.img;

  // put stuff in output div
  $("#output").html(title);
  $("#output").append("<img src='" + imageURL + "' />")
  $("#output").append("<p>" + alt);
  }


// create ajax error callback
function ajaxError(request,error){
	  console.log("Oops:", error);
}
