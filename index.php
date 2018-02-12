<!DOCTYPE html>
<!-- Doctype declaration -->
<html>
    <head>
        <meta name="viewport" content = "width = device-width, initial-scale = 1.0"/>
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel ="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
        <title>Sellanda Kollo</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Sellanda Kollo</h1>
                    <p>Score : <span id = "score">0</span> &nbsp &nbsp Enemy Health: <span id="enemy-health">10</span></p>
                    <p></p>
                    <div id="background">
                        <div id="megaman">
                            <img src="img/megaman.png">
                        </div>
                        <div id="level">
                            <img src="img/background.png">
                        </div>
                        <div id="enemy-shot"></div>
                        <img src="img/enemy.gif" id="enemy">

                        </div>
                    </img>
                </div>
            </div>
        </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/game-controller.js"></script>
    </body>
</html>