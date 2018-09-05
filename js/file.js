$(document).ready(function(){
  

   $('.dropdown-trigger').dropdown();

     $('.sidenav').sidenav({
      menuWidth: 170, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );

  $('select').formSelect();

   $('input.autocomplete').autocomplete({
      data: {
        "North-Gate": null,
        "north-gate":null,
        "south-gate":null,
        "South-Gate":null,
        "west-gate": null,
        "apatapiti": 'apartment.html'
      },
    });
   $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
       
     $('.materialboxed').materialbox();
      $('.modal').modal();

  });
 function showBTN(){
 	document.querySelector(".subscribe").style.display = "block";
 document.querySelector("#sub").style.display = "none";
 }

