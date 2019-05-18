var gS, bS, uuid, uDS, gameStat, bestScor, user, userDB;
if (firebase.auth().currentUser) {
    user = firebase.auth().currentUser;
    var userId = firebase.auth().currentUser.uid;
}

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
if (localStorage.getItem('gameState')) {
    gameStat = localStorage.getItem('gameState');
}
if (localStorage.getItem('bestScore')) {
    bestScor = localStorage.getItem('bestScore');
}
// Subsequent queries will use persistence, if it was enabled successfully
function saveGame() {
    if (user) {
        uuid = user.uid;
        userDB.doc(uuid).set({
            gameState: gameStat,
            bestScore: bestScor
        });
    }
}

function continu(gS) {
    localStorage.setItem("gameState", gS)
    location.reload();
}

function startNew() {
    localStorage.removeItem("gameState");
    uDS = true;
}
if (uDS == true) {
    if (user) {
        uuid = user.uid;
        userDB.doc(uuid).set({
            gameState: gameStat
        });
    }
}

function getGame() {
    if (userDB.doc(uuid)) {
        if (firebase.database().ref('/users/' + userId).once('gameState')) {
            gS = firebase.database().ref('/users/' + userId).once('gameState');
            if (!firebase.database().ref('/users/' + userId).once('gameState') == gameStat) {
                document.getElementsByClassName("start-new-button").addEventListener("click", startNew());
                document.getElementsByClassName("start-new-button").addEventListener("click", continu(gS));
                addStyleString('  .start-new-button {display: inline-block;} ');
                addStyleString('  .restore-message {display: inline-block;} ');
                addStyleString('  .restore-hide {display: inline-block;} ');
                addStyleString('  .continue-button {display: inline-block;} ');
            }
        } else {}
        if (firebase.database().ref('/users/' + userId).once('bestScore')) {
            bS = firebase.database().ref('/users/' + userId).once('bestScore');
            getElementsByClassName("best-container")[0].innerHTML = bS;
        }
        console.log(gS);
        console.log(bS);
    } else {
        userDB.doc(uuid).add({
            gameState: gameStat,
            bestScore: bestScor
        });
    }
}

document.getElementsByClassName("save-button")[0].addEventListener("click", saveGame());

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

var saveGame = null;
var value1 = "false";

function reLoad() {
    setTimeout(function() {
        location.reload();
    }, 1000);
}
document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].addEventListener("click", function() {
    if (value1 == "false") {
        addStyleString2('  #firebaseui-auth-container { display: inline-block; } ', 'class1');
        addStyleString2('  #firebaseui-auth2 { display: flex; } ', 'class2');
        addStyleString2(' #loader { display: inline-block; } ', 'class3');
        document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].innerText = "Close";
        addStyleString('  .login-hide {display: inline-block;} ');
        addStyleString('  .paused-button {display: inline-block;} ');
        addStyleString('  .lower-hide {display: inline-block;} ');
        saveGame = localStorage.getItem("gameState");
        value1 = "true";
    } else {
        if (value1 == "true") {
            document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].innerText = "Login";
            localStorage.setItem("gameState", saveGame);
            addStyleString2('  #firebaseui-auth-container { display: none; } ', 'class1');
            addStyleString2('  #firebaseui-auth2 { display: none; } ', 'class2');
            addStyleString2(' #loader { display: none; } ', 'class3');
            addStyleString('  .login-hide {display: none;} ');
            addStyleString('  .paused-button {display: none;} ');
            addStyleString('  .lower-hide {display: none;} ');
            reLoad();
            value1 = "false";

        }
    }
});

document.getElementsByClassName("unpause")[0].addEventListener("click", function() {
    if (value1 == "true") {
        document.getElementById("container-above-game2").getElementsByClassName("restart-button2")[0].innerText = "Login";
        localStorage.setItem("gameState", saveGame);
        addStyleString2('  #firebaseui-auth-container { display: none; } ', 'class1');
        addStyleString2('  #firebaseui-auth2 { display: none; } ', 'class2');
        addStyleString2(' #loader { display: none; } ', 'class3');
        addStyleString('  .login-hide {display: none;} ');
        addStyleString('  .paused-button {display: none;} ');
        addStyleString('  .lower-hide {display: none;} ');
        reLoad();
        value1 = "false";
    }
});

var modkey = false;
document.addEventListener("keydown", function key3(event) {
    if (event.key == "Control" || event.key == "Alt" || event.key == "Shift") {
        modkey = true;
    }
});
document.addEventListener("keyup", function key2(event) {
    if (event.key == "Control" || event.key == "Alt" || event.key == "Shift") {
        modkey = false;
    }
});
document.addEventListener("keydown", function key(event) {
    var modkey = false;
    var inputval = document.activeElement.value;
    if (!event.ctrlKey || !event.altKey || !event.metaKey || !event.shiftKey) {
        if (modkey == false) {
            if (event.key == "a") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "a";
                }
            }
            if (event.key == "w") {
                if (document.activeElement.tagName === "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "w";
                }
            }
            if (event.key == "s") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "s";
                }
            }
            if (event.key == "d") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "d";
                }
            }
            if (event.key == "r") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "r";
                }
            }
            if (event.key == "h") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "h";
                }
            }
            if (event.key == "j") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "j";
                }
            }
            if (event.key == "l") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "l";
                }
            }
            if (event.key == "k") {
                if (document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "INPUT") {
                    document.activeElement.value = inputval + "k";
                }
            }
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

firebase.auth().onAuthStateChanged(function(user) {
    console.log("Get redirect result function succesfully called.");
    if (firebase.auth().currentUser) {
        console.log(firebase.auth().currentUser);
    }

    if (firebase.auth().currentUser) {
        localStorage.setItem('signin', 'true');
        if (firebase.auth().currentUser.displayName) {
            localStorage.setItem('displayName', firebase.auth().currentUser.displayName);
            localStorage.setItem('displayNameExists', 'true');
            document.getElementsByClassName("profile-desc")[0].innerText = firebase.auth().currentUser.displayName;
        } else {
            localStorage.setItem('displayNameExists', 'false');
        }
        if (firebase.auth().currentUser.photoURL) {
            localStorage.setItem('photoURLExists', 'true');
            localStorage.setItem('photoURL', firebase.auth().currentUser.photoURL);
            addStyleString('  .profile-picture { background-image: url("' + firebase.auth().currentUser.photoURL + '}', 'class6');
        } else {
            localStorage.setItem('photoURLExists', 'false');
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
            localStorage.removeItem('photoURLExists');
            localStorage.removeItem('displayNameExists');
            localStorage.removeItem('displayName');
            localStorage.removeItem('photoURL');
            localStorage.removeItem('signin');
            location.reload();

        });
    } else {
        // No user is signed in.
        console.log("No user detected. Else Statement");
    }
});

window.onload = setTimeout(function() {
    if (firebase.auth().currentUser.uid) {
        getGame();
    }
}, 1000);
