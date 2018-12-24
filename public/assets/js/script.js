$(document).ready(() => {

  // IMAGE THUMBNAIL STUFF 
  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#selected-image').attr('src', e.target.result);
        $('button.upload').attr('style', "display: block; margin-top: 15px")
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });

  $('button.signed-in-false').click(function () {
    $('.modal').show()
  })

  /*----------------------------------------------------------------------------------*/

  /* LIBRARY PAGE STUFF */
  $("i.fa-trash-alt").click(function () {
    let itemId = this.parentElement.id;
    $.get("/db/delete/" + itemId, function () {
      location.reload()
    });
  })

})
