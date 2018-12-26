$(document).ready(() => {

  // Refresh image thumbnail on picture page with user-selected image 
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
  //-----------------------------//

  // Display a modal when user tries to translate or save to library without having signed in 
  $('button.signed-in-false').click(function () {
    $('.modal').show()
  })
  //-----------------//

  // On the library page, delete an image when its trash icon is clicked
  $("i.fa-trash-alt").click(function () {
    let itemId = this.parentElement.id;
    $.get("/db/delete/" + itemId, function () {
      location.reload()
    });
  })

})
