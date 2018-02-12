var i = 30;
var level = 1;
fire();
var score = 0;
var damage = 10;
var done = 0;

titleAudio = new Audio('audio/title.mp3');
titleAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
titleAudio.play();

gameOver = new Audio('audio/game-over.mp3');
kickOut();
$(window).keyup(function (ev) {
    // keys[ev.which] = true;

    // keys.indexOf(39) != -1;
    // var index = keys.indexOf(39);
    // console.log(index !== -1);
    if((ev.which === 39)||(ev.which === 32)||(ev.which === 38)){
        $("#megaman img").replaceWith("<img src='img/megaman.png'>")
        $("#megaman img").css("width", "110px");
        $("#megaman").css("top", "320px");
    }


});
$(window).keydown(function (ev) {
    console.log(ev.which);
    switch (ev.which){
        case 39: {
            $("#megaman img").replaceWith("<img src='img/megaman-run.gif'>");
            $("#megaman img").css("width", "80px");
            $("#megaman").css("top", "350px");
            if(i == 75){
                i = 30;
                if(level == 1){
                    $("#background #level img").replaceWith("<img src='img/background2.jpg'>");
                    $("#background").append("<div id='enemy-shot'></div>\n" +
                        "<img src='img/enemy.gif' id='enemy'>");
                    damage = 20;
                    $("#enemy-health").text(damage);
                    level++;
                }else if(level == 2){
                    $("#background #level img").replaceWith("<img src='img/background.png'>");
                    $("#background").append("<div id='enemy-shot'></div>\n" +
                        "<img src='img/enemy.gif' id='enemy'>");
                    damage = 30;
                    $("#enemy-health").text(damage);
                    $("#enemy").css("top", "270px");
                    $("#enemy-shot").css("top", "290px");
                    level++;
                }else if(level == 3){
                    $("#background #level img").replaceWith("<img src='img/background2.jpg'>");
                    $("#background").append("<div id='enemy-shot'></div>\n" +
                        "<img src='img/enemy.gif' id='enemy'>");
                    damage = 40;
                    $("#enemy-health").text(damage);
                    $("#enemy").css("top", "250px");
                    $("#enemy-shot").css("top", "270px");
                    level++;
                }else if(level == 4){
                    $("#background #level img").replaceWith("<img src='img/background.png'>");
                    $("#background").append("<div id='enemy-shot'></div>\n" +
                        "<img src='img/enemy.gif' id='enemy'>");
                    damage = 50;
                    $("#enemy-health").text(damage);
                    level++;
                    alert("You Won!"  + "\n" + "Your Score is: " + parseInt($("#score").text()));
                }

            }
            $("#megaman").css("left",i++ *10 + "px");
        } break;

        case 32: {
            $("#megaman img").replaceWith("<img src='img/Mega_Man_X_Charge_Blast.gif'>");
            $("#megaman img").css("width", "300px");

            var enemTop = $("#enemy").css("top");
            var enemTopLimit = 0;
            if(enemTop !== undefined){
                var enemTopNum = enemTop.substring(0, (enemTop.length - 2));
                enemTopLimit = parseInt(enemTopNum);
            }

            var megaTop = $("#megaman").css("top");
            var megaTopLimit = 0;
            if(megaTop !== undefined){
                var megaTopNum = megaTop.substring(0, (megaTop.length - 2));
                megaTopLimit = parseInt(megaTopNum);
            }

            if((megaTopLimit >= enemTopLimit-20) && (megaTopLimit <= enemTopLimit+20)){
                done += 10;
                console.log("done: " + done);
                console.log("damage: " + damage);
                if(done === damage){
                    setTimeout(function () {
                        var state = $("#enemy").css("display");
                        if(state === "block"){
                            score = parseInt($("#score").text());
                            var health = parseInt($("#enemy-health").text());

                            $("#score").text(score + done);
                            if(done > health){
                                $("#enemy-health").text("0");
                            }else {
                                $("#enemy-health").text(health - done);
                            }
                        }
                        $("#enemy").remove();
                        $("#enemy-shot").remove();
                        done = 0;
                    },300);
                }
            }

        } break;

        case 38: {
            $("#megaman").animate({
                top: "220px"
            }, 300);

            $("#megaman").animate({
                top: "320px"
            }, 300);


        } break;

        case 37:{
            $("#megaman").animate({
                transform : "rotateY(3.14rad)"
            }, 300);
        } break;


    }

});

function fire() {
    setInterval(function (e) {
        $("#enemy-shot").animate({
            left : "320px"
        },1500);

        $("#enemy-shot").animate({
            left : $("#enemy").css("left")
        },0);
    },500);
}

function kickOut() {
    setInterval(function (e) {
        var shotTop = $("#enemy-shot").css("top");
        var shotTopLimit = 0;
        if(shotTop !== undefined){
            var shotTopNum = shotTop.substring(0, (shotTop.length - 2));
            shotTopLimit = parseInt(shotTopNum);
        }

        var shotLeft = $("#enemy-shot").css("left");
        var shotLeftLimit = 0;
        if(shotLeft !== undefined){
            var shotLeftNum = shotLeft.substring(0, (shotLeft.length - 2));
            shotLeftLimit = parseInt(shotLeftNum);
        }

        var megaRight = $("#megaman").css("left");
        var megaRightLimit = 0;
        if(megaRight !== undefined){
            var megaRightNum = megaRight.substring(0, (megaRight.length - 2));
            megaRightLimit = parseInt(megaRightNum);
        }

        var megaTop = $("#megaman").css("top");
        var megaTopLimit = 0;
        if(megaTop !== undefined){
            var megaTopNum = megaTop.substring(0, (megaTop.length - 2));
            megaTopLimit = parseInt(megaTopNum) + 30;
        }
        if(((shotLeftLimit >= megaRightLimit-20) && (shotLeftLimit <= megaRightLimit+20)) && ((shotTopLimit >= megaTopLimit-20) && (shotTopLimit <= megaTopLimit+20))){
            $("#megaman").remove();
            var enemy = $("#enemy").html();
            if(enemy !== undefined){
                titleAudio.pause();
                titleAudio.currentTime = 0;
                gameOver.play();
                gameOver.currentTime = 0;
                alert("Game Over Punk!" + "\n" + "Your Score is: " + parseInt($("#score").text()));
                location.reload();
            }

            score = 0;
        }
    }, 20);
}


