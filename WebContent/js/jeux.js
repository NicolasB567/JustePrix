     $(document).ready(function () {
         $("#Btn_Start").on('click', function () {
             $("#start").css("display", "none");
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
                     $(".moins1").css("display", "block");
                     $(".plus2").css("display", "block");
                     $(".plus1").css("display", "none");
                     $(".moins2").css("display", "none"); 
                 } else if (saisie < nb) {
                     console.log(saisie);
                     $(".plus1").css("display", "block");
                     $(".moins2").css("display", "block");
                     $(".moins1").css("display", "none");
                     $(".plus2").css("display", "none"); 
                 } else {
                	 $("#champ").css("display", "none");
                	 $(".plus1").css("display", "none");
                     $(".moins2").css("display", "none");
                     $(".moins1").css("display", "none");
                     $(".plus2").css("display", "none");
                     $("#gagne").css("display", "block");
                 }



                 window.addEventListener("load", function () {
                     document.getElementById("NewGame").addEventListener("click", test);
                 });
             });
         });

     });
