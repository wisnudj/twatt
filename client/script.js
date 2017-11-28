$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/api/twatt/usertimeline',
    method: 'GET',
    dataType: 'JSON',
    success: function(response) {
      response.forEach((elemen) => {
        $("#twit").append(
          `
          <img src="${elemen.user.profile_image_url}" alt="">
          <p>${elemen.user.name}</p>
          <p>${elemen.user.screen_name}</p>
          <p>${elemen.user.description}</p>
          <p>${elemen.text}</p>
          `
        )
      })
      console.log(response);
    }
  })

  $('#post').click(function() {
    $.post("http://localhost:3000/api/twatt/post",
    {
        status: $('textarea#twet').val()
    },
    function(data, status){
        console.log(data);
        location.reload()
    });
  })

})
