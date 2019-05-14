function addStyleString2(str, str2) {
    if (document.getElementsByClassName(str2)[0]) {
        document.getElementsByClassName(str2)[0].remove();
    } else {
        var node = document.createElement('style');
        node.innerHTML = str;
        node.className = str2;
        document.body.appendChild(node);
    }
}

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

if (getCookie("images_changed") == "true") {
    var no2 = getCookie("game2");
    var no4 = getCookie("game4");
    var no8 = getCookie("game8");
    var no16 = getCookie("game16");
    var no32 = getCookie("game32");
    var no64 = getCookie("game64");
    var no128 = getCookie("game128")
    var no256 = getCookie("game256")
    var no512 = getCookie("game512");
    var no1024 = getCookie("game1024");
    var no2048 = getCookie("game2048");
    addStyleString('  .tile.tile-2 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2 + '}');
    addStyleString('  .tile.tile-4 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no4 + '}');
    addStyleString('  .tile.tile-8 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no8 + '}');
    addStyleString('  .tile.tile-16 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no16 + '}');
    addStyleString('  .tile.tile-32 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no32 + '}');
    addStyleString('  .tile.tile-64 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no64 + '}');
    addStyleString('  .tile.tile-128 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no128 + '}');
    addStyleString('  .tile.tile-256 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no256 + '}');
    addStyleString('  .tile.tile-512 .tile-inner { background: unset; background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no512 + '}');
    addStyleString('  .tile.tile-1024 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no1024 + '}');
    addStyleString('  .tile.tile-2048 .tile-inner { background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2048 + '}');
}

var value1 = "false";
document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].addEventListener("click", function() {
    if (value1 == "false") {
        addStyleString2('  #firebaseui-auth-container { display: inline-block; } ', 'class1');
        addStyleString2('  #firebaseui-auth2 { display: flex; } ', 'class2');
        addStyleString2(' #loader { display: inline-block; } ', 'class3');
        document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].innerText = "Close";
        value1 = "true";
    } else {
        if (value1 == "true") {
            document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].innerText = "Login";
            addStyleString2('  #firebaseui-auth-container { display: none; } ', 'class1');
            addStyleString2('  #firebaseui-auth2 { display: none; } ', 'class2');
            addStyleString2(' #loader { display: none; } ', 'class3');
            value1 = "false";
        }
    }
});

window.onload = function() {
    document.body.getElementsByClassName("go")[0].addEventListener("click", function cookkies() {
        var game2input = document.getElementsByClassName("input2")[0].value;
        var game4input = document.getElementsByClassName("input4")[0].value;
        var game8input = document.getElementsByClassName("input8")[0].value;
        var game16input = document.getElementsByClassName("input16")[0].value;
        var game32input = document.getElementsByClassName("input32")[0].value;
        var game64input = document.getElementsByClassName("input64")[0].value;
        var game128input = document.getElementsByClassName("input128")[0].value;
        var game256input = document.getElementsByClassName("input256")[0].value;
        var game512input = document.getElementsByClassName("input512")[0].value;
        var game1024input = document.getElementsByClassName("input1024")[0].value;
        var game2048input = document.getElementsByClassName("input2048")[0].value;
        document.cookie = 'game2=' + game2input + '"';
        document.cookie = 'game4=' + game4input + '"';
        document.cookie = 'game8=' + game8input + '"';
        document.cookie = 'game16=' + game16input + '"';
        document.cookie = 'game32=' + game32input + '"';
        document.cookie = 'game64=' + game64input + '"';
        document.cookie = 'game128=' + game128input + '"';
        document.cookie = 'game256=' + game256input + '"';
        document.cookie = 'game512=' + game512input + '"';
        document.cookie = 'game1024=' + game1024input + '"';
        document.cookie = 'game2048=' + game2048input + '"';
        document.cookie = 'images_changed=true';
    })
};


auth.getRedirectResult().then(function(result) {
    console.log("Get redirect result function succesfully called.");
    if (result) {
        console.log(result); 
    }
    if (result.user) {
        console.log(result.user);
    }
    if (result.user) {
        if (result.user.displayName) {
            var name = firebaseui.auth().currentUser.displayName;
            document.getElementByClassName("profile-desc")[0].innerText = name;
        }

        if (result.user.photoURL) {
            var photo = firebase.auth().currentUser.photoURL;
            addStyleString2('  .profile-photo { background-image: url("' + photo + '}', 'class6');
        }
        addStyleString2('  #firebaseui-auth-container { display: none; } ', 'class1');
        addStyleString2('  #firebaseui-auth2 { display: none; } ', 'class2');
        addStyleString2(' #loader { display: none; } ', 'class3');
        addStyleString2('  .restart-button3 { display: inline-block; } ', 'class4');
        addStyleString2('  .restart-button2 { display: none; } ', 'class5');
        document.getElementById("container-above-game2").getElementsByClassName("restart-button3")[0].addEventListener("click", function() {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
                console.log("Sign out failed.");
            });
            addStyleString2('  .restart-button2 { display: inline-block; } ', 'class5');
            addStyleString2(' .restart-button3 { display: none; } ', 'class4');
        });
    } 
    else {
    // No user is signed in.
    console.log("No user detected. ELSE");
    }
});
