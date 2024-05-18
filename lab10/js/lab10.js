function getName() {
    var name = prompt ("Please tell me your name:")

    $('#title').html('Hello, '+ name);

    $("#output").html('<div class="text><p><b>'+ "Nice to meet you, " + name + '!' +'</b></p></div>');

}
