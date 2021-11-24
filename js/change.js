var gameNumberAdd3, gameNumberAdd4, ready, gS, bS, uDS, gameStat, bestScor, user, check0, gscheck, bscheck, userId, gameNumberAdd, gameNumberAdd2, no, version, added;
var game2048input, game1024input, game512input, game256input, game128input, game64input, game32input, game16input, game8input, game4input, game2input;
var thing2048, thing1024, thing512, thing256, thing128, thing64, thing32, thing16, thing8, thing4, thing2, thingName, ngameNumberAdd3;

function readyCheck2() {
    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
        if (!doc.exists) {
            return readyCheck();
        }
        if (doc.exists) {
            if (!doc.data()) {
                return readyCheck();
            }
            if (doc.data()) {
                if (doc.data().test == true) {
                    getGame();
                    loadSaves();
                } else {
                    return readyCheck();
                }
            }
        }
    });
}

function readyCheck() {
    db.collection("users").doc("version").get().then(function(doc) {
        if (!doc.exists) {
            return readyCheck();
        }
        if (doc.exists) {
            if (!doc.data()) {
                return readyCheck();
            }
            if (doc.data()) {
                if (doc.data().version) {
                    version = doc.data().version;
                    startUp();
                    readyCheck2();
                }
                if (!doc.data().version) {
                    return readyCheck();
                }
            }
        }
    });
}

function startUp() {
    user = firebase.auth().currentUser.uid + version;
    userId = firebase.auth().currentUser.uid;
    ready = true;
    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
        console.log("get worked!");
        if (!doc.exists) {
            db.collection("users").doc(firebase.auth().currentUser.uid + version).set({
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
                gn: 1,
                bestScore: null,
                gameState: null,
                test: true,
                n2: null,
                n3: null,
                n4: null,
                n5: null,
                n6: null,
                n7: null,
                n8: null,
                n9: null,
                n10: null,
                n11: null
            });
            reLoad("200");
        }
    });
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


function continu(gS) {
    localStorage.setItem("gameState", gS)
    location.reload();
}

