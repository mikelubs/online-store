$(document).ready(function() {
   $("#blanks form").submit(function(event) {
     var firstnameInput = $("input#firstname").val();
     var lastnameInput = $("input#lastname").val();
     var streetnameInput= $("input#streetname").val();
     var buildingnameInput = $("input#buildingname").val();
     var floornumberInput = $("input#floornumber").val();
     var roomnumberInput = $("input#roomnumber").val();

     $(".firstname").text(firstnameInput);
     $(".lastname").text(lastnameInput);
     $(".streetname").text(streetnameInput);
     $(".buildingname").text(buildingnameInput);
     $(".floornumber").text(floornumberInput);
     $(".roomnumber").text(roomnumberInput);

     $("#thankyou").show();
     $("#receipt").show();
     $("#blanks").slideUp();


     event.preventDefault();
   });
 });
