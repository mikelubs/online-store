$(document).ready(function() {
   $("#blanks form").submit(function(event) {
     var firstnameInput = $("input#firstname").val();
     var lastnameInput = $("input#lastname").val();
     var streetnameInput= $("input#streetname").val();
     var buildingnameInput = $("input#buildingname").val();
     var floornumberInput = $("input#floornumber").val();
     var roomnumberInput = $("input#roomnumber").val();
     var food1Input = $("input:radio[name=food1]:checked").val();
     var food2Input = $("input:radio[name=food2]:checked").val();
     var food3Input = $("input:radio[name=food3]:checked").val();

     $(".firstname").text(firstnameInput);
     $(".lastname").text(lastnameInput);
     $(".streetname").text(streetnameInput);
     $(".buildingname").text(buildingnameInput);
     $(".floornumber").text(floornumberInput);
     $(".roomnumber").text(roomnumberInput);
     $(".foodtype1").text(food1Input);
     $(".foodtype2").text(food2Input);
     $(".foodtype3").text(food3Input);

     $(".hid1").fadeOut();
     $(".hid2").fadeIn();
     $("#thankyou").show();
     $("#receipt").show();
     $(".radio").slideUp();
     $("#blanks").slideUp();


     event.preventDefault();
   });
 });
