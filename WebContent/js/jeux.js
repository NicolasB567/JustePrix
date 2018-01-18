     $(document).ready(function () {
         function test() {
             var saisie = $('input[name=numberIn]').val();
             console.log(saisie);

             let nb = (Math.floor((100) * Math.random() + 1));
             console.log(nb);
             //             do {
             //                
             //                 // var saisie = prompt("Entrez un chiffre");
             //
             //                 if (saisie > nb) {
             //                     console.log(saisie);
             //                     //alert("C' est moins");
             //                     saisie;
             //                 } else if (saisie < nb) {
             //                     //    console.log(saisie);
             //                     // alert("C' est plus");
             //                     saisie;
             //                 }
             //             } while (saisie != nb);

             // alert("BINGOOOOOOOOOOOOOO");
         }
         window.addEventListener("load", function () {
             document.getElementById("NewGame").addEventListener("click", test);
         });


     });
