var gS, bS, uuid, uDS, gameStat, bestScor, user, userDB, check0, chec1, check2, userId, added, gameNumberAdd,gameNumberAdd2;
var game2048input, game1024input, game512input, game256input, game128input, game64input, game32input, game16input, game8input, game4input, game2input;
if (firebase.auth().currentUser) {
    user = firebase.auth().currentUser;
    userId = firebase.auth().currentUser.uid;
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
        db.collection("users").doc(firebase.auth().currentUser.uid).add({
            gameState: gameStat,
            bestScore: bestScor
        });
    }
}

function continu(gS) {
    if (added = true) {
        localStorage.setItem("gameState", gS)
        location.reload();
    }
}

function startNew() {
    localStorage.removeItem("gameState");
    uDS = true;
}
if (uDS == true) {
    if (user) {
        uuid = user.uid;
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
            if (doc.exists) {
                db.collection("users").doc(firebase.auth().currentUser.uid).update({
                    gameState: gameStat
                });
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

function getGame() {
    check0 = null;
    chec1 = null;
    check2 = null;
    userId = firebase.auth().currentUser.uid;
    if (db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
            if (doc.exists) {
                return true;
            }
        })) {
        check0 = true;
    }
    if (check0 == true) {
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
            if (doc.data().gameState) {
                if (doc.data().gameState !== gameStat) {
                    gS = doc.data().gameState;
                    chec1 = true;
                } else {
                    chec1 = false;
                }
            }
        });
        if (chec1 == true) {
            addStyleString('  .start-new-button {display: inline-block;} ');
            addStyleString('  .restore-message {display: inline-block;} ');
            addStyleString('  .restore-hide {display: inline-block;} ');
            addStyleString('  .continue-button {display: inline-block;} ');
            document.getElementsByClassName("start-new-button")[0].addEventListener("click", startNew());
            document.getElementsByClassName("continue-button")[0].addEventListener("click", continu(gS));
            added = true;
        }
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
            if (doc.data().bestScore) {
                if (doc.data().bestScore !== bestScor) {
                    bS = doc.data().bestScore;
                    check2 = true;
                } else {
                    check2 = false;
                }
            }
        });
        if (check2 == true) {
            document.getElementsByClassName("best-container")[0].innerHTML = bS;
        }
    } else {
        db.collection("users").doc(firebase.auth().currentUser.uid).update({
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
    addStyleString('  .tile.tile-2 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2 + '"); }');
    addStyleString('  .tile.tile-4 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no4 + '"); }');
    addStyleString('  .tile.tile-8 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no8 + '"); }');
    addStyleString('  .tile.tile-16 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no16 + '"); }');
    addStyleString('  .tile.tile-32 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no32 + '"); }');
    addStyleString('  .tile.tile-64 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no64 + '"); }');
    addStyleString('  .tile.tile-128 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no128 + '"); }');
    addStyleString('  .tile.tile-256 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no256 + '"); }');
    addStyleString('  .tile.tile-512 .tile-inner { background: unset; background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no512 + '"); }');
    addStyleString('  .tile.tile-1024 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no1024 + '"); }');
    addStyleString('  .tile.tile-2048 .tile-inner { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2048 + '"); }');
    reLoad(900);
}

var saveGame = null;
var value1 = "false";

function reLoad(time) {
    setTimeout(function() {
        location.reload();
}, time);
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
            reLoad(500);
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
        reLoad(500);
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
document.body.getElementsByClassName("go")[0].addEventListener("click", function cookkies() {
    game2input = document.getElementsByClassName("input2")[0].value;
    game4input = document.getElementsByClassName("input4")[0].value;
    game8input = document.getElementsByClassName("input8")[0].value;
    game16input = document.getElementsByClassName("input16")[0].value;
    game32input = document.getElementsByClassName("input32")[0].value;
    game64input = document.getElementsByClassName("input64")[0].value;
    game128input = document.getElementsByClassName("input128")[0].value;
    game256input = document.getElementsByClassName("input256")[0].value;
    game512input = document.getElementsByClassName("input512")[0].value;
    game1024input = document.getElementsByClassName("input1024")[0].value;
    game2048input = document.getElementsByClassName("input2048")[0].value;
    document.cookie = "game2=" + game2input;
    document.cookie = "game4=" + game4input;
    document.cookie = "game8=" + game8input;
    document.cookie = "game16=" + game16input;
    document.cookie = "game32=" + game32input;
    document.cookie = "game64=" + game64input;
    document.cookie = "game128=" + game128input;
    document.cookie = "game256=" + game256input;
    document.cookie = "game512=" + game512input;
    document.cookie = "game1024=" + game1024input;
    document.cookie = "game2048=" + game2048input;
    document.cookie = 'images_changed=true';
    saveCloud();
})

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
            addStyleString('  .profile-picture { background-image: url("' + firebase.auth().currentUser.photoURL + '"); }');
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
db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (!doc.exists) {
        db.collection("users").doc(firebase.auth().currentUser.uid).set({
            no1no2: null,
            no1no1024: null,
            no1no512: null,
            no1no256: null,
            no1no128: null,
            no1no64: null,
            no1no32: null,
            no1no16: null,
            no1no8: null,
            no1no4: null,
            no1no2: null,
            no2no2: null,
            no2no1024: null,
            no2no512: null,
            no2no256: null,
            no2no128: null,
            no2no64: null,
            no2no32: null,
            no2no16: null,
            no2no8: null,
            no2no4: null,
            no2no2: null,
            no3no2: null,
            no3no1024: null,
            no3no512: null,
            no3no256: null,
            no3no128: null,
            no3no64: null,
            no3no32: null,
            no3no16: null,
            no3no8: null,
            no3no4: null,
            no3no2: null,
            no4no2: null,
            no4no1024: null,
            no4no512: null,
            no4no256: null,
            no4no128: null,
            no4no64: null,
            no4no32: null,
            no4no16: null,
            no4no8: null,
            no4no4: null,
            no4no2: null,
            no5no2: null,
            no5no1024: null,
            no5no512: null,
            no5no256: null,
            no5no128: null,
            no5no64: null,
            no5no32: null,
            no5no16: null,
            no5no8: null,
            no5no4: null,
            no5no2: null,
            no6no2: null,
            no6no1024: null,
            no6no512: null,
            no6no256: null,
            no6no128: null,
            no6no64: null,
            no6no32: null,
            no6no16: null,
            no6no8: null,
            no6no4: null,
            no6no2: null,
            no7no2: null,
            no7no1024: null,
            no7no512: null,
            no7no256: null,
            no7no128: null,
            no7no64: null,
            no7no32: null,
            no7no16: null,
            no7no8: null,
            no7no4: null,
            no7no2: null,
            no8no2: null,
            no8no1024: null,
            no8no512: null,
            no8no256: null,
            no8no128: null,
            no8no64: null,
            no8no32: null,
            no8no16: null,
            no8no8: null,
            no8no4: null,
            no8no2: null,
            no9no2: null,
            no9no1024: null,
            no9no512: null,
            no9no256: null,
            no9no128: null,
            no9no64: null,
            no9no32: null,
            no9no16: null,
            no9no8: null,
            no9no4: null,
            no9no2: null,
            no10no2: null,
            no10no1024: null,
            no10no512: null,
            no10no256: null,
            no10no128: null,
            no10no64: null,
            no10no32: null,
            no10no16: null,
            no10no8: null,
            no10no4: null,
            no10no2: null,
            no11no2: null,
            no11no1024: null,
            no11no512: null,
            no11no256: null,
            no11no128: null,
            no11no64: null,
            no11no32: null,
            no11no16: null,
            no11no8: null,
            no11no4: null,
            no11no2: null,
            gameNumber: 1,
            bestScore: null,
            gameState: null,
        });
    }
});

        getGame();
        loadSaves();
    }
}, 2000);

function saveCloud() {
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().gameNumber);
            if (doc.data().gameNumber) {
                            console.log(doc.data().gameNumber);
                var gameNumberSet = doc.data().gameNumber;
                console.log(gameNumberSet);
                gameNumberAdd = gameNumberSet++;
                console.log(gameNumberAdd);
                var new2048 = "no" + gameNumberAdd + "no2048";
                var new1024 = "no" + gameNumberAdd + "no1024";
                var new512 = "no" + gameNumberAdd + "no512";
                var new256 = "no" + gameNumberAdd + "no256";
                var new128 = "no" + gameNumberAdd + "no128";
                var new64 = "no" + gameNumberAdd + "no64";
                var new32 = "no" + gameNumberAdd + "no32";
                var new16 = "no" + gameNumberAdd + "no16";
                var new8 = "no" + gameNumberAdd + "no8";
                var new4 = "no" + gameNumberAdd + "no4";
                var new2 = "no" + gameNumberAdd + "no2";
                gameNumberAdd2 = gameNumberAdd++;
                if (gameNumberAdd == 1) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no1no2048: game2048input,
                        no1no1024: game1024input,
                        no1no512: game512input,
                        no1no256: game256input,
                        no1no128: game128input,
                        no1no64: game64input,
                        no1no32: game32input,
                        no1no16: game16input,
                        no1no8: game8input,
                        no1no4: game4input,
                        no1no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 2) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no2no2048: game2048input,
                        no2no1024: game1024input,
                        no2no512: game512input,
                        no2no256: game256input,
                        no2no128: game128input,
                        no2no64: game64input,
                        no2no32: game32input,
                        no2no16: game16input,
                        no2no8: game8input,
                        no2no4: game4input,
                        no2no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 3) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no3no2048: game2048input,
                        no3no1024: game1024input,
                        no3no512: game512input,
                        no3no256: game256input,
                        no3no128: game128input,
                        no3no64: game64input,
                        no3no32: game32input,
                        no3no16: game16input,
                        no3no8: game8input,
                        no3no4: game4input,
                        no3no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 4) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no4no2048: game2048input,
                        no4no1024: game1024input,
                        no4no512: game512input,
                        no4no256: game256input,
                        no4no128: game128input,
                        no4no64: game64input,
                        no4no32: game32input,
                        no4no16: game16input,
                        no4no8: game8input,
                        no4no4: game4input,
                        no4no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 5) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no5no2048: game2048input,
                        no5no1024: game1024input,
                        no5no512: game512input,
                        no5no256: game256input,
                        no5no128: game128input,
                        no5no64: game64input,
                        no5no32: game32input,
                        no5no16: game16input,
                        no5no8: game8input,
                        no5no3: game4input,
                        no5no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 6) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no6no2048: game2048input,
                        no6no1024: game1024input,
                        no6no512: game512input,
                        no6no256: game256input,
                        no6no128: game128input,
                        no6no64: game64input,
                        no6no32: game32input,
                        no6no16: game16input,
                        no6no8: game8input,
                        no6no4: game4input,
                        no6no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 7) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no7no2048: game2048input,
                        no7no1024: game1024input,
                        no7no512: game512input,
                        no7no256: game256input,
                        no7no128: game128input,
                        no7no64: game64input,
                        no7no32: game32input,
                        no7no16: game16input,
                        no7no8: game8input,
                        no7no4: game4input,
                        no7no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 8) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no8no2048: game2048input,
                        no8no1024: game1024input,
                        no8no512: game512input,
                        no8no256: game256input,
                        no8no128: game128input,
                        no8no64: game64input,
                        no8no32: game32input,
                        no8no16: game16input,
                        no8no8: game8input,
                        no8no4: game4input,
                        no8no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 9) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no9no2048: game2048input,
                        no9no1024: game1024input,
                        no9no512: game512input,
                        no9no256: game256input,
                        no9no128: game128input,
                        no9no64: game64input,
                        no9no32: game32input,
                        no9no16: game16input,
                        no9no9: game8input,
                        no9no4: game4input,
                        no9no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 10) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no10no2048: game2048input,
                        no10no1024: game1024input,
                        no10no512: game512input,
                        no10no256: game256input,
                        no10no128: game128input,
                        no10no64: game64input,
                        no10no32: game32input,
                        no10no16: game16input,
                        no10no8: game8input,
                        no10no4: game4input,
                        no10no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
                if (gameNumberAdd == 11) {
                    db.collection("users").doc(firebase.auth().currentUser.uid).update({
                        no11no2048: game2048input,
                        no11no1024: game1024input,
                        no11no512: game512input,
                        no11no256: game256input,
                        no11no128: game128input,
                        no11no64: game64input,
                        no11no32: game32input,
                        no11no16: game16input,
                        no11no8: game8input,
                        no11no4: game4input,
                        no11no2: game2input,
                        gameNumber: gameNumberAdd2
                    });
                }
            location.reload;
            }
        }
    });
}

