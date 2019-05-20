var gS, bS, uDS, gameStat, bestScor, user, check0, gscheck, bscheck, userId, gameNumberAdd, gameNumberAdd2, no, version, added;
var game2048input, game1024input, game512input, game256input, game128input, game64input, game32input, game16input, game8input, game4input, game2input;
db.collection("users").doc("version").get().then(function(doc) {
    if (doc.exists) {
        version = doc.data().version;
    }
});
if (firebase.auth().currentUser) {
    user = firebase.auth().currentUser + version;
    userId = firebase.auth().currentUser.uid;
}

function reLoad(time) {
    setTimeout(function(time) {
        location.reload();
    }, time);
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
    document.getElementsByClassName("save-button")[0].addEventListener("click", saveGame());
function saveGame() {
    if (userId) {
        db.collection("users").doc(user).add({
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
    if (userId) {
        db.collection("users").doc(user).get().then(function(doc) {
            if (doc.exists) {
                db.collection("users").doc(user).update({
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
    gscheck = null;
    bscheck = null;
    if (db.collection("users").doc(user).get().then(function(doc) {
            if (doc.exists) {
                return true;
            }
        })) {
        check0 = true;
    }
    if (check0 == true) {
        db.collection("users").doc(user).get().then(function(doc) {
            if (doc.data().gameState) {
                if (doc.data().gameState !== gameStat) {
                    gS = doc.data().gameState;
                    gscheck = true;
                } else {
                    gscheck = false;
                }
            }
        });
        if (gscheck == true) {
            addStyleString('  .start-new-button {display: inline-block;} ');
            addStyleString('  .restore-message {display: inline-block;} ');
            addStyleString('  .restore-hide {display: inline-block;} ');
            addStyleString('  .continue-button {display: inline-block;} ');
            document.getElementsByClassName("start-new-button")[0].addEventListener("click", startNew());
            document.getElementsByClassName("continue-button")[0].addEventListener("click", continu(gS));
        }
        db.collection("users").doc(user).get().then(function(doc) {
            if (doc.data().bestScore) {
                if (doc.data().bestScore !== bestScor) {
                    bS = doc.data().bestScore;
                    bscheck = true;
                } else {
                    bscheck = false;
                }
            }
        });
        if (bscheck == true) {
            document.getElementsByClassName("best-container")[0].innerHTML = bS;
        }
    } else {
        db.collection("users").doc(user).update({
            gameState: gameStat,
            bestScore: bestScor
        });
    }
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
}

var saveGame = null;
var value1 = "false";
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
            reLoad("500");
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
        reLoad("500");
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
        console.log("No user detected.");
    }
});

window.onload = setTimeout(function() {
    if (userId) {
        db.collection("users").doc(user).get().then(function(doc) {
            if (!doc.exists) {
                db.collection("users").doc(user).set({
                    a1: null,
                    b1: null,
                    c1: null,
                    d1: null,
                    e1: null,
                    f1: null,
                    g1: null,
                    h1: null,
                    i1: null,
                    j1: null,
                    k1: null,
                    a2: null,
                    b2: null,
                    c2: null,
                    d2: null,
                    e2: null,
                    f2: null,
                    g2: null,
                    h2: null,
                    i2: null,
                    j2: null,
                    k2: null,
                    a3: null,
                    b3: null,
                    c3: null,
                    d3: null,
                    e3: null,
                    f3: null,
                    g3: null,
                    h3: null,
                    i3: null,
                    j3: null,
                    k3: null,
                    a4: null,
                    b4: null,
                    c4: null,
                    d4: null,
                    e4: null,
                    f4: null,
                    g4: null,
                    h4: null,
                    i4: null,
                    j4: null,
                    k4: null,
                    a5: null,
                    b5: null,
                    c5: null,
                    d5: null,
                    e5: null,
                    f5: null,
                    g5: null,
                    h5: null,
                    i5: null,
                    j5: null,
                    k5: null,
                    a6: null,
                    b6: null,
                    c6: null,
                    d6: null,
                    e6: null,
                    f6: null,
                    g6: null,
                    h6: null,
                    i6: null,
                    j6: null,
                    k6: null,
                    a7: null,
                    b7: null,
                    c7: null,
                    d7: null,
                    e7: null,
                    f7: null,
                    g7: null,
                    h7: null,
                    i7: null,
                    j7: null,
                    k7: null,
                    a8: null,
                    b8: null,
                    c8: null,
                    d8: null,
                    e8: null,
                    f8: null,
                    g8: null,
                    h8: null,
                    i8: null,
                    j8: null,
                    k8: null,
                    a9: null,
                    b9: null,
                    c9: null,
                    d9: null,
                    e9: null,
                    f9: null,
                    g9: null,
                    h9: null,
                    i9: null,
                    j9: null,
                    k9: null,
                    a10: null,
                    b10: null,
                    c10: null,
                    d10: null,
                    e10: null,
                    f10: null,
                    g10: null,
                    h10: null,
                    i10: null,
                    j10: null,
                    k10: null,
                    a11: null,
                    b11: null,
                    c11: null,
                    d11: null,
                    e11: null,
                    f11: null,
                    g11: null,
                    h11: null,
                    i11: null,
                    j11: null,
                    k11: null,
                    gameNumber: 1,
                    bestScore: null,
                    gameState: null
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
                gameNumberAdd2 = gameNumberAdd++;
                while (no < 11, no++) {
                    if (gameNumberAdd == no) {
                        var ne1024 = gameNumberAdd + "k";
                        var ne512 = gameNumberAdd + "i";
                        var ne256 = gameNumberAdd + "h";
                        var ne128 = gameNumberAdd + "g";
                        var ne64 = gameNumberAdd + "f";
                        var ne32 = gameNumberAdd + "e";
                        var ne16 = gameNumberAdd + "d";
                        var ne8 = gameNumberAdd + "c";
                        var ne4 = gameNumberAdd + "b";
                        var ne2 = gameNumberAdd + "a";
                        db.collection("users").doc(user).update({
                            ne2: game2048input,
                            ne4: game1024input,
                            ne8: game512input,
                            ne16: game256input,
                            ne32: game128input,
                            ne64: game64input,
                            ne128: game32input,
                            ne256: game16input,
                            ne512: game8input,
                            ne1024: game4input,
                            ne2048: game2input,
                            gn: gameNumberAdd2
                        });
                    }
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
                        var ne1024 = "k" + gameNumberAdd;
                        var ne512 = "i" + gameNumberAdd;
                        var ne256 = "h" + gameNumberAdd;
                        var ne128 = "g" + gameNumberAdd;
                        var ne64 = "f" + gameNumberAdd;
                        var ne32 = "e" + gameNumberAdd;
                        var ne16 = "d" + gameNumberAdd;
                        var ne8 = "c" + gameNumberAdd;
                        var ne4 = "b" + gameNumberAdd;
                        var ne2 = "a" + gameNumberAdd;
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
                    reLoad("900");
                });
            }
        } else {
            window.alert("You already have 10 saved games. You can purchase more in the future, but for now this is the limit.");
        }
    });
}
