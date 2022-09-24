//feld und board haben als 0. element array null um ansprechen einfach
var feld = [null];
var i;
var board = [null];
var content = [null];
for (i = 1; i < 65; i++) {
    board[i] = i;
}
/* val startfeld
brett be eq to
1-8
9-16
rep unt
57-64
sysid be eq to colid + pieid + posid
colid be eq to w | s val weiß, schwarz
pieid be eq to b | t | p | l | d | k val bauer, turm, springer, läufer, dame, könig
posid be eq to l | r | n | [1-8] val links /val be lesser/, rechts /val be greater/, null /val be only piece/, [1-8] /val be bauer, id single pie/
colouring board be eq to start 1 = weiß, 2 = schwarz rep
inx 1-16 & 49-64 be eq to pie
feld[1,8,57,64] be eq to sysid [s*2,w*2][t*4][l,r,l,r]
feld[2,7,58,63] be eq to sysid [s*2,w*2][p*4][l,r,l,r]
feld[3,6,59,62] be eq to sysid [s*2,w*2][l*4][l,r,l,r]
feld[4,60] be eq to sysid [s,w][d*2][n]
feld[5,61] be eq to sysid [s,w][k*2][n]
feld[9-16,49-56] be eq to sysid [s*8,w*8][b*16][[1-8]]

Kreieren Startpos mit Unicode Chars

Feld Übersicht:

|--|--|--|--|--|--|--|--|
|1 |2 |3 |4 |5 |6 |7 |8 |
|--|--|--|--|--|--|--|--|
|9 |10|11|12|13|14|15|16|
|--|--|--|--|--|--|--|--|
|17|18|19|20|21|22|23|24|
|--|--|--|--|--|--|--|--|
|25|26|27|28|29|30|31|32|
|--|--|--|--|--|--|--|--|
|33|34|35|36|37|38|39|40|
|--|--|--|--|--|--|--|--|
|41|42|43|44|45|46|47|48|
|--|--|--|--|--|--|--|--|
|49|50|51|52|53|54|55|56|
|--|--|--|--|--|--|--|--|
|57|58|59|60|61|62|63|64|
|--|--|--|--|--|--|--|--|
*/
feld[1] = "stl";
content[1] = "\u265C";
feld[2] = "spl";
content[2] = "\u265E";
feld[3] = "sll";
content[3] = "\u265D";
feld[4] = "sdn";
content[4] = "\u265B";
feld[5] = "skn";
content[5] = "\u265A";
feld[6] = "slr";
content[6] = "\u265D";
feld[7] = "spr";
content[7] = "\u265E";
feld[8] = "str";
content[8] = "\u265C";
feld[9] = "sb1";
content[9] = "\u265F";
feld[10] = "sb2";
content[10] = "\u265F";
feld[11] = "sb3";
content[11] = "\u265F";
feld[12] = "sb4";
content[12] = "\u265F";
feld[13] = "sb5";
content[13] = "\u265F";
feld[14] = "sb6";
content[14] = "\u265F";
feld[15] = "sb7";
content[15] = "\u265F";
feld[16] = "sb8";
content[16] = "\u265F";
feld[49] = "wb1";
content[49] = "\u2659";
feld[50] = "wb2";
content[50] = "\u2659";
feld[51] = "wb3";
content[51] = "\u2659";
feld[52] = "wb4";
content[52] = "\u2659";
feld[53] = "wb5";
content[53] = "\u2659";
feld[54] = "wb6";
content[54] = "\u2659";
feld[55] = "wb7";
content[55] = "\u2659";
feld[56] = "wb8";
content[56] = "\u2659";
feld[57] = "wtl";
content[57] = "\u2656";
feld[58] = "wpl";
content[58] = "\u2658";
feld[59] = "wll";
content[59] = "\u2657";
feld[60] = "wdn";
content[60] = "\u2655";
feld[61] = "wkn";
content[61] = "\u2654";
feld[62] = "wlr";
content[62] = "\u2657";
feld[63] = "wpr";
content[63] = "\u2658";
feld[64] = "wtr";
content[64] = "\u2656";
//restliche Werte auffüllen mit null
for (i = 17; i <= 48; i++) {
    feld[i] = null;
}
/*
Kreieren einer HTML Tabelle mit Schachmuster
*/
var patternAlt = false;
var tblcreate = "<table id=\"boardtbl\"><tr>";
for (i = 1; i <= 64; i++) {
    if (i % 8 === 1) {
        tblcreate += "</tr><tr>";
        if (patternAlt) {
            patternAlt = false;
        }
        else {
            patternAlt = true;
        }
    }
    if (i % 2 === 0 && !patternAlt) {
        //bg black
        if (feld[i] != null) {
            tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
        }
        else {
            tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"></td>");
        }
    }
    else if (i % 2 === 0 && patternAlt) {
        //bg white
        if (feld[i] != null) {
            tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
        }
        else {
            tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"></td>");
        }
    }
    else if (i % 2 === 1 && !patternAlt) {
        if (feld[i] != null) {
            tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
        }
        else {
            tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"></td>");
        }
    }
    else if (i % 2 === 1 && patternAlt) {
        if (feld[i] != null) {
            tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
        }
        else {
            tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"></td>");
        }
    }
}
tblcreate += "</tr></table>";
document.getElementById("board").innerHTML = tblcreate;
/*board created
movesets:
mva = mvs allowed
mv = move
up = up
dw = dw
lf = left
rg = right
mvdwrg = move diagonally down & right
p = Springer piece
b = bauer piece
p mvs einzeln deklariert, da besonders0
b mvs initialer erster doppelter move0
cmt = can multiple, ob mvs nur ein feld oder mehrere felder überspan0nen können
*/
var mvup = { main: -8, borderrow: [1, 2, 3, 4, 5, 6, 7, 8] };
var mvdw = { main: 8, borderrow: [57, 58, 59, 60, 61, 62, 63, 64] };
var mvlf = { main: -1, borderrow: [1, 9, 17, 25, 33, 41, 49, 57] };
var mvrg = { main: 1, borderrow: [8, 16, 24, 32, 40, 48, 56, 64] };
var mvdwrg = {
    main: 9,
    borderrow: [8, 16, 24, 32, 40, 48, 56, 57, 58, 59, 60, 61, 62, 63, 64]
};
var mvuplf = {
    main: -9,
    borderrow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 25, 33, 41, 49, 57]
};
var mvuprg = {
    main: -7,
    borderrow: [1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64]
};
var mvdwlf = {
    main: +7,
    borderrow: [1, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63, 64]
};
var pmvuplfh = {
    main: -17,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 25, 33, 41, 49,
        57,
    ]
};
var pmvdwrgh = {
    main: 17,
    borderrow: [
        8, 16, 24, 32, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 64,
    ]
};
var pmvuprgh = {
    main: -15,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24, 32, 40, 48, 56,
        64,
    ]
};
var pmvdwlfh = {
    main: 15,
    borderrow: [
        1, 9, 17, 25, 33, 41, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 64,
    ]
};
var pmvdwrgl = {
    main: 10,
    borderrow: [
        7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 64,
    ]
};
var pmvuplfl = {
    main: -10,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 25, 26, 33, 34, 41, 42, 49, 50, 57,
        58,
    ]
};
var pmvdwlfl = {
    main: 6,
    borderrow: [
        1, 2, 9, 10, 17, 18, 25, 26, 33, 34, 41, 42, 49, 50, 57, 58, 59, 60, 61, 62,
        63, 64,
    ]
};
var pmvuprgl = {
    main: -6,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 63,
        64,
    ]
};
var bmvdbup = {
    main: -16,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 57, 58, 59, 60, 61, 62, 63, 64,
    ]
};
var bmvdbdw = {
    main: 16,
    borderrow: [
        1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
    ]
};
var turmmvs = {
    mva: [mvup.main, mvdw.main, mvlf.main, mvrg.main],
    cmt: true,
    borderelements: [
        mvup.borderrow,
        mvdw.borderrow,
        mvlf.borderrow,
        mvrg.borderrow,
    ],
    hasmoved: [false, false, false, false]
};
var springermvs = {
    mva: [
        pmvuplfh.main,
        pmvdwrgh.main,
        pmvuprgh.main,
        pmvdwlfh.main,
        pmvdwrgl.main,
        pmvuplfl.main,
        pmvdwlfl.main,
        pmvuprgl.main,
    ],
    cmt: false,
    borderelements: [
        pmvuplfh.borderrow,
        pmvdwrgh.borderrow,
        pmvuprgh.borderrow,
        pmvdwlfh.borderrow,
        pmvdwrgl.borderrow,
        pmvuplfl.borderrow,
        pmvdwlfl.borderrow,
        pmvuprgl.borderrow,
    ]
};
var laufermvs = {
    mva: [mvuplf.main, mvuprg.main, mvdwlf.main, mvdwrg.main],
    cmt: true,
    borderelements: [
        mvuplf.borderrow,
        mvuprg.borderrow,
        mvdwlf.borderrow,
        mvdwrg.borderrow,
    ]
};
var damemvs = {
    mva: [
        mvup.main,
        mvdw.main,
        mvlf.main,
        mvrg.main,
        mvuplf.main,
        mvuprg.main,
        mvdwlf.main,
        mvdwrg.main,
    ],
    cmt: true,
    borderelements: [
        mvup.borderrow,
        mvdw.borderrow,
        mvlf.borderrow,
        mvrg.borderrow,
        mvuplf.borderrow,
        mvuprg.borderrow,
        mvdwlf.borderrow,
        mvdwrg.borderrow,
    ]
};
var konigmvs = {
    mva: [
        mvup.main,
        mvdw.main,
        mvlf.main,
        mvrg.main,
        mvuplf.main,
        mvuprg.main,
        mvdwlf.main,
        mvdwrg.main,
    ],
    cmt: false,
    borderelements: [
        mvup.borderrow,
        mvdw.borderrow,
        mvlf.borderrow,
        mvrg.borderrow,
        mvuplf.borderrow,
        mvuprg.borderrow,
        mvdwlf.borderrow,
        mvdwrg.borderrow,
    ],
    hasmoved: [false]
};
var wbauermvs = {
    mva: [mvup.main, mvuplf.main, mvuprg.main, bmvdbup.main],
    cmt: false,
    borderelements: [
        mvup.borderrow,
        mvuplf.borderrow,
        mvuprg.borderrow,
        bmvdbup.borderrow,
    ],
    hasmoved: [false, false, false, false, false, false, false, false]
};
var sbauermvs = {
    mva: [mvdw.main, mvdwlf.main, mvdwrg.main, bmvdbdw.main],
    cmt: false,
    borderelements: [
        mvdw.borderrow,
        mvdwlf.borderrow,
        mvdwrg.borderrow,
        bmvdbdw.borderrow,
    ],
    hasmoved: [false, false, false, false, false, false, false, false]
};
var shadowkonig = {
    mva: [
        mvup.main,
        mvdw.main,
        mvlf.main,
        mvrg.main,
        mvuplf.main,
        mvuprg.main,
        mvdwlf.main,
        mvdwrg.main,
        pmvuplfh.main,
        pmvdwrgh.main,
        pmvuprgh.main,
        pmvdwlfh.main,
        pmvdwrgl.main,
        pmvuplfl.main,
        pmvdwlfl.main,
        pmvuprgl.main,
    ],
    cmt: true,
    borderelements: [
        mvup.borderrow,
        mvdw.borderrow,
        mvlf.borderrow,
        mvrg.borderrow,
        mvuplf.borderrow,
        mvuprg.borderrow,
        mvdwlf.borderrow,
        mvdwrg.borderrow,
        pmvuplfh.borderrow,
        pmvdwrgh.borderrow,
        pmvuprgh.borderrow,
        pmvdwlfh.borderrow,
        pmvdwrgl.borderrow,
        pmvuplfl.borderrow,
        pmvdwlfl.borderrow,
        pmvuprgl.borderrow,
    ]
};
//mvs ende
var wturn = false;
var allposturns = [];
var t;
var schachcheck;
newturn();
function newturn() {
    if (wturn) {
        wturn = false;
    }
    else {
        wturn = true;
    }
    if (schachcheck == true) {
        alert("Schach" + wturn);
    }
    if (document.addEventListener) {
        document.addEventListener("click", getMoveset, false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onclick", getMoveset);
    }
}
function tblrerun() {
    var rower = 8;
    document.getElementById("board").innerHTML = "";
    patternAlt = false;
    tblcreate = "<table id=\"boardtbl\"><tr>";
    for (i = 1; i <= 64; i++) {
        if (i % 8 === 1) {
            tblcreate += "</tr><tr><!--<td>".concat(rower, "</td>-->");
            rower--;
            if (patternAlt) {
                patternAlt = false;
            }
            else {
                patternAlt = true;
            }
        }
        if (i % 2 === 0 && !patternAlt) {
            //bg black
            if (feld[i] != null) {
                tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
            }
            else {
                tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"></td>");
            }
        }
        else if (i % 2 === 0 && patternAlt) {
            //bg white
            if (feld[i] != null) {
                tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
            }
            else {
                tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"></td>");
            }
        }
        else if (i % 2 === 1 && !patternAlt) {
            if (feld[i] != null) {
                tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
            }
            else {
                tblcreate += "<td class=\"bgs\" id=\"tdid".concat(i, "\"></td>");
            }
        }
        else if (i % 2 === 1 && patternAlt) {
            if (feld[i] != null) {
                tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"><button class=\"figlink\" id=\"clifig ").concat(i, "\">").concat(content[i], "</button></td>");
            }
            else {
                tblcreate += "<td class=\"bgw\" id=\"tdid".concat(i, "\"></td>");
            }
        }
    }
    tblcreate += "</tr><!--<tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td></tr>--></table>";
    document.getElementById("board").innerHTML = tblcreate;
    newturn();
}
function getMoveset(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;
    var element = event.target;
    calcmvs(element.id);
}
var k;
var o;
var x;
var colcheck = false;
var temparradd;
var moremvs;
function calcmvs(clickid) {
    var checksplit = clickid.split("");
    var colidgive = "";
    var getcolcheck;
    if (checksplit[0] != "t") {
        for (x = 0; x < checksplit.length; x++) {
            if (x == 7 || x == 8) {
                colidgive = colidgive + checksplit[x];
            }
        }
        getcolcheck = getcolid(colidgive);
        if (wturn) {
            if (getcolcheck == "w") {
                colcheck = false;
            }
            else if (getcolcheck == "s") {
                colcheck = true;
            }
        }
        else {
            if (getcolcheck == "w") {
                colcheck = true;
            }
            else if (getcolcheck == "s") {
                colcheck = false;
            }
        }
    }
    if (checksplit[0] != "t" && colcheck == false) {
        var idsplit = clickid.split(" ");
        var purepieid = Number(idsplit[1]);
        var pietypearr = feld[purepieid].split("");
        var pietype = pietypearr[1];
        if (pietype == "t") {
            moremvs = turmmvs.cmt;
            allposturns = [[], [], [], []];
            for (k = 0; k < allposturns.length; k++) {
                allposturns[k].push(purepieid);
                for (o = 1; o <= 7; o++) {
                    temparradd = turmmvs.mva[k] * o;
                    allposturns[k].push(temparradd);
                }
            }
            pietype = turmmvs;
        }
        else if (pietype == "p") {
            allposturns = [[], [], [], [], [], [], [], []];
            moremvs = springermvs.cmt;
            for (k = 0; k < allposturns.length; k++) {
                allposturns[k].push(purepieid);
                for (o = 1; o <= 7; o++) {
                    temparradd = springermvs.mva[k] * o;
                    allposturns[k].push(temparradd);
                }
            }
            pietype = springermvs;
        }
        else if (pietype == "l") {
            moremvs = laufermvs.cmt;
            allposturns = [[], [], [], []];
            for (k = 0; k < allposturns.length; k++) {
                allposturns[k].push(purepieid);
                for (o = 1; o <= 7; o++) {
                    temparradd = laufermvs.mva[k] * o;
                    allposturns[k].push(temparradd);
                }
            }
            pietype = laufermvs;
        }
        else if (pietype == "d") {
            moremvs = damemvs.cmt;
            allposturns = [[], [], [], [], [], [], [], []];
            for (k = 0; k < allposturns.length; k++) {
                allposturns[k].push(purepieid);
                for (o = 1; o <= 7; o++) {
                    temparradd = damemvs.mva[k] * o;
                    allposturns[k].push(temparradd);
                }
            }
            pietype = damemvs;
        }
        else if (pietype == "k") {
            allposturns = [[], [], [], [], [], [], [], []];
            moremvs = konigmvs.cmt;
            for (k = 0; k < allposturns.length; k++) {
                allposturns[k].push(purepieid);
                for (o = 1; o <= 7; o++) {
                    temparradd = konigmvs.mva[k] * o;
                    allposturns[k].push(temparradd);
                }
            }
            pietype = konigmvs;
        }
        else if (pietype == "b") {
            allposturns = [[], [], [], []];
            if (wturn) {
                moremvs = wbauermvs.cmt;
                for (k = 0; k < allposturns.length; k++) {
                    allposturns[k].push(purepieid);
                    for (o = 1; o <= 7; o++) {
                        temparradd = wbauermvs.mva[k] * o;
                        allposturns[k].push(temparradd);
                    }
                }
                pietype = wbauermvs;
            }
            else {
                moremvs = sbauermvs.cmt;
                for (k = 0; k < allposturns.length; k++) {
                    allposturns[k].push(purepieid);
                    for (o = 1; o <= 7; o++) {
                        temparradd = sbauermvs.mva[k] * o;
                        allposturns[k].push(temparradd);
                    }
                }
                pietype = sbauermvs;
            }
        }
        var isbreak = false;
        var g = void 0;
        var u = void 0;
        var colourid = void 0;
        var noloop = false;
        var isgonnabreak = false;
        var dblblocked = false;
        for (k = 0; k < allposturns.length; k++) {
            for (o = 1; o < 8; o++) {
                allposturns[k][o] = allposturns[k][o] + purepieid;
            }
        }
        colourid = getcolid(allposturns[0][0]);
        if (wturn && colourid == "s") {
            noloop = true;
        }
        else if (!wturn && colourid == "w") {
            noloop = true;
        }
        for (k = 0; k < allposturns.length; k++) {
            isbreak = false;
            isgonnabreak = false;
            if (noloop) {
                isbreak = true;
            }
            if (pietype.cmt) {
                for (o = 0; o < 8; o++) {
                    for (g = 0; g < pietype.borderelements[k].length; g++) {
                        if (allposturns[k][o] == pietype.borderelements[k][g]) {
                            isgonnabreak = true;
                        }
                    }
                    colourid = getcolid(allposturns[k][o]);
                    if (colourid == "w" && o != 0) {
                        if (wturn) {
                            isbreak = true;
                        }
                        else {
                            isgonnabreak = true;
                        }
                    }
                    else if (colourid == "s" && o != 0) {
                        if (wturn) {
                            isgonnabreak = true;
                        }
                        else {
                            isbreak = true;
                        }
                    }
                    if (isbreak || allposturns[k][o] < 1 || allposturns[k][o] > 64) {
                        isbreak = true;
                        allposturns[k][o] = null;
                    }
                    if (isgonnabreak) {
                        isbreak = true;
                    }
                }
            }
            else {
                for (o = 2; o < 8; o++) {
                    allposturns[k][o] = null;
                }
                if (isbreak || allposturns[k][1] < 1 || allposturns[k][1] > 65) {
                    allposturns[k][1] = null;
                }
                for (g = 0; g < pietype.borderelements[k].length; g++) {
                    if (allposturns[k][0] == pietype.borderelements[k][g]) {
                        allposturns[k][1] = null;
                    }
                }
                colourid = getcolid(allposturns[k][1]);
                if (wturn) {
                    if (colourid == "w") {
                        allposturns[k][1] = null;
                    }
                }
                else {
                    if (colourid == "s") {
                        allposturns[k][1] = null;
                    }
                }
                var pieonfeld = void 0;
                //bauer moves
                if (pietype == wbauermvs) {
                    pieonfeld = feld[allposturns[k][1]];
                    if (k == 0) {
                        if (pieonfeld != null) {
                            allposturns[k][1] = null;
                            dblblocked = true;
                        }
                    }
                    else if (k == 1 || k == 2) {
                        if (pieonfeld == null) {
                            allposturns[k][1] = null;
                        }
                    }
                    else if (k == 3) {
                        if (pieonfeld != null || dblblocked) {
                            allposturns[k][1] = null;
                        }
                    }
                }
                else if (pietype == sbauermvs) {
                    pieonfeld = feld[allposturns[k][1]];
                    if (k == 0) {
                        if (pieonfeld != null) {
                            allposturns[k][1] = null;
                            dblblocked = true;
                        }
                    }
                    else if (k == 1 || k == 2) {
                        if (pieonfeld == null) {
                            allposturns[k][1] = null;
                        }
                    }
                    else if (k == 3) {
                        if (pieonfeld != null || dblblocked) {
                            allposturns[k][1] = null;
                        }
                    }
                }
            }
        }
        var z = void 0;
        var y = void 0;
        var kingpos = void 0;
        if (wturn) {
            for (y = 1; y <= 64; y++) {
                if (feld[y] == "wkn") {
                    kingpos = y;
                }
            }
        }
        else {
            for (y = 1; y <= 64; y++) {
                if (feld[y] == "skn") {
                    kingpos = y;
                }
            }
        }
        var rmmarker = void 0;
        var shkingpos = [];
        for (u = 0; u < 16; u++) {
            shkingpos.push([null]);
        }
        //add Schachcheck here
        for (u = 0; u < shkingpos.length; u++) {
            for (y = 1; y < 8; y++) {
                if (u < 8 || y == 1) {
                    shkingpos[u].push(shadowkonig.mva[u] * y);
                }
                else if (u >= 8 && y > 1) {
                    shkingpos[u].push(null);
                }
            }
        }
        console.log(shkingpos);
        for (z = 1; z <= 64; z++) {
            rmmarker = document.getElementById("tdid".concat(z));
            if (rmmarker.className == "newbgw") {
                rmmarker.classList.add("bgw");
                rmmarker.classList.remove("newbgw");
            }
            else if (rmmarker.className == "newbgs") {
                rmmarker.classList.add("bgs");
                rmmarker.classList.remove("newbgs");
            }
        }
        var getposclass = void 0;
        for (k = 0; k < allposturns.length; k++) {
            for (o = 1; o < allposturns[k].length; o++) {
                getposclass = allposturns[k][o];
                if (getposclass != null) {
                    var classmarker = document.getElementById("tdid".concat(getposclass));
                    if (classmarker.className == "bgw") {
                        classmarker.classList.add("newbgw");
                        classmarker.classList.remove("bgw");
                    }
                    else if (classmarker.className == "bgs") {
                        classmarker.classList.add("newbgs");
                        classmarker.classList.remove("bgs");
                    }
                }
            }
        }
    }
    else if (checksplit[0] == "t") {
        var r = void 0;
        var w = void 0;
        var newfeld = void 0;
        var clinullfeld = void 0;
        if (checksplit[5] == undefined) {
            clinullfeld = checksplit[4];
        }
        else {
            clinullfeld = checksplit[4] + checksplit[5];
        }
        for (r = 0; r < allposturns.length; r++) {
            for (w = 1; w < allposturns[r].length; w++) {
                if (allposturns[r][w] == clinullfeld) {
                    newfeld = Number(clinullfeld);
                    feld[newfeld] = feld[allposturns[0][0]];
                    content[newfeld] = content[allposturns[0][0]];
                    feld[allposturns[0][0]] = null;
                    tblrerun();
                }
            }
        }
    }
    else if (colcheck) {
        var splitenemy = clickid.split("");
        var enemyfeld = "";
        var x_1;
        var e = void 0;
        for (x_1 = 0; x_1 < splitenemy.length; x_1++) {
            if (x_1 == 7 || x_1 == 8) {
                enemyfeld = enemyfeld + splitenemy[x_1];
            }
        }
        for (x_1 = 0; x_1 < allposturns.length; x_1++) {
            for (e = 0; e < allposturns[x_1].length; e++) {
                if (allposturns[x_1][e] == enemyfeld) {
                    var errColhandler = getcolid(allposturns[0][0]);
                    if (errColhandler != "empty") {
                        feld[allposturns[x_1][e]] = feld[allposturns[0][0]];
                        content[allposturns[x_1][e]] = content[allposturns[0][0]];
                        feld[allposturns[0][0]] = null;
                        content[allposturns[0][0]] = null;
                        tblrerun();
                    }
                }
            }
        }
    }
}
//end bewegt algo
function getcolid(pos) {
    if (pos != null && pos >= 1 && pos <= 64) {
        var colid = void 0;
        var allidsplit = void 0;
        var allid = feld[pos];
        if (allid != null) {
            allidsplit = allid.split("");
            colid = allidsplit[0];
            return colid;
        }
        else {
            return "empty";
        }
    }
    else {
        return null;
    }
}
function getpositionid(posi) {
    if (posi != null && posi >= 1 && posi <= 64) {
        var positionid = void 0;
        var posidsplit = void 0;
        var posiid = feld[posi];
        if (posiid != null) {
            posidsplit = posiid.split("");
            positionid = posidsplit[2];
            return positionid;
        }
        else {
            return "empty";
        }
    }
    else {
        return null;
    }
}