function loadSaves() {
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
        if (!doc.data().gameNumber > 11) {
            while (doc.data().gameNumber >= 1, gameNumberAdd--) {
                var add = document.createElement("p");
                add.innerHTML = "Saved Game #" + gameNumberAdd;
                add.className = "game-button " + "game" + gameNumberAdd;
                document.getElementsByClassName("saved-games")[0].appendChild(add);
                document.getElementsByClassName("game" + gameNumberAdd)[0].addEventListener("click", function() {
                    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
                        var ne1024 = "no" + gameNumberAdd + "no1024";
                        var ne512 = "no" + gameNumberAdd + "no512";
                        var ne256 = "no" + gameNumberAdd + "no256";
                        var ne128 = "no" + gameNumberAdd + "no128";
                        var ne64 = "no" + gameNumberAdd + "no64";
                        var ne32 = "no" + gameNumberAdd + "no32";
                        var ne16 = "no" + gameNumberAdd + "no16";
                        var ne8 = "no" + gameNumberAdd + "no8";
                        var ne4 = "no" + gameNumberAdd + "no4";
                        var ne2 = "no" + gameNumberAdd + "no2";
                        var thing2 = doc.data().ne2;
                        var thing4 = doc.data().ne4;
                        var thing8 = doc.data().ne8;
                        var thing16 = doc.data().ne16;
                        var thing32 = doc.data().ne32;
                        var thing64 = doc.data().ne64;
                        var thing128 = doc.data().ne128;
                        var thing256 = doc.data().ne256;
                        var thing512 = doc.data().ne512;
                        var thing1024 = doc.data().ne1024;
                        var thing2048 = doc.data().ne2048;
                    });
                    document.cookie = "game2=" + thing2;
                    document.cookie = "game4=" + thing4;
                    document.cookie = "game8=" + thing8;
                    document.cookie = "game16=" + thing16;
                    document.cookie = "game32=" + thing32;
                    document.cookie = "game64=" + thing64;
                    document.cookie = "game128=" + thing128;
                    document.cookie = "game256=" + thing256;
                    document.cookie = "game512=" + thing512;
                    document.cookie = "game1024=" + thing1024;
                    document.cookie = "game2048=" + thing2048;
                    document.cookie = "images_changed=true";
                });
            }
        } else {
            window.alert("You already have 10 saved games. You can purchase more in the future, but for now this is the limit.");
        }
    });
}