function startNew() {
    localStorage.removeItem("gameState");
    uDS = true;
}
if (uDS == true) {
    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
        if (doc.exists) {
            db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                gameState: gameStat
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function getGame() {
    check0 = null;
    gscheck = null;
    bscheck = null;
    if (db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
            if (doc.exists) {
                return true;
            }
        })) {
        check0 = true;
        db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
            console.log(doc.data());
        });
    }
    if (check0 == true) {
        db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
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
        db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
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
        db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
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
    var nameing = getCookie("gameName");
    addStyleString('  .tile-inner2 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2 + '"); }');
    addStyleString('  .tile-inner4 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no4 + '"); }');
    addStyleString('  .tile-inner8 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no8 + '"); }');
    addStyleString('  .tile-inner16 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no16 + '"); }');
    addStyleString('  .tile-inner32 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no32 + '"); }');
    addStyleString('  .tile-inner64 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no64 + '"); }');
    addStyleString('  .tile-inner128 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no128 + '"); }');
    addStyleString('  .tile-inner256 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no256 + '"); }');
    addStyleString('  .tile-inner512 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no512 + '"); }');
    addStyleString('  .tile-inner1024 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no1024 + '"); }');
    addStyleString('  .tile-inner2048 { background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url("' + no2048 + '"); }');
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
    document.getElementsByClassName("gameName")[0].innerText = nameing;
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
    gameName1 = document.getElementsByClassName("nameGame")[0].value;
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
    document.cookie = "gameName=" + gameName1;
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
        document.getElementsByClassName("save-button")[0].addEventListener("click", function saveGame() {
            db.collection("users").doc(firebase.auth().currentUser.uid + version).add({
                gameState: gameStat,
                bestScore: bestScor
            });
            window.alert("Game Saved");
        }, {
            once: false
        });
        readyCheck();
    } else {
        // No user is signed in.
        console.log("No user detected.");
    }
});

function saveCloud() {
    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().gn);
            if (doc.data().gn) {
                if(doc.data().gn++ > 11){
                    window.alert("You can have up to 11 custom games per an account.");
                } else {
                console.log(doc.data().gn);
                var gameNumberSet = doc.data().gn;
                console.log(gameNumberSet);
                gameNumberAdd = gameNumberSet++;
                console.log(gameNumberAdd);
                gameNumberAdd2 = gameNumberAdd++;
                if (gameNumberAdd == 2) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a2: game2input,
                        b2: game4input,
                        c2: game8input,
                        d2: game16input,
                        e2: game32input,
                        f2: game64input,
                        g2: game128input,
                        h2: game256input,
                        i2: game512input,
                        j2: game1024input,
                        k2: game2048input,
                        n2: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    });
                }
                if (gameNumberAdd == 3) {
                    console.log("Success, you've reached cloud save, here's your doc: " + firebase.auth().currentUser.uid + version);
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a3: game2input,
                        b3: game4input,
                        c3: game8input,
                        d3: game16input,
                        e3: game32input,
                        f3: game64input,
                        g3: game128input,
                        h3: game256input,
                        i3: game512input,
                        j3: game1024input,
                        k3: game2048input,
                        n3: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    });
                } else {
                   console.log("da f, you didn't reach cloud save, here's your doc: " + firebase.auth().currentUser.uid + version);   
                                     console.log("gameNumberAdd: " + gameNumberAdd); 
                    console.log("compare 3: " + gameNumberAdd == 3);
                    console.log(typeof gameNumberAdd);
                    console.log(typeof 9);
                console.log("compare 6: " + gameNumberAdd == 6);
                console.log("compare 7: " + gameNumberAdd == 7);
                console.log("compare 8: " + gameNumberAdd == 8);
                    console.log("compare 8: " + gameNumberAdd == 9);
              console.log("compare 8: " + gameNumberAdd == 10);
                    console.log("compare 8: " + gameNumberAdd == 11);
                }
                if (gameNumberAdd == 4) {
                                        console.log("Success, you've reached cloud save, here's your doc: " + firebase.auth().currentUser.uid + version);
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a4: game2input,
                        b4: game4input,
                        c4: game8input,
                        d4: game16input,
                        e4: game32input,
                        f4: game64input,
                        g4: game128input,
                        h4: game256input,
                        i4: game512input,
                        j4: game1024input,
                        k4: game2048input,
                        n4: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 5) {
                                        console.log("Success, you've reached cloud save, here's your doc: " + firebase.auth().currentUser.uid + version);
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a5: game2input,
                        b5: game4input,
                        c5: game8input,
                        d5: game16input,
                        e5: game32input,
                        f5: game64input,
                        g5: game128input,
                        h5: game256input,
                        i5: game512input,
                        j5: game1024input,
                        k5: game2048input,
                        n5: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 6) {
                                        console.log("Success, you've reached cloud save, here's your doc: " + firebase.auth().currentUser.uid + version);
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a6: game2input,
                        b6: game4input,
                        c6: game8input,
                        d6: game16input,
                        e6: game32input,
                        f6: game64input,
                        g6: game128input,
                        h6: game256input,
                        i6: game512input,
                        j6: game1024input,
                        k6: game2048input,
                        n6: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 7) {
                    
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a7: game2input,
                        b7: game4input,
                        c7: game8input,
                        d7: game16input,
                        e7: game32input,
                        f7: game64input,
                        g7: game128input,
                        h7: game256input,
                        i7: game512input,
                        j7: game1024input,
                        k7: game2048input,
                        n7: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 8) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a8: game2input,
                        b8: game4input,
                        c8: game8input,
                        d8: game16input,
                        e8: game32input,
                        f8: game64input,
                        g8: game128input,
                        h8: game256input,
                        i8: game512input,
                        j8: game1024input,
                        k8: game2048input,
                        n8: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 9) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a9: game2input,
                        b9: game4input,
                        c9: game8input,
                        d9: game16input,
                        e9: game32input,
                        f9: game64input,
                        g9: game128input,
                        h9: game256input,
                        i9: game512input,
                        j9: game1024input,
                        k9: game2048input,
                        n9: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)
                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 10) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a10: game2input,
                        b10: game4input,
                        c10: game8input,
                        d10: game16input,
                        e10: game32input,
                        f10: game64input,
                        g10: game128input,
                        h10: game256input,
                        i10: game512input,
                        j10: game1024input,
                        k10: game2048input,
                        n10: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)

                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                if (gameNumberAdd == 11) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).update({
                        a11: game2input,
                        b11: game4input,
                        c11: game8input,
                        d11: game16input,
                        e11: game32input,
                        f11: game64input,
                        g11: game128input,
                        h11: game256input,
                        i11: game512input,
                        j11: game1024input,
                        k11: game2048input,
                        n11: gameName1,
                        gn: firebase.firestore.FieldValue.increment(1)
                    }).then(() => {
                    console.log("Document successfully updated!");
                                        reLoad("100");
                     });
                }
                }
                
            }
        }
    });
}


