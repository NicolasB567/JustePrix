     $(document).ready(function () {
         $("#Btn_Start").on('click', function () {
             $("#Btn_Start").css("display", "none");
             $("#champ").css("display", "block");
             $(".block").css("display", "block");

             let nb = (Math.floor((100) * Math.random() + 1));
             console.log(nb);
             
          

             $("#Btn_chk").on('click', function () {
                 $(".moins").css("display", "none");
                 $(".plus").css("display", "none");
                 var saisie = $('input[name=numberIn]').val();
                 console.log(saisie);

                 if (saisie > nb) {
                     console.log(saisie);
                     $(".moins").css("display", "block");
                 } else if (saisie < nb) {
                     console.log(saisie);
                     $(".plus").css("display", "block");
                 } else {
                     $("#gagne").css("display", "block");
                 }



                 window.addEventListener("load", function () {
                     document.getElementById("NewGame").addEventListener("click", test);
                 });
             });
         });

     });
