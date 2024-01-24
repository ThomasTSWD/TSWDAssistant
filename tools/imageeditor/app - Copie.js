jQuery(document).ready(function ($) {
//-----------------

//$('head').append('<style data-styled="" data-styled-version="4.2.0"></style>')

$('head').append('<meta charset="UTF-8">');




//-------------

$('#modify').hide();

	      function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image_upload_preview').attr('src', e.target.result);
                $('#wrapper').css('background', 'linear-gradient(to bottom, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)),url(' + e.target.result + ')')
                $('#image_upload_preview').css('filter', 'brightness(0.7)');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#inputFile").change(function () {
        readURL(this);
        $('#modify').show();
    });

$('#modify').click(function(){
  var newUrl = $('#image_upload_preview').attr('src');
        console.log(newUrl)
  const ImageEditor = new FilerobotImageEditor();
 ImageEditor.open(newUrl);


})

//-----------

dropContainer.ondragover = dropContainer.ondragenter = function(evt) {

	$('#dropContainer').css('background','rgba(213, 78, 33, 0.26)');
  evt.preventDefault();

};
dropContainer.ondragleave = dropContainer.ondragleave = function(evt) {
	$('#dropContainer').css('background','transparent');
  evt.preventDefault();
};

dropContainer.ondrop = function(evt) {
  // pretty simple -- but not for IE :(
  inputFile.files = evt.dataTransfer.files;
  readURL(inputFile);
          $('#modify').show();
	$('#dropContainer').css('background','transparent');
  evt.preventDefault();

};
//-----------TRADUCTION-----------
setInterval(function(){  
  $(".sc-bxivhb:contains('effects'), .sc-eNQAEJ:contains('effects')").text("Effets");
  $(".sc-bxivhb:contains('resize'),.sc-eNQAEJ:contains('resize')").text("Redimmensionner");
    $(".sc-bxivhb:contains('crop'),.sc-eNQAEJ:contains('crop')").text("Recouper");

  $(".sc-bxivhb:contains('filters'),.sc-eNQAEJ:contains('filters') ").text("Filtres");

  $(".sc-fBuWsC:contains('Rotate')").text("Rotation");
  $(".sc-csuQGl:contains('square')").text("carré");



  $("button:contains('APPLY')").text("Appliquer");
  $("button:contains('Cancel')").text("Annuler");
  $("label:contains('width')").text("Largeur");
  $("label:contains('height')").text("Hauteur");

  $("button:contains('DOWNLOAD')").text("Sauvegarder");

}, 600);
//-----------------jq
});