function loadSaves() {
    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
        if (doc.data().gn < 12) {
            gameNumberAdd3 = doc.data().gn;
            while (gameNumberAdd3 >= 2) {
                var add = document.createElement("p");
                gameNumberAdd4 = gameNumberAdd3 - 1;

                if (gameNumberAdd3 == 2) {
                    add.innerHTML = doc.data().n2
                }
                if (gameNumberAdd3 == 3) {
                    add.innerHTML = doc.data().n3
                }
                if (gameNumberAdd3 == 4) {
                    add.innerHTML = doc.data().n4
                }
                if (gameNumberAdd3 == 5) {
                    add.innerHTML = doc.data().n5
                }
                if (gameNumberAdd3 == 6) {
                    add.innerHTML = doc.data().n6
                }
                if (gameNumberAdd3 == 7) {
                    add.innerHTML = doc.data().n7
                }
                if (gameNumberAdd3 == 8) {
                    add.innerHTML = doc.data().n8
                }
                if (gameNumberAdd3 == 9) {
                    add.innerHTML = doc.data().n9
                }
                if (gameNumberAdd3 == 10) {
                    add.innerHTML = doc.data().n10
                }
                if (gameNumberAdd3 == 11) {
                    add.innerHTML = doc.data().n11
                }
                add.className = "game-button";
                add.id = gameNumberAdd3;
                document.getElementsByClassName("saved-games")[0].appendChild(add);
                if (document.getElementById("2")) {
                document.getElementById("2").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a2;
                            thing4 = doc.data().b2;
                            thing8 = doc.data().c2;
                            thing16 = doc.data().d2;
                            thing32 = doc.data().e2;
                            thing64 = doc.data().f2;
                            thing128 = doc.data().g2;
                            thing256 = doc.data().h2;
                            thing512 = doc.data().i2;
                            thing1024 = doc.data().j2;
                            thing2048 = doc.data().k2;
                            thingName = doc.data().n2;
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("3")) {
                document.getElementById("3").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a3;
                            thing4 = doc.data().b3;
                            thing8 = doc.data().c3;
                            thing16 = doc.data().d3;
                            thing32 = doc.data().e3;
                            thing64 = doc.data().f3;
                            thing128 = doc.data().g3;
                            thing256 = doc.data().h3;
                            thing512 = doc.data().i3;
                            thing1024 = doc.data().j3;
                            thing2048 = doc.data().k3;
                            thingName = doc.data().n3;
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("4")) {
                document.getElementById("4").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a4;
                            thing4 = doc.data().b4;
                            thing8 = doc.data().c4;
                            thing16 = doc.data().d4;
                            thing32 = doc.data().e4;
                            thing64 = doc.data().f4;
                            thing128 = doc.data().g4;
                            thing256 = doc.data().h4;
                            thing512 = doc.data().i4;
                            thing1024 = doc.data().j4;
                            thing2048 = doc.data().k4;
                            thingName = doc.data().n4;
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("4")) {
                document.getElementById("4").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a5;
                            thing4 = doc.data().b5;
                            thing8 = doc.data().c5;
                            thing16 = doc.data().d5;
                            thing32 = doc.data().e5;
                            thing64 = doc.data().f5;
                            thing128 = doc.data().g5;
                            thing256 = doc.data().h5;
                            thing512 = doc.data().i5;
                            thing1024 = doc.data().j5;
                            thing2048 = doc.data().k5;
                            thingName = doc.data().n5;
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("6")) {
                document.getElementById("6").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a6;
                            thing4 = doc.data().b6;
                            thing8 = doc.data().c6;
                            thing16 = doc.data().d6;
                            thing32 = doc.data().e6;
                            thing64 = doc.data().f6;
                            thing128 = doc.data().g6;
                            thing256 = doc.data().h6;
                            thing512 = doc.data().i6;
                            thing1024 = doc.data().j6;
                            thing2048 = doc.data().k6;
                            thingName = doc.data().n6;
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("7")) {
                document.getElementById("7").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a7;
                            thing4 = doc.data().b7;
                            thing8 = doc.data().c7;
                            thing16 = doc.data().d7;
                            thing32 = doc.data().e7;
                            thing64 = doc.data().f7;
                            thing128 = doc.data().g7;
                            thing256 = doc.data().h7;
                            thing512 = doc.data().i7;
                            thing1024 = doc.data().j7;
                            thing2048 = doc.data().k7;
                            thingName = doc.data().n7;                        
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("8")) {
                document.getElementById("8").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a8;
                            thing4 = doc.data().b8;
                            thing8 = doc.data().c8;
                            thing16 = doc.data().d8;
                            thing32 = doc.data().e8;
                            thing64 = doc.data().f8;
                            thing128 = doc.data().g8;
                            thing256 = doc.data().h8;
                            thing512 = doc.data().i8;
                            thing1024 = doc.data().j8;
                            thing2048 = doc.data().k8;
                            thingName = doc.data().n8;                        
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("9")) {
                document.getElementById("9").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a9;
                            thing4 = doc.data().b9;
                            thing8 = doc.data().c9;
                            thing16 = doc.data().d9;
                            thing32 = doc.data().e9;
                            thing64 = doc.data().f9;
                            thing128 = doc.data().g9;
                            thing256 = doc.data().h9;
                            thing512 = doc.data().i9;
                            thing1024 = doc.data().j9;
                            thing2048 = doc.data().k9;
                            thingName = doc.data().n9;
                        
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("10")) {
                document.getElementById("10").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a10;
                            thing4 = doc.data().b10;
                            thing8 = doc.data().c10;
                            thing16 = doc.data().d10;
                            thing32 = doc.data().e10;
                            thing64 = doc.data().f10;
                            thing128 = doc.data().g10;
                            thing256 = doc.data().h10;
                            thing512 = doc.data().i10;
                            thing1024 = doc.data().j10;
                            thing2048 = doc.data().k10;
                            thingName = doc.data().n10;
                        
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                if (document.getElementById("11")) {
                document.getElementById("11").addEventListener("click", function(event) {
                    db.collection("users").doc(firebase.auth().currentUser.uid + version).get().then(function(doc) {
                            thing2 = doc.data().a11;
                            thing4 = doc.data().b11;
                            thing8 = doc.data().c11;
                            thing16 = doc.data().d11;
                            thing32 = doc.data().e11;
                            thing64 = doc.data().f11;
                            thing128 = doc.data().g11;
                            thing256 = doc.data().h11;
                            thing512 = doc.data().i11;
                            thing1024 = doc.data().j11;
                            thing2048 = doc.data().k11;
                            thingName = doc.data().n11;
                        
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
                        document.cookie = "gameName=" + thingName;
                        document.cookie = "images_changed=true";
                        reLoad("900");
                    });
                });
                }
                gameNumberAdd3--;
                gameNumberAdd4--;
            }
        } else {
            if (doc.data().gn == 1) {
                var add2 = document.createElement("p");
                add2.innerText = "No Saved Games, Maybe Make One?"
                document.getElementsByClassName("saved-games")[0].appendChild(add2);
            }
        }
    });
}
