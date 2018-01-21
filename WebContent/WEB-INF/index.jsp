<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
    <title>Le Juste Prix</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/jeux.js"></script>

</head>

<body>

    <header class="conteneur">
        <div class="bloc">
            <img class="logo" alt="logo" src="img/logo.png">
            <input id="Btn_Start" type="button" value="Nouvelle Partie" />
        </div>
        <div class="bloc">
            <img class="objet" alt="objet" src="img/modele.png">
        </div>
    </header>

    <section id="champ">
        <input type="text" name="numberIn">

        <input id="Btn_chk" type="button" value="Envoyer" />
    </section>

    <section id="reponse">
        <div class="conteneur">
            <div class="bloc2">
                <img class="moins" src="img/moins2.png">
            </div>
            <div class="bloc2">
                <img class="plus" src="img/plus2.png">
            </div>
        </div>
    </section>

    <section id="gagne">
        <img class="gagne" src="img/gagne.png">
    </section>


</body>

</html>
