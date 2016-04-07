var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1,
    ua = navigator.userAgent.toLowerCase(),
    is_android = 0 <= ua.indexOf("android"),
    uua = navigator.userAgent,
    is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"),
    is_mobile = 0 <= ua.indexOf("mobile"),
    is_firefox = -1 < ua.indexOf("firefox"),
    is_ie8oo = window.attachEvent && !window.addEventListener,
    is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1,
    raf = function(b) {};
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0,
    a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)",
    ang, sang;

function trf(b, h) {
    b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = h
}

function trfo(b, h) {
    b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = h
}
var pi2 = 2 * Math.PI,
    animating = !1,
    startAnimation = function() {
        animating = !0;
        no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
    },
    ois = [],
    wic = 0,
    ldi = function(b) {
        wic++;
        var h = {},
            c = document.createElement("img");
        h.ii = c;
        h.sc = 1;
        c.onload = function() {
            for (var c = ois.length - 1; 0 <= c; c--)
                if (ois[c].ii == this) {
                    c = ois[c];
                    c.ww = this.width;
                    c.hh = this.height;
                    c.loaded = !0;
                    if (c.onload) c.onload();
                    break
                }
            wic--;
            0 == wic && startAnimation()
        };
        h.src = b;
        ois.push(h);
        return h
    };

function addCss(b) {
    var h = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(h);
    h.type = "text/css";
    h.styleSheet ? h.styleSheet.cssText = b : h.appendChild(document.createTextNode(b))
}
var nbg = document.getElementById("nbg"),
    nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64,
    rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4) .5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44, imgd[p + 1] = 56, imgd[p + 2] = 68), imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)), imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)), imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(7 + 52.5 * j), imgd[p + 2] = Math.floor(6.4 + 48 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)), imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(5.4 + 40.5 * j), imgd[p + 2] = Math.floor(7 + 52.5 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = [],
    m_iv = -1,
    swmup = !1;

function mkBtn(b, h, c, f) {
    var C = document.createElement("div");
    b.tagName || (b = document.getElementById(b), b.style.width = c + "px", b.style.height = f + "px", C.style.width = c + "px", C.style.height = f + "px");
    var q = {
        lic: 0
    };
    q.elem = b;
    q.md = !1;
    q.mo = !1;
    q.mdf = 0;
    q.mof = 0;
    var e = !0;
    b.style && b.style.position && ("absolute" == (b.style.position + "").toLowerCase() && (e = !1), "fixed" == (b.style.position + "").toLowerCase() && (e = !1));
    e && (b.style.position = "relative");
    C.style.position = "absolute";
    C.style.opacity = 0;
    C.style.left = "0px";
    C.style.top = "0px";
    b.appendChild(C);
    q.ho = C;
    q.alic = function() {
        this.lic++;
        if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) this.onload()
    };
    mos.push(q);
    q.setEnabled = function(c) {
        c ? (this.disabled = !1, this.upi.style.opacity = this.mof, this.downi.style.opacity = this.mdf, this.elem.style.opacity = 1, this.elem.style.cursor = "pointer") : (this.disabled = !0, this.upi.style.opacity = 0, this.downi.style.opacity = 0, this.elem.style.opacity = .38, this.elem.style.cursor = "default")
    };
    if (h)
        for (e = 1; 3 >= e; e++) {
            var y = document.createElement("img");
            y.draggable = !1;
            y.style.position = "absolute";
            y.style.left = "0px";
            y.style.top = "0px";
            y.border = 0;
            y.width = c;
            y.height = f;
            y.className = "nsi";
            C.appendChild(y);
            1 == e ? (q.normi = y, y.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b = mos[c];
                    if (b.normi == this) {
                        b.alic();
                        break
                    }
                }
            }, y.src = h + ".png") : 2 == e ? (q.upi = y, y.style.opacity = 0, y.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b = mos[c];
                    if (b.upi == this) {
                        b.alic();
                        break
                    }
                }
            }, y.src = h + "up.png") : 3 == e && (q.downi = y, y.style.opacity = 0, y.onload = function() {
                for (var c = mos.length - 1; 0 <= c; c--) {
                    var b =
                        mos[c];
                    if (b.downi == this) {
                        b.alic();
                        break
                    }
                }
            }, y.src = h + "down.png")
        } else C.style.opacity = 1;
    b.onmouseenter = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            if (b.elem == this) {
                if (!b.disabled && !b.mo) {
                    b.mo = !0;
                    if (b.onmouseenter) b.onmouseenter(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    b.onmouseleave = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            if (b.elem == this) {
                if (b.mo) {
                    b.mo = !1;
                    if (b.onmouseleave) b.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    b.onmousedown = function(c) {
        for (var b =
            mos.length - 1; 0 <= b; b--) {
            var q = mos[b];
            if (q.elem == this) {
                if (!q.disabled && !q.md) {
                    q.md = !0;
                    if (q.onmousedown) q.onmousedown(c, q); - 1 == m_iv && (m_iv = setInterval("hmos()", 25));
                    return !1
                }
                break
            }
        }
    };
    b.onmouseup = b.ondragend = function(c) {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var q = mos[b];
            if (q.elem == this) {
                if (q.md) {
                    q.mdf = 1;
                    q.md = !1;
                    if (q.onmouseup && (q.onmouseup(c, q), is_mobile)) q.elem.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    swmup || (swmup = !0, window.onmouseup = window.ondragover = window.ondragend = function() {
        for (var c =
            mos.length - 1; 0 <= c; c--) {
            var b = mos[c];
            b.md && (b.md = !1, -1 == m_iv && (m_iv = setInterval("hmos()", 25)))
        }
    });
    return q
}

function hmos() {
    for (var b, h = !1, c = mos.length - 1; 0 <= c; c--) {
        var f = mos[c];
        b = !1;
        f.mo ? 1 != f.mof && (h = !0, f.mof += .33, 1 <= f.mof && (f.mof = 1), b = !0) : 0 != f.mof && (h = !0, f.mof -= .2, 0 >= f.mof && (f.mof = 0), b = !0);
        b && (f.upi.style.opacity = f.disabled ? 0 : f.mof);
        b = !1;
        f.md ? 1 != f.mdf && (h = !0, f.mdf += .33, 1 <= f.mdf && (f.mdf = 1), b = !0) : 0 != f.mdf && (h = !0, f.mdf -= .2, 0 >= f.mdf && (f.mdf = 0), b = !0);
        b && (f.downi.style.opacity = f.disabled ? 0 : f.mdf)
    }
    h || (clearInterval(m_iv), m_iv = -1)
}

function makeTextBtn(b, h, c, f, C) {
    h || (h = 56);
    56 < h && (h = 56);
    c || (c = 15);
    f || (f = 14);
    var q = document.createElement("div");
    q.className = "btnt nsi sadg" + C;
    var e = q.style;
    e.position = "absolute";
    e.width = "auto";
    e.color = "#ffffff";
    e.fontWeight = "bold";
    e.textAlign = "center";
    e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    e.fontSize = c + "px";
    q.textContent = b;
    e.cursor = "pointer";
    document.body.appendChild(q);
    var y = Math.ceil(35 + q.offsetWidth);
    document.body.removeChild(q);
    q.textContent = "";
    e.width = y + "px";
    e.height = h +
        "px";
    e.lineHeight = h + "px";
    is_mobile || (e.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
    e.borderRadius = f + "px";
    var E = document.createElement("div"),
        e = E.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = y + "px";
    e.height = h + "px";
    e.borderRadius = f + 1 + "px";
    e.opacity = 0;
    E.className = "sadu" + C;
    var u = document.createElement("div"),
        e = u.style;
    e.position = "absolute";
    e.left = e.top = "-1px";
    e.width = y + 2 + "px";
    e.height = h + 2 + "px";
    e.borderRadius = f + "px";
    e.opacity = 0;
    u.className = "sadd" + C;
    var w = mkBtn(q);
    w.a = 1;
    w.ho.appendChild(E);
    w.upi =
        E;
    w.ho.appendChild(u);
    w.downi = u;
    w.ts = c;
    w.ww = y;
    w.bgm = C;
    w.setText = function(c) {
        var b = document.createElement("div");
        b.className = "nsi sadg" + this.bgm;
        var q = b.style;
        q.position = "absolute";
        q.width = "auto";
        q.color = "#ffffff";
        q.fontWeight = "bold";
        q.textAlign = "center";
        q.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        q.fontSize = this.ts + "px";
        b.textContent = c;
        document.body.appendChild(b);
        q = Math.ceil(35 + b.offsetWidth);
        document.body.removeChild(b);
        this.btnf.textContent = c;
        this.ww = q;
        this.elem.style.width = q +
            "px";
        this.upi.style.width = q + "px";
        this.downi.style.width = q + 2 + "px";
        this.btnf.style.width = q + "px"
    };
    c = document.createElement("div");
    q.appendChild(c);
    w.btnf = c;
    e = c.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = y + "px";
    e.height = h + "px";
    e.borderRadius = f + "px";
    c.textContent = b;
    c.className = "nsi";
    e.color = "#ffffff";
    e.opacity = .9;
    w.ho.appendChild(c);
    return w
}
var sos = [],
    sis = [],
    bso, u_m = [64, 32, 16, 8, 4, 2, 1],
    lgbsc = 1,
    lgcsc = 1,
    lb_fr = 0,
    login_fr = 0,
    llgmtm = Date.now(),
    login_iv = -1;

function loginFade() {
    var b = Date.now(),
        h = (b - llgmtm) / 25;
    llgmtm = b;
    login_fr += .05 * h;
    choosing_skin && (login_fr += .06 * h);
    1 <= login_fr ? (login_fr = 1, login.style.display = "none", cstx.style.display = "none", fbh.style.display = "none", twth.style.display = "none", cskh.style.display = "none", chbgdiv.style.display = "none", plq.style.display = "none", clq.style.display = "none", login.style.opacity = 1, cstx.style.opacity = 1, fbh.style.opacity = 1, twth.style.opacity = 1, cskh.style.opacity = 1, chbgdiv.style.opacity = 1, plq.style.opacity = 1, clq.style.opacity = 1, pskh.style.opacity = 1, nskh.style.opacity =
        1, skodiv.style.opacity = 1, tip_fr = -1, tips.style.display = "none", mc.style.opacity = 1, loch.style.opacity = 1, clearInterval(login_iv), login_iv = -1, -1 != showlogo_iv && (ncka = lgss = lga = 1, showLogo(!0), -1 != showlogo_iv && (clearInterval(showlogo_iv), showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2), b = Math.round(lgbsc * lgcsc * 1E5) / 1E5, trf(login, "scale(" + b + "," + b + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity = 1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, chbgdiv.style.opacity = 1 - login_fr,plq.style.opacity =
        1 - login_fr, clq.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr)
}
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + "Save" + String.fromCharCode(160), 47, 20, 34, 1),
    skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
    if (playing) {
        try {
            localStorage.snakercv = snake.rcv
        } catch (b) {}
        playing = connected = !1;
        dead_mtm = Date.now() - 5E3
    }
};
var play_btn = o = makeTextBtn(String.fromCharCode(160) + "Play" + String.fromCharCode(160), 47, 20, 34, 1),
    pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";


var playh = document.getElementById("playh");
playh.style.opacity = 0;

//Start 1
pbdiv.style.marginBottom = "0px";



var children = document.getElementById("login").children;
var nickdiv = document.getElementById("login").children[3];
for(var forcount = 0; forcount < children.length; forcount++){
    if(children[forcount].id == null){
        nickdiv = children[forcount];
    }
}


playh.innerHTML = '<div style="margin-left: auto; margin-right: auto; text-align: center;"> <div style="width: 244px; margin-top: 0px; background: rgb(76, 68, 124) none repeat scroll 0% 0%; box-shadow: 0px 6px 50px rgb(0, 0, 0); opacity: 1;" id="ipdiv" class="taho"> <input maxlength="24" placeholder="IP Address:Port" style="width: 220px; height: 24px;" id="ipaddr" class="sumsginp"> </div> <div class="sadg1" style="position: relative; width: 148px; color: rgb(255, 255, 255); font-weight: bold; text-align: center; font-family: Arial,&quot;Helvetica Neue&quot;,Helvetica,sans-serif; font-size: 20px; cursor: pointer; height: 47px; line-height: 47px; box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.75); border-radius: 34px; display: inline-block; margin-top: 20px; margin-bottom: 0px; opacity: 1;"><div style="position: absolute; top: 0px; left: 0px; width: 148px; height: 47px; border-radius: 34px; color: rgb(255, 255, 255); opacity: 0.9;" class="nsi" onclick="connectTo()">&nbsp;Connect&nbsp;</div></div></div></div>';

nickdiv.appendChild(pbdiv); //Nickdiv

//End 1

var tips = document.getElementById("tips"),
    tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"],
    tip_pos = -1,
    tip_fr = 1.9;
o.elem.onclick = function() {
    play_btn.disabled || -1 != dead_mtm || (play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), nick.disabled = !0, connect())
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
    sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
    if (!save_btn.disabled) {
        var b = asciize(victory.value);
        140 < b.length && (b = b.substr(0, 140));
        if (5 <= protocol_version) {
            var h = new Uint8Array(2 + b.length);
            h[0] = 255;
            h[1] = 118;
            for (var c = 0; c < b.length; c++) h[c + 2] = b.charCodeAt(c)
        } else
            for (h = new Uint8Array(1 + b.length), h[0] = 118, c = 0; c < b.length; c++) h[c + 1] = b.charCodeAt(c);
        ws.send(h);
        save_btn.setEnabled(!1);
        victory.disabled = !0
    }
};
var wide = !1,
    mww = 850,
    mhh = 700,
    mwwp50 = mww + 50,
    mhhp50 = mhh + 50,
    mwwp150 = mww + 150,
    mhhp150 = mhh + 150,
    mww2 = mww / 2,
    mhh2 = mhh / 2,
    mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
lbh.textContent = "Leaderboard";
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "10px"; //4 to 10px
lbf.style.width = "200px";
lbf.style.height = "72px"; //37 to 72px
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img"),
    lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
var grad = document.createElement("canvas");
grad.width = 80;
grad.height = 1;
ctx = grad.getContext("2d");
map = ctx.getImageData(0, 0, 80, 1);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4) imgd[p] = 22, imgd[p + 1] = 28, imgd[p + 2] = 34, imgd[p + 3] = Math.floor(255 * (1 - p / l));
ctx.putImageData(map, 0, 0);
var e1 = document.createElement("canvas");
e1.width = 80;
e1.height = 850;
var ectx = e1.getContext("2d"),
    ep = ectx.createPattern(grad, "repeat");
ectx.fillStyle = ep;
ectx.fillRect(0, 0, 80, 850);
for (p = 0; p < l; p += 4) imgd[p] = 22, imgd[p + 1] = 28, imgd[p + 2] = 34, imgd[p + 3] = Math.floor(255 * p / l);
ctx.putImageData(map, 0, 0);
var e2 = document.createElement("canvas");
e2.width = 80;
e2.height = 850;
ectx = e2.getContext("2d");
ep = ectx.createPattern(grad, "repeat");
ectx.fillStyle = ep;
ectx.fillRect(0, 0, 80, 850);
grad.width = 1;
grad.height = 80;
map = ctx.getImageData(0, 0, 1, 80);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4) imgd[p] = 22, imgd[p + 1] = 28, imgd[p + 2] = 34, imgd[p + 3] = Math.floor(255 * (1 - p / l));
ctx.putImageData(map, 0, 0);
var e3 = document.createElement("canvas");
e3.width = 850;
e3.height = 80;
ectx = e3.getContext("2d");
ep = ectx.createPattern(grad, "repeat");
ectx.fillStyle = ep;
ectx.fillRect(0, 0, 850, 80);
for (p = 0; p < l; p += 4) imgd[p] = 22, imgd[p + 1] = 28, imgd[p + 2] = 34, imgd[p + 3] = Math.floor(255 * p / l);
ctx.putImageData(map, 0, 0);
var e4 = document.createElement("canvas");
e4.width = 850;
e4.height = 80;
ectx = e4.getContext("2d");
ep = ectx.createPattern(grad, "repeat");
ectx.fillStyle = ep;
ectx.fillRect(0, 0, 850, 80);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas"),
    bgp2 = null,
    bgw2 = 599,
    bgh2 = 519,
    ii = document.createElement("img");
ii.onload = function() {
    bgi2.width = bgw2;
    bgi2.height = bgh2;
    var b = bgi2.getContext("2d");
    try {
        b.drawImage(this, 0, 0), bgp2 = b.createPattern(bgi2, "repeat")
    } catch (h) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
    if (ggbg) {
        gbgmc || (gbgmc = document.createElement("canvas"));
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var b = gbgmc.getContext("2d");
        try {
            b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (h) {}
    }
}
var ggbg = !1,
    gbgmc = null,
    gbgi = document.createElement("img");
gbgi.onload = function() {
    ggbg = !0;
    rdgbg()
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
    return {
        os: [],
        end_pos: 0,
        add: function(b) {
            this.end_pos == this.os.length ? this.os.push(b) : this.os[this.end_pos] = b;
            this.end_pos++
        },
        get: function() {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var b = this.os[this.end_pos];
                this.os[this.end_pos] = null;
                return b
            }
            return null
        }
    }
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, sgsc = .9,
    gsc = sgsc,
    nsep = 4.5,
    tasty = 0,
    rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1,
    rank = 0,
    best_rank = 999999999,
    snake_count = 0,
    biggest_snake_count = 0,
    cm1, snakes = [],
    foods = [],
    foods_c = 0,
    preys = [],
    points_dp = newDeadpool(),
    os = {},
    lsang = 0,
    want_e = !1,
    last_e_mtm = 0,
    sectors = [],
    sector_size = 480,
    sector_count_along_edge = 130,
    spangdv = 4.8,
    nsp1 = 4.25,
    nsp2 = .5,
    nsp3 = 12,
    mamu = .033,
    mamu2 = .028,
    cst = .43,
    lfas = [],
    lfc = 128;
for (i = 0; i < lfc; i++) j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))), lfas.push(j);
var rfas = [],
    rfc = 43;
for (i = 0; i < rfc; i++) j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))), rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++) j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))), fas.push(j);
    fao["a" + fc] = fas
}
var hfc = 92,
    hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))), hfas[i] = j;
var afas = [],
    afc = 26;
for (i = 0; i < afc; i++) j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))), afas.push(j);
var nlc = 48,
    vfas = [],
    vfc = 62,
    fvpos = 0,
    fvtg = 0,
    ovxx, ovyy, fvxs = [],
    fvys = [];
for (i = 0; i < vfc; i++) j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))), j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j), vfas.push(j), fvxs.push(0), fvys.push(0);

function pwr(b) {
    for (var h = new Float32Array(125), c = 0; 125 > c; c++) h[c] = Math.pow(b, c);
    return h
}

function pca(b) {
    for (var h = new Float32Array(125), c = 0; 125 > c; c++) h[c] = 1 - Math.pow(1 - b, c);
    return h
}
var p1a = pca(.1),
    p35a = pca(.35),
    pwr4 = pwr(.4),
    pwr35 = pwr(.35),
    pwr93 = pwr(.93);

function setMscps(b) {
    if (b != mscps) {
        mscps = b;
        fmlts = [];
        fpsls = [];
        for (b = 0; b <= mscps; b++) b >= mscps ? fmlts.push(fmlts[b - 1]) : fmlts.push(Math.pow(1 - b / mscps, 2.25)), 0 == b ? fpsls.push(0) : fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
        var h = fmlts[fmlts.length - 1],
            c = fpsls[fpsls.length - 1];
        for (b = 0; 2048 > b; b++) fmlts.push(h), fpsls.push(c)
    }
}

function startShowGame() {
    llgmtm = Date.now();
    login_iv = setInterval("loginFade()", 25);
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    lb_fr = -1
}

function setSkin(b, h) {
    b.rcv = h;
    b.er = 6;
    b.ec = "#ffffff";
    b.ppa = 1;
    b.antenna = !1;
    if (19 == h) {
        b.ec = "#ee5500";
        b.er = 4.5;
        b.ppa = 0;
        b.antenna = !0;
        b.atx = new Float32Array(10);
        b.aty = new Float32Array(10);
        b.atvx = new Float32Array(10);
        b.atvy = new Float32Array(10);
        b.atax = new Float32Array(10);
        b.atay = new Float32Array(10);
        for (var c = 9; 0 <= c; c--) b.atx[c] = b.xx, b.aty[c] = b.yy
    }
    c = null;
    9 == h ? c = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == h ? c = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == h ? c = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 ==
    h ? c = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == h ? c = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == h ? c = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == h ? c = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == h ? c = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == h ? c = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == h ? c = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == h ? c = [9] : 20 == h ? c = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == h ? c = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : h %= 9;
    c && (h = c[0]);
    b.rbcs = c;
    b.cv = h
}

function newSnake(b, h, c, f, C, q) {
    var e = {};
    e.id = b;
    e.xx = h;
    e.yy = c;
    setSkin(e, f);
    f = e.cv;
    e.fnfr = 0;
    e.na = 1;
    e.chl = 0;
    e.tsp = 0;
    e.sfr = 0;
    e.rr = Math.min(255, rrs[f] + Math.floor(20 * Math.random()));
    e.gg = Math.min(255, ggs[f] + Math.floor(20 * Math.random()));
    e.bb = Math.min(255, bbs[f] + Math.floor(20 * Math.random()));
    b = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
    h = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
    b = b.substr(b.length - 2);
    h = h.substr(h.length -
        2);
    c = c.substr(c.length - 2);
    e.cs = "#" + b + h + c;
    b = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.rr))).toString(16);
    h = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.bb))).toString(16);
    b = b.substr(b.length - 2);
    h = h.substr(h.length - 2);
    c = c.substr(c.length - 2);
    e.cs04 = "#" + b + h + c;
    b = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.rr)))).toString(16);
    h = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.gg)))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.5 *
            (255 + e.bb)))).toString(16);
    b = b.substr(b.length - 2);
    h = h.substr(h.length - 2);
    c = c.substr(c.length - 2);
    e.csw = "#" + b + h + c;
    e.sc = 1;
    e.ssp = nsp1 + nsp2 * e.sc;
    e.fsp = e.ssp + .1;
    e.msp = nsp3;
    e.fxs = new Float32Array(rfc);
    e.fys = new Float32Array(rfc);
    e.fchls = new Float32Array(rfc);
    e.fpos = 0;
    e.ftg = 0;
    e.fx = 0;
    e.fy = 0;
    e.fchl = 0;
    e.fas = new Float32Array(afc);
    e.fapos = 0;
    e.fatg = 0;
    e.fa = 0;
    e.ehang = C;
    e.wehang = C;
    e.ehl = 1;
    e.msl = 42;
    e.fam = 0;
    e.ang = C;
    e.eang = C;
    e.wang = C;
    e.rex = 0;
    e.rey = 0;
    e.sp = 2;
    q ? (e.lnp = q[q.length - 1], e.pts = q, e.sct = q.length, q[0].dying && e.sct--) :
        (e.pts = [], e.sct = 0);
    e.flpos = 0;
    e.fls = new Float32Array(lfc);
    e.fl = 0;
    e.fltg = 0;
    e.tl = e.sct + e.fam;
    e.cfl = e.tl;
    e.scang = 1;
    e.dead_amt = 0;
    e.alive_amt = 0;
    snakes.splice(0, 0, e);
    return os["s" + e.id] = e
}

function snl(b) {
    var h = b.tl;
    b.tl = b.sct + b.fam;
    for (var h = b.tl - h, c = b.flpos, f = 0; f < lfc; f++) b.fls[c] -= h * lfas[f], c++, c >= lfc && (c = 0);
    b.fl = b.fls[b.flpos];
    b.fltg = lfc;
    b == snake && (wumsts = !0)
}

function newFood(b, h, c, f, C, q) {
    var e = {};
    e.id = b;
    e.xx = h;
    e.yy = c;
    e.rx = h;
    e.ry = c;
    e.rsp = C ? 2 : 1;
    e.cv = q;
    e.rad = 1E-5;
    e.sz = f;
    b = per_color_imgs[e.cv];
    e.cv2 = Math.floor(b.ic * gsc * e.sz / 16.5);
    0 > e.cv2 && (e.cv2 = 0);
    e.cv2 >= b.ic && (e.cv2 = b.ic - 1);
    testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2), e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2, console.log("biggest cv2 seen: " + e.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
    e.fi = b.imgs[e.cv2];
    e.fw = b.fws[e.cv2];
    e.fh = b.fhs[e.cv2];
    e.fw2 = b.fw2s[e.cv2];
    e.fh2 = b.fh2s[e.cv2];
    e.ofi = b.oimgs[e.cv2];
    e.ofw = b.ofws[e.cv2];
    e.ofh = b.ofhs[e.cv2];
    e.ofw2 = b.ofw2s[e.cv2];
    e.ofh2 = b.ofh2s[e.cv2];
    e.gcv = Math.floor(b.ic * gsc * (.25 + .75 * e.sz / 16.5));
    0 > e.gcv && (e.gcv = 0);
    e.gcv >= b.ic && (e.gcv = b.ic - 1);
    e.gfi = b.gimgs[e.gcv];
    e.gfw = b.gfws[e.gcv];
    e.gfh = b.gfhs[e.gcv];
    e.gfw2 = b.gfw2s[e.gcv];
    e.gfh2 = b.gfh2s[e.gcv];
    e.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * e.sz / 16.5));
    0 > e.g2cv && (e.g2cv = 0);
    e.g2cv >= b.ic && (e.g2cv = b.ic - 1);
    e.g2fi = b.gimgs[e.g2cv];
    e.g2fw = b.gfws[e.g2cv];
    e.g2fh = b.gfhs[e.g2cv];
    e.g2fw2 = b.gfw2s[e.g2cv];
    e.g2fh2 = b.gfh2s[e.g2cv];
    e.fr = 0;
    e.gfr = 64 * Math.random();
    e.gr = .65 + .1 * e.sz;
    e.wsp = .0225 * (2 * Math.random() - 1);
    e.eaten_fr = 0;
    e.eaten_fr4 = 0;
    return foods[foods_c++] = e
}

function newPrey(b, h, c, f, C, q, e, y, E) {
    var u = {};
    u.id = b;
    u.xx = h;
    u.yy = c;
    u.rad = 1E-5;
    u.sz = f;
    u.cv = C;
    u.dir = q;
    u.wang = e;
    u.ang = y;
    u.sp = E;
    u.fr = 0;
    u.gfr = 64 * Math.random();
    u.gr = .5 + .15 * Math.random() + .1 * u.sz;
    u.rr = Math.min(255, rrs[C]);
    u.gg = Math.min(255, ggs[C]);
    u.bb = Math.min(255, bbs[C]);
    b = "00" + Math.min(255, Math.max(0, Math.round(u.rr))).toString(16);
    h = "00" + Math.min(255, Math.max(0, Math.round(u.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(u.bb))).toString(16);
    b = b.substr(b.length - 2);
    h = h.substr(h.length - 2);
    c =
        c.substr(c.length - 2);
    u.cs = "#" + b + h + c;
    u.cv2 = Math.floor(per_color_imgs[u.cv].pr_imgs.length * gsc * u.sz / 9);
    0 > u.cv2 && (u.cv2 = 0);
    u.cv2 >= per_color_imgs[u.cv].pr_imgs.length && (u.cv2 = per_color_imgs[u.cv].pr_imgs.length - 1);
    u.fi = per_color_imgs[u.cv].pr_imgs[u.cv2];
    u.fw = per_color_imgs[u.cv].pr_fws[u.cv2];
    u.fh = per_color_imgs[u.cv].pr_fhs[u.cv2];
    u.fw2 = per_color_imgs[u.cv].pr_fw2s[u.cv2];
    u.fh2 = per_color_imgs[u.cv].pr_fh2s[u.cv2];
    u.gcv = per_color_imgs[u.cv].gimgs.length - 1;
    u.gfi = per_color_imgs[u.cv].gimgs[u.gcv];
    u.gfw =
        per_color_imgs[u.cv].gfws[u.gcv];
    u.gfh = per_color_imgs[u.cv].gfhs[u.gcv];
    u.gfw2 = per_color_imgs[u.cv].gfw2s[u.gcv];
    u.gfh2 = per_color_imgs[u.cv].gfh2s[u.gcv];
    u.fxs = new Float32Array(rfc);
    u.fys = new Float32Array(rfc);
    u.fpos = 0;
    u.ftg = 0;
    u.fx = 0;
    u.fy = 0;
    u.eaten = !1;
    u.eaten_fr = 0;
    u.eaten_fr4 = 0;
    preys.push(u);
    return u
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52,
    komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
    var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 4 >= v ? 1 - v / 4 : 0,
        v = .8 * v;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    xx >= sz && (xx = 0, yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62,
    ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15, v *= .1, 0 > v && (v = -v), 1 < v && (v = 1), v = 1 - v, v *= .25, imgd[p] = imgd[p + 1] = imgd[p + 2] = 0, imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 34;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(17, 17, 1, 17, 17, 16);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 34, 34);
var colc;
testing && (colc = document.createElement("canvas"), colc.width = 256, colc.height = 66, colc.style.position = "fixed", colc.style.left = "0px", colc.style.top = "0px", colc.style.zIndex = 2147483647, document.body.appendChild(colc));
var pbx = new Float32Array(32767),
    pby = new Float32Array(32767),
    pba = new Float32Array(32767),
    pbu = new Uint8Array(32767),
    per_color_imgs = [],
    rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40,  100, 120, 72, 160,  255, 56,  56],
    ggs = [128, 153, 208, 255, 238, 160, 144, 64,  48,  255, 153, 80, 192, 136, 117, 134, 84,  80,  224, 68,  68],
    bbs = [255, 255, 208, 128, 112, 96,  144, 64,  224, 255, 255, 80, 80,  96,  255, 255, 255, 255, 64,  255, 255],
    max_skin_cv = 21;
for (i = 0; i < rrs.length; i++) {
    o = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var rs = "00" + rrs[i].toString(16),
        gs = "00" + ggs[i].toString(16),
        bs = "00" + bbs[i].toString(16),
        rs = rs.substr(rs.length - 2),
        gs = gs.substr(gs.length - 2),
        bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var sz = 62,
        kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    ctx = kfmc.getContext("2d");
    map = ctx.getImageData(0, 0, sz, sz);
    imgd = map.data;
    l = imgd.length;
    for (p =
             yy = xx = 0; p < l; p += 4) v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16), v = 15 >= v ? 1 - v / 15 : 0, imgd[p] = rrs[i], imgd[p + 1] = ggs[i], imgd[p + 2] = bbs[i], imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    var ksz = 48,
        ksz2 = ksz / 2,
        kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    map = ctx.getImageData(0, 0, ksz, ksz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var kmcs = [];
    for (j =
             0; 7 > j; j++) {
        for (p = xx = yy = 0; p < l; p += 4) {
            var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
                v = v + .375 * (v2 - v),
                v = v * (1.22 - .44 * j / 6);
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rrs[i] * v)));
            imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(ggs[i] * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bbs[i] * v)));
            xx++;
            xx >= ksz && (xx = 0, yy++)
        }
        ctx.putImageData(map, 0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height =
            ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (10 == i)
            for (k = -1; 1 >= k; k++) {
                var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13,
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1, ctx2.lineTo(xx, yy);
                ctx2.fill()
            } else if (19 ==
            i)
            for (k = -2; 2 >= k; k++) {
                tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55, ctx2.lineTo(xx, yy);
                ctx2.fill();
                ctx2.restore()
            } else if (20 == i)
            for (k = -1.5; 1.5 >=
            k; k++) {
                tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++) xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8, ctx2.lineTo(xx, yy);
                ctx2.fill();
                ctx2.restore()
            }
        kmcs.push(kmc2)
    }
    o.kmcs = kmcs;
    per_color_imgs.push(o);
    for (j = 2.8; 18.8 >= j; j += 1) {
        var cc = document.createElement("canvas"),
            sz = Math.ceil(2.5 * j + 28);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        ctx.fillStyle = o.cs;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#" + rs + gs + bs;
        ctx.globalAlpha = .8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fill();
        o.imgs.push(cc);
        o.fws.push(sz);
        o.fhs.push(sz);
        o.fw2s.push(sz / 2);
        o.fh2s.push(sz / 2);
        sz = Math.ceil(8 * j + 6);
        cc = document.createElement("canvas");
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        g = ctx.createRadialGradient(sz /
            2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        o.gimgs.push(cc);
        o.gfws.push(sz);
        o.gfhs.push(sz);
        o.gfw2s.push(sz / 2);
        o.gfh2s.push(sz / 2);
        cc = document.createElement("canvas");
        sz = Math.ceil(1.3 * j + 6);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        var eam = .2,
            g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] +
            ", 1)");
        g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
        g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.globalAlpha = 1;
        ctx.stroke();
        o.oimgs.push(cc);
        o.ofws.push(sz);
        o.ofhs.push(sz);
        o.ofw2s.push(sz / 2);
        o.ofh2s.push(sz / 2)
    }
    o.ic = o.imgs.length;
    o.pr_imgs = [];
    o.pr_fws = [];
    o.pr_fhs = [];
    o.pr_fw2s = [];
    o.pr_fh2s = [];
    for (j = 3; 24 >= j; j += 1) cc = document.createElement("canvas"), sz = Math.ceil(2 * j + 38), cc.width = cc.height = sz, ctx = cc.getContext("2d"), ctx.fillStyle = o.cs, ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2), ctx.shadowBlur = 22, ctx.shadowOffsetY = 0, ctx.shadowColor = "#" + rs + gs + bs, ctx.fill(), ctx.fill(), o.pr_imgs.push(cc), o.pr_fws.push(sz), o.pr_fhs.push(sz), o.pr_fw2s.push(sz / 2), o.pr_fh2s.push(sz / 2)
}
if (testing)
    for (ctx = colc.getContext("2d"), ctx.fillStyle = "#000000", ctx.fillRect(0, 0, colc.width, colc.height), ctx.fillStyle = "#FFFFFF", ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif", ctx.textBaseline = "top", ctx.textAlign = "center", i = yy = xx = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i],
            kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        xx > colc.width - 16 && (xx =
            0, yy += 28)
    }
var view_xx = 0,
    view_yy = 0,
    view_ang = 0,
    view_dist = 0,
    fvx = 0,
    fvy = 0,
    xm = 0,
    ym = 0,
    lsxm = 0,
    lsym = 0,
    snake = null,
    dhx, dhy, hsz, fr = 0,
    lfr = 0,
    ltm = Date.now(),
    vfr = 0,
    vfrb = 0,
    fr2 = 0,
    lfr2 = 0,
    vfrb2 = 0,
    cptm = 0,
    lptm = 0,
    lpstm = 0,
    last_ping_mtm = 0,
    lagging = !1,
    lag_mult = 1,
    wfpr = !1,
    high_quality = !0,
    gla = 1,
    wdfg = 0,
    qsm = 1,
    playing = !1,
    connected = !1,
    want_close_socket = !1,
    want_victory_message = !1,
    want_victory_focus = !1,
    want_hide_victory = 0,
    hvfr = 0,
    dead_mtm = -1,
    at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
    for (xx = 0; 256 > xx; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0,
    kd_r_frb = 0,
    kd_l = !1,
    kd_r = !1,
    kd_u = !1,
    lkstm = 0,
    oef = function() {
        var b = Date.now();
        vfr = (b - ltm) / 8;
        ltm = b;
        choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (lagging = !0), lagging ? (lag_mult *= .85, .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05, 1 <= lag_mult && (lag_mult = 1)));
        120 < vfr && (vfr = 120);
        vfr *= lag_mult;
        etm *= lag_mult;
        lfr = fr;
        fr += vfr;
        vfrb = Math.floor(fr) - Math.floor(lfr);
        lfr2 = fr2;
        fr2 += 2 * vfr;
        vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
        kd_l && (kd_l_frb += vfrb);
        kd_r && (kd_r_frb += vfrb);
        if (-1 != play_btn_click_mtm &&
            6666 < b - play_btn_click_mtm) {
            var h = document.createElement("img"),
                c = [];
            c.push("bso=" + encodeURIComponent(bso));
            if (bso)
                for (var f in bso) c.push(f + "=" + encodeURIComponent(bso[f]));
            c.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
            c.push("soslen=" + sos.length);
            c.push("sislen=" + sis.length);
            h.src = "http://slither.io/cnc.jpg?" + c.join("&");
            play_btn_click_mtm = -1
        }
        waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
        connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0), connect());
        if (choosing_skin) {
            for (h = snakes.length - 1; 0 <= h; h--)
                for (c = snakes[h], f = c.pts.length - 1; 0 <= f; f--) c.pts[f].yy = grd / 2 + 15 * Math.cos(f / 4 + fr / 19) * (1 - f / c.pts.length);
            view_xx -= vfr
        }
        playing && (high_quality ? (1 > gla && (gla += .0075 * vfr, 1 < gla && (gla = 1)), 1 < qsm && (qsm -= 4E-5 * vfr, 1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr, 0 > gla && (gla = 0)), 1.6 > qsm && (qsm += 4E-5 * vfr, 1.6 < qsm && (qsm = 1.6))));
        0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr, 1 <= hvfr ? (hvfr = 0, want_hide_victory = 2, victory_holder.style.opacity = 1, saveh.style.opacity = 1, victory_holder.style.display =
            "none", saveh.style.display = "none", nick_holder.style.opacity = 0, playh.style.opacity = 0, smh.style.opacity = 0, nick_holder.style.display = "inline-block", playh.style.display = "block", smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr, saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr, 1 <= hvfr && (hvfr = 1, want_hide_victory = 0), nick_holder.style.opacity = hvfr, playh.style.opacity = hvfr, smh.style.opacity = hvfr));
        1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr, tip_fr >= pi2 && (tip_fr -= pi2, tip_pos++,
        tip_pos >= tipss.length && (tip_pos = 0), tips.textContent = tipss[tip_pos]), f = .5 - .5 * Math.cos(tip_fr), tips.style.opacity = Math.round(1E5 * Math.pow(f, .5)) / 1E5);
        if (-1 == dead_mtm) - 1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr, 1 <= lb_fr && (lb_fr = 1), lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
        else if (1600 < b - dead_mtm) {
            if (-1 == login_iv) {
                login_iv = -2;
                login.style.display = "inline";
                try {
                    "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display =
                        "inline"
                } catch (e) {}
                fbh.style.display = "inline";
                chbgdiv.style.display = "inline";
                twth.style.display = "inline";
                plq.style.display = "inline";
                clq.style.display = "inline";
                want_victory_focus && (want_victory_focus = !1, victory.focus())
            } - 2 == login_iv && (login_fr -= .004 * vfr, choosing_skin && (login_fr -= .007 * vfr), lb_fr = login_fr, 0 >= login_fr && (login_fr = 0, dead_mtm = -1, nick.disabled = !1, nick.focus(), lb_fr = -1, playing = !1, choosing_skin && (choosing_skin = !1, resetGame(), pskh.style.display = "none", nskh.style.display = "none", skodiv.style.display = "none")), pbdiv.style.opacity =
                1 - .5 * Math.max(0, Math.min(1, 6 * login_fr)), lgcsc = 1 + .1 * Math.pow(login_fr, 2), h = Math.round(lgbsc * lgcsc * 1E5) / 1E5, 1 == h ? trf(login, "") : trf(login, "scale(" + h + "," + h + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity = 1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, chbgdiv.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr,
                lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
        }
        want_close_socket && -1 == dead_mtm && (want_close_socket = !1, ws && (ws.close(), ws = null, playing = connected = !1), resetGame());
        want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
        connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < b - lkstm && (lkstm = b, 0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb, kd_r_frb = 0), 0 < kd_l_frb && kd_r_frb > kd_l_frb && (kd_r_frb -= kd_l_frb, kd_l_frb = 0), 0 < kd_l_frb ?
            (v = kd_l_frb, 127 < v && (v = 127), kd_l_frb -= v, 5 <= protocol_version ? (h = new Uint8Array(2), h[0] = 252) : (h = new Uint8Array(2), h[0] = 108), h[1] = v, ws.send(h), snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb, 127 < v && (v = 127), kd_r_frb -= v, 5 <= protocol_version ? (v += 128, h = new Uint8Array(2), h[0] = 252) : (h = new Uint8Array(2), h[0] = 114), h[1] = v, snake.eang += mamu * v * snake.scang * snake.spang, ws.send(h))), !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = b, wfpr = !0, h = new Uint8Array(1), h[0] = 5 <= protocol_version ? 251 : 112, ws.send(h),
            lpstm = b));
        null != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(), myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px", myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
        if (1E3 < b - lrd_mtm) {
            if (console && console.log && (console.log("FPS: " + fps), testing)) {
                c = [];
                trdps += rdps;
                playing && tcsecs++;
                c.push("FPS: " + fps);
                c.push("sectors: " + sectors.length);
                c.push("foods: " + foods_c);
                c.push("bytes/sec: " + rdps);
                c.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
                c.push("");
                for (h = f = 0; h < rdpspc.length; h++) 0 <=
                rdpspc[h] && (f += rdpspc[h]);
                for (h = 0; h < rdpspc.length; h++) 0 <= rdpspc[h] && c.push(String.fromCharCode(h) + ": " + rdpspc[h] + " (" + Math.round(rdpspc[h] / f * 1E3) / 10 + "%)");
                c.push("total: " + f);
                maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
                c.push("");
                for (h = 1; h < pfs.length; h++) 0 != pfs[h] && (c.push(h + ": " + Math.round(1E3 * pfs[h]) / 1E3), pfs[h] = 0);
                pft = 0;
                pfd.innerHTML = c.join("<br>")
            }
            playing && (32 >= fps ? high_quality && (wdfg++, 1 <= wdfg && (high_quality = !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--, 0 >= wdfg && (high_quality = !0)));
            wangnuc =
                angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
            lrd_mtm = Date.now()
        }
        etm *= Math.pow(.993, vfrb);
        if (null != snake) {
            if (xm != lsxm || ym != lsym) want_e = !0;
            want_e && 100 < b - last_e_mtm && (want_e = !1, last_e_mtm = b, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, h = new Uint8Array(1), h[0] = sang & 255, lpstm = b, ws.send(h.buffer))) : (sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang,
                h = new Uint8Array(4), h[0] = 101, h[1] = sang >> 16 & 255, h[2] = sang >> 8 & 255, h[3] = sang & 255, lpstm = b, ws.send(h.buffer))))
        }
        var C;
        if (!choosing_skin)
            for (h = snakes.length - 1; 0 <= h; h--) {
                c = snakes[h];
                C = mamu * vfr * c.scang * c.spang;
                f = c.sp * vfr / 4;
                f > c.msl && (f = c.msl);
                if (!c.dead) {
                    c.tsp != c.sp && (c.tsp < c.sp ? (c.tsp += .3 * vfr, c.tsp > c.sp && (c.tsp = c.sp)) : (c.tsp -= .3 * vfr, c.tsp < c.sp && (c.tsp = c.sp)));
                    c.tsp > c.fsp && (c.sfr += (c.tsp - c.fsp) * vfr * .021);
                    if (0 < c.fltg)
                        for (b = vfrb, b > c.fltg && (b = c.fltg), c.fltg -= b, qq = 0; qq < b; qq++) c.fl = c.fls[c.flpos], c.fls[c.flpos] =
                            0, c.flpos++, c.flpos >= lfc && (c.flpos = 0);
                    else 0 == c.fltg && (c.fltg = -1, c.fl = 0);
                    c.cfl = c.tl + c.fl
                }
                if (1 == c.dir) {
                    c.ang -= C;
                    if (0 > c.ang || c.ang >= pi2) c.ang %= pi2;
                    0 > c.ang && (c.ang += pi2);
                    b = (c.wang - c.ang) % pi2;
                    0 > b && (b += pi2);
                    b > Math.PI && (b -= pi2);
                    0 < b && (c.ang = c.wang, c.dir = 0)
                } else if (2 == c.dir) {
                    c.ang += C;
                    if (0 > c.ang || c.ang >= pi2) c.ang %= pi2;
                    0 > c.ang && (c.ang += pi2);
                    b = (c.wang - c.ang) % pi2;
                    0 > b && (b += pi2);
                    b > Math.PI && (b -= pi2);
                    0 > b && (c.ang = c.wang, c.dir = 0)
                } else c.ang = c.wang;
                1 != c.ehl && (c.ehl += .03 * vfr, 1 <= c.ehl && (c.ehl = 1));
                var q = c.pts[c.pts.length -
                1];
                c.wehang = Math.atan2(c.yy + c.fy - q.yy - q.fy + q.eby * (1 - c.ehl), c.xx + c.fx - q.xx - q.fx + q.ebx * (1 - c.ehl));
                c.dead || c.ehang == c.wehang || (b = (c.wehang - c.ehang) % pi2, 0 > b && (b += pi2), b > Math.PI && (b -= pi2), 0 > b ? c.edir = 1 : 0 < b && (c.edir = 2));
                if (1 == c.edir) {
                    c.ehang -= .1 * vfr;
                    if (0 > c.ehang || c.ehang >= pi2) c.ehang %= pi2;
                    0 > c.ehang && (c.ehang += pi2);
                    b = (c.wehang - c.ehang) % pi2;
                    0 > b && (b += pi2);
                    b > Math.PI && (b -= pi2);
                    0 < b && (c.ehang = c.wehang, c.edir = 0)
                } else if (2 == c.edir) {
                    c.ehang += .1 * vfr;
                    if (0 > c.ehang || c.ehang >= pi2) c.ehang %= pi2;
                    0 > c.ehang && (c.ehang += pi2);
                    b = (c.wehang - c.ehang) % pi2;
                    0 > b && (b += pi2);
                    b > Math.PI && (b -= pi2);
                    0 > b && (c.ehang = c.wehang, c.edir = 0)
                }
                c.dead || (c.xx += Math.cos(c.ang) * f, c.yy += Math.sin(c.ang) * f, c.chl += f / c.msl);
                if (0 < vfrb) {
                    for (f = c.pts.length - 1; 0 <= f; f--) q = c.pts[f], q.dying && (q.da += .0015 * vfrb, 1 < q.da && (c.pts.splice(f, 1), q.dying = !1, points_dp.add(q)));
                    for (f = c.pts.length - 1; 0 <= f; f--)
                        if (q = c.pts[f], 0 < q.eiu) {
                            fy = fx = 0;
                            for (qq = cm1 = q.eiu - 1; 0 <= qq; qq--) q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + vfrb, b = q.efs[qq], b >= hfc ? (qq != cm1 && (q.exs[qq] = q.exs[cm1], q.eys[qq] =
                                q.eys[cm1], q.efs[qq] = q.efs[cm1], q.ems[qq] = q.ems[cm1]), q.eiu--, cm1--) : (fx += q.exs[qq] * hfas[b], fy += q.eys[qq] * hfas[b]);
                            q.fx = fx;
                            q.fy = fy
                        }
                }
                b = 2.3 * Math.cos(c.eang);
                f = 2.3 * Math.sin(c.eang);
                c.rex < b && (c.rex += vfr / 6, c.rex >= b && (c.rex = b));
                c.rey < f && (c.rey += vfr / 6, c.rey >= f && (c.rey = f));
                c.rex > b && (c.rex -= vfr / 6, c.rex <= b && (c.rex = b));
                c.rey > f && (c.rey -= vfr / 6, c.rey <= f && (c.rey = f));
                if (0 < vfrb) {
                    if (0 < c.ftg)
                        for (b = vfrb, b > c.ftg && (b = c.ftg), c.ftg -= b, qq = 0; qq < b; qq++) c.fx = c.fxs[c.fpos], c.fy = c.fys[c.fpos], c.fchl = c.fchls[c.fpos], c.fxs[c.fpos] =
                            0, c.fys[c.fpos] = 0, c.fchls[c.fpos] = 0, c.fpos++, c.fpos >= rfc && (c.fpos = 0);
                    else 0 == c.ftg && (c.ftg = -1, c.fx = 0, c.fy = 0, c.fchl = 0);
                    if (0 < c.fatg)
                        for (b = vfrb, b > c.fatg && (b = c.fatg), c.fatg -= b, qq = 0; qq < b; qq++) c.fa = c.fas[c.fapos], c.fas[c.fapos] = 0, c.fapos++, c.fapos >= afc && (c.fapos = 0);
                    else 0 == c.fatg && (c.fatg = -1, c.fa = 0)
                }
                c.dead ? (c.dead_amt += .02 * vfr, 1 <= c.dead_amt && snakes.splice(h, 1)) : 1 != c.alive_amt && (c.alive_amt += .015 * vfr, 1 <= c.alive_amt && (c.alive_amt = 1))
            }
        for (h = preys.length - 1; 0 <= h; h--) {
            q = preys[h];
            C = mamu2 * vfr;
            f = q.sp * vfr / 4;
            if (0 <
                vfrb)
                if (0 < q.ftg)
                    for (b = vfrb, b > q.ftg && (b = q.ftg), q.ftg -= b, qq = 1; qq <= b; qq++) qq == b && (q.fx = q.fxs[q.fpos], q.fy = q.fys[q.fpos]), q.fxs[q.fpos] = 0, q.fys[q.fpos] = 0, q.fpos++, q.fpos >= rfc && (q.fpos = 0);
                else 0 == q.ftg && (q.fx = 0, q.fy = 0, q.ftg = -1);
            if (1 == q.dir) {
                q.ang -= C;
                if (0 > q.ang || q.ang >= pi2) q.ang %= pi2;
                0 > q.ang && (q.ang += pi2);
                b = (q.wang - q.ang) % pi2;
                0 > b && (b += pi2);
                b > Math.PI && (b -= pi2);
                0 < b && (q.ang = q.wang, q.dir = 0)
            } else if (2 == q.dir) {
                q.ang += C;
                if (0 > q.ang || q.ang >= pi2) q.ang %= pi2;
                0 > q.ang && (q.ang += pi2);
                b = (q.wang - q.ang) % pi2;
                0 > b && (b += pi2);
                b > Math.PI && (b -= pi2);
                0 > b && (q.ang = q.wang, q.dir = 0)
            } else q.ang = q.wang;
            q.xx += Math.cos(q.ang) * f;
            q.yy += Math.sin(q.ang) * f;
            q.gfr += vfr * q.gr;
            q.eaten ? (1.5 != q.fr && (q.fr += vfr / 150, 1.5 <= q.fr && (q.fr = 1.5)), q.eaten_fr += vfr / 47, q.gfr += vfr, c = q.eaten_by, 1 <= q.eaten_fr || !c ? preys.splice(h, 1) : (q.eaten_fr4 = Math.pow(q.eaten_fr, 4), q.rad = 1 - Math.pow(q.eaten_fr, 3))) : 1 != q.fr && (q.fr += vfr / 150, 1 <= q.fr ? (q.fr = 1, q.rad = 1) : (q.rad = .5 * (1 - Math.cos(Math.PI * q.fr)), q.rad += .66 * (.5 * (1 - Math.cos(Math.PI * q.rad)) - q.rad)))
        }
        for (h = cm1 = foods_c - 1; 0 <= h; h--) f =
            foods[h], f.gfr += vfr * f.gr, f.eaten ? (1.5 != f.fr && (f.fr += vfr / 150, 1.5 <= f.fr && (f.fr = 1.5)), f.eaten_fr += vfr / 41, f.rad = 1 - Math.pow(f.eaten_fr, 3), c = f.eaten_by, 1 <= f.eaten_fr || !c ? (h == cm1 ? foods[h] = null : (foods[h] = foods[cm1], foods[cm1] = null), foods_c--, cm1--) : (c = f.eaten_by, b = f.eaten_fr * f.eaten_fr, f.eaten_fr4 = b * b, f.rad = 1 - f.eaten_fr * b, f.rx = f.xx + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * b) * (1 - b) - f.xx) * b, f.ry = f.yy + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * b) * (1 - b) - f.yy) * b, f.rx += 6 * Math.cos(f.wsp * f.gfr) * (1 - f.eaten_fr), f.ry += 6 *
            Math.sin(f.wsp * f.gfr) * (1 - f.eaten_fr))) : (1 != f.fr && (f.fr += f.rsp * vfr / 150, 1 <= f.fr ? (f.fr = 1, f.rad = 1) : (f.rad = .5 * (1 - Math.cos(Math.PI * f.fr)), f.rad += .66 * (.5 * (1 - Math.cos(Math.PI * f.rad)) - f.rad))), f.rx = f.xx, f.ry = f.yy, f.rx = f.xx + 6 * Math.cos(f.wsp * f.gfr), f.ry = f.yy + 6 * Math.sin(f.wsp * f.gfr));
        vfrb = vfr = 0;
        redraw();
        no_raf || raf(oef)
    },
    bgx = 0,
    bgy = 0,
    bgx2 = 0,
    bgy2 = 0,
    fgfr = 0,
    px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, maxp = 0,
    fps = 0,
    redraw = function() {
        fps++;
        var b = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var h = .5 + .4 / Math.max(1, (snake.sct +
                        16) / 36);
                gsc != h && (gsc < h ? (gsc += 2E-4, gsc >= h && (gsc = h)) : (gsc -= 2E-4, gsc <= h && (gsc = h)))
            }
            var h = view_xx,
                c = view_yy;
            null != snake && (0 < fvtg && (fvtg--, fvx = fvxs[fvpos], fvy = fvys[fvpos], fvxs[fvpos] = 0, fvys[fvpos] = 0, fvpos++, fvpos >= vfc && (fvpos = 0)), view_xx = snake.xx + snake.fx + fvx, view_yy = snake.yy + snake.fy + fvy, choosing_skin && (view_xx -= 104, gsc = 1), view_ang = Math.atan2(view_yy - grd, view_xx - grd), view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)), bpx1 = view_xx - (mww2 / gsc + 84), bpy1 = view_yy - (mhh2 / gsc + 84), bpx2 =
                view_xx + (mww2 / gsc + 84), bpy2 = view_yy + (mhh2 / gsc + 84), fpx1 = view_xx - (mww2 / gsc + 24), fpy1 = view_yy - (mhh2 / gsc + 24), fpx2 = view_xx + (mww2 / gsc + 24), fpy2 = view_yy + (mhh2 / gsc + 24));
            bgx2 -= 1 * (view_xx - h) / bgw2;
            bgy2 -= 1 * (view_yy - c) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg ? (b.save(), b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh), b.globalAlpha = .3, b.drawImage(gbgmc, 0, 0), b.restore()) : (b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh));
            bgp2 && (b.save(), b.fillStyle = bgp2, b.translate(mww2, mhh2), b.scale(gsc, gsc), b.translate(bgx2 *
                bgw2, bgy2 * bgh2), b.globalAlpha = .4, b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc), b.globalCompositeOperation = "lighter", b.globalAlpha = .4, b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc), b.restore());
            if (testing)
                for (h = sectors.length - 1; 0 <= h; h--) c = sectors[h], b.fillStyle = "rgba(0, 255, 0, .1)", b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
            if (high_quality || 0 < gla) {
                var f = 1.75;
                1 != gla && (f = 1.75 * gla);
                b.save();
                for (h = foods_c - 1; 0 <=
                h; h--) c = foods[h], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2, t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2, -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = f * c.fr, b.drawImage(c.ofi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad, t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad, -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = f * c.fr, b.drawImage(c.ofi, 0, 0, c.ofw, c.ofh, A, t, c.ofw * c.rad, c.ofh * c.rad))));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            if (high_quality ||
                0 < gla) {
                f = .75;
                1 != gla && (f = .75 * gla);
                var C = .75;
                1 != gla && (C = 1 - .25 * gla);
                for (h = foods_c - 1; 0 <= h; h--) c = foods[h], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, t = mhh2 + gsc * (c.ry - view_yy) - c.fh2, -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = C * c.fr, b.drawImage(c.fi, A, t), b.globalAlpha = f * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha =
                    C * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad), b.globalAlpha = f * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))))
            } else
                for (h = foods_c - 1; 0 <= h; h--) c = foods[h], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, t = mhh2 + gsc * (c.ry - view_yy) - c.fh2, -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = c.fr, b.drawImage(c.fi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, -50 <=
                A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))));
            b.restore();
            b.save();
            b.globalCompositeOperation = "lighter";
            for (h = preys.length - 1; 0 <= h; h--)
                if (f = preys[h], e = f.xx + f.fx, y = f.yy + f.fy, px = mww2 + gsc * (e - view_xx), py = mhh2 + gsc * (y - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (f.eaten) {
                        var c = f.eaten_by,
                            q = Math.pow(f.eaten_fr, 2),
                            e = e + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - e) * q,
                            y = y + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - y) * q;
                        px =
                            mww2 + gsc * (e - view_xx);
                        py = mhh2 + gsc * (y - view_yy)
                    }
                    1 == f.rad ? (A = px - f.fw2, t = py - f.fh2, b.globalAlpha = .75 * f.fr, b.drawImage(f.fi, A, t), b.globalAlpha = .75 * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr, b.drawImage(f.fi, A, t)) : (A = px - f.fw2 * f.rad, t = py - f.fh2 * f.rad, b.globalAlpha = .75 * f.fr, b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad), b.globalAlpha = .75 * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr, b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad))
                }
            b.restore();
            b.save();
            b.strokeStyle = "#90C098";
            for (var e, y, E, h = snakes.length - 1; 0 <= h; h--) c =
                snakes[h], e = c.xx + c.fx, y = c.yy + c.fy + 40, 0 < c.na && e >= bpx1 - 100 && y >= bpy1 && e <= bpx2 + 100 && y <= bpy2 && (c == snake && (c.fnfr++, 200 < c.fnfr && (c.na -= .004, 0 > c.na && (c.na = 0))), b.save(), b.globalAlpha = .5 * c.na * c.alive_amt * (1 - c.dead_amt), b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif", b.fillStyle = c.csw, b.textBaseline = "middle", b.textAlign = "center", f = c.xx + c.fx, C = c.yy + c.fy, f = mww2 + (f - view_xx) * gsc, C = mhh2 + (C - view_yy) * gsc, b.fillText(c.nk, f, C + 40), b.restore());
            for (h = snakes.length - 1; 0 <= h; h--)
                for (c = snakes[h], c.iiv = !1, x = c.pts.length -
                    1; 0 <= x; x--)
                    if (e = c.pts[x], px = e.xx + e.fx, py = e.yy + e.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        c.iiv = !0;
                        break
                    }
            for (h = snakes.length - 1; 0 <= h; h--)
                if (c = snakes[h], c.iiv) {
                    f = c.xx + c.fx;
                    C = c.yy + c.fy;
                    px = f;
                    py = C;
                    E = c.ehang;
                    var u = c.sc,
                        w = 29 * u,
                        D = c.cfl;
                    e = c.pts[c.pts.length - 1];
                    if (1 == render_mode) {
                        b.save();
                        b.beginPath();
                        b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        y = !1;
                        for (var x = c.pts.length - 1; 0 <= x; x--) {
                            e = c.pts[x];
                            lpx = px;
                            lpy = py;
                            px = e.xx;
                            py = e.yy;
                            var A = e.fx,
                                t = e.fy;
                            0 < D && (px += A, py += t, lax = ax, lay = ay, ax = (px + lpx) / 2, ay = (py +
                                lpy) / 2, y || (lax = ax, lay = ay), 1 > D && (q = 1 - D, lpx += (lax - lpx) * q, lpy += (lay - lpy) * q, ax += (lax - ax) * q, ay += (lay - ay) * q), y ? D-- : D -= c.chl + c.fchl, y ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc), y = !0))
                        }
                        b.save();
                        b.lineJoin = "round";
                        b.lineCap = "round";
                        is_firefox ? (c.sp > c.fsp && (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.strokeStyle = c.cs, b.globalAlpha = .3 * x, b.lineWidth =
                            (w + 6) * gsc, b.stroke(), b.lineWidth = (w + 9) * gsc, b.stroke(), b.lineWidth = (w + 12) * gsc, b.stroke(), b.restore()), b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (w + 5) * gsc) : (c.sp > c.fsp && (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.lineWidth = (w - 2) * gsc, b.shadowBlur = 30 * gsc, b.shadowColor = "rgba(" + c.rr + "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * x) / 1E4 + ")", b.stroke(), b.stroke(), b.restore()), b.globalAlpha = .4 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle =
                            "#000000", b.lineWidth = (w + 5) * gsc, b.stroke(), b.strokeStyle = c.cs, b.lineWidth = w * gsc, b.strokeStyle = "#000000", b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt));
                        b.stroke();
                        b.strokeStyle = c.cs;
                        b.globalAlpha = .8 * c.alive_amt * (1 - c.dead_amt);
                        b.lineWidth = w * gsc;
                        b.stroke();
                        b.restore();
                        b.strokeStyle = c.cs;
                        c.dead && (t = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt), b.save(), b.lineJoin = "round", b.lineCap = "round", b.globalCompositeOperation = "lighter", b.lineWidth = (w - 3) * gsc, b.globalAlpha = t, b.strokeStyle =
                            "#FFCC99", b.stroke(), b.restore());
                        b.restore()
                    }
                    if (2 == render_mode) {
                        var w = .5 * w,
                            H, z, L, I, B, K, M, O, A = 0;
                        px = f;
                        py = C;
                        B = px;
                        K = py;
                        B >= bpx1 && K >= bpy1 && B <= bpx2 && K <= bpy2 ? (pbx[0] = B, pby[0] = K, pba[0] = Math.atan2(C - (e.yy + e.fy), f - (e.xx + e.fx)) + Math.PI, pbu[0] = 1) : pbu[0] = 0;
                        A = 1;
                        n = (c.chl + c.fchl) % .25;
                        0 > n && (n += .25);
                        n = .25 - n;
                        D += 1 - .25 * Math.ceil((c.chl + c.fchl) / .25);
                        ax = px;
                        ay = py;
                        c.sep != c.wsep && (c.sep < c.wsep ? (c.sep += .01, c.sep >= c.wsep && (c.sep = c.wsep)) : c.sep > c.wsep && (c.sep -= .01, c.sep <= c.wsep && (c.sep = c.wsep)));
                        for (var N = c.sep * qsm, J = 0, t = per_color_imgs[c.cv].kmcs,
                                 F, G, x = c.pts.length - 1; 0 <= x; x--)
                            if (e = c.pts[x], lpx = px, lpy = py, px = e.xx + e.fx, py = e.yy + e.fy, -.25 < D) {
                                L = B;
                                I = K;
                                B = (px + lpx) / 2;
                                K = (py + lpy) / 2;
                                M = lpx;
                                O = lpy;
                                for (q = 0; 1 > q; q += .25) {
                                    F = n + q;
                                    e = L + (M - L) * F;
                                    y = I + (O - I) * F;
                                    H = M + (B - M) * F;
                                    z = O + (K - O) * F;
                                    lax = ax;
                                    lay = ay;
                                    ax = e + (H - e) * F;
                                    ay = y + (z - y) * F;
                                    0 > D && (ax += -(lax - ax) * D / .25, ay += -(lay - ay) * D / .25);
                                    H = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                    if (J + H < N) J += H;
                                    else {
                                        J = -J;
                                        for (F = (H - J) / N; 1 <= F; F--) J += N, pax = lax + (ax - lax) * J / H, pay = lay + (ay - lay) * J / H, pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax, pby[A] =
                                            pay, pbu[A] = 1, e = ax - lax, y = ay - lay, pba[A] = -15 <= e && -15 <= y && 15 > e && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e)) : pbu[A] = 0, A++;
                                        J = H - J
                                    }
                                    if (1 > D && (D -= .25, -.25 >= D)) break
                                }
                                1 <= D && D--
                            }
                        ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1, pbx[A] = ax, pby[A] = ay, pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
                        A++;
                        b.save();
                        b.translate(mww2, mhh2);
                        q = gsc * w * 52 / 32;
                        B = gsc * w * 62 / 32;
                        D = c.alive_amt * (1 - c.dead_amt);
                        D *= D;
                        F = 1;
                        if (c.tsp > c.fsp) {
                            F = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1,
                                    (c.tsp - c.ssp) / (c.msp - c.ssp)));
                            G = .37 * F;
                            y = Math.pow(F, .5);
                            J = gsc * w * (1 + .9375 * y);
                            e = per_color_imgs[c.cv].kfmc;
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            if (c.rbcs)
                                for (K = c.rbcs, N = K.length, x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], e = per_color_imgs[K[x % N]], e = e.kfmc, b.save(), b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(e, -J, -J, 2 * J, 2 * J), b.restore());
                            else
                                for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.globalAlpha = D * y * .38 *
                                    (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(e, -J, -J, 2 * J, 2 * J), b.restore());
                            b.restore();
                            F = 1 - F
                        }
                        F *= D;
                        if (high_quality || 0 < gla)
                            for (e = F, 1 != gla && (e = F * gla), b.globalAlpha = e, x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(komc, -q, -q, 2 * q, 2 * q), 9 > x && (b.globalAlpha = e * (1 - x / 9), b.drawImage(ksmc, -B, -B, 2 * B, 2 * B), b.globalAlpha = e), b.restore());
                        b.globalAlpha = F;
                        if (c.rbcs) {
                            K = c.rbcs;
                            N = K.length;
                            for (x = A - 1; 0 <= x; x--) 1 ==
                            pbu[x] && (px = pbx[x], py = pby[x], 2 <= x && (q = x - 2, 1 == pbu[q] && (e = pbx[q], y = pby[q], b.save(), b.translate((e - view_xx) * gsc, (y - view_yy) * gsc), b.globalAlpha = 9 > q ? q / 9 * F : F, b.drawImage(ksmc, -B, -B, 2 * B, 2 * B), b.restore())), b.save(), b.globalAlpha = D, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), q = x % (2 * t.length), q >= t.length && (q = 2 * t.length - (q + 1)), e = per_color_imgs[K[x % N]], b.drawImage(e.kmcs[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
                            if (c.tsp > c.fsp) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                for (x = A - 1; 0 <=
                                x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), b.globalAlpha = D * G * (.5 + .5 * Math.cos(x / 4 - c.sfr)), q = x % (2 * t.length), q >= t.length && (q = 2 * t.length - (q + 1)), b.drawImage(per_color_imgs[K[x % N]].kmcs[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
                                b.restore()
                            }
                        } else {
                            for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], 2 <= x && (q = x - 2, 1 == pbu[q] && (e = pbx[q], y = pby[q], b.save(), b.translate((e - view_xx) * gsc, (y - view_yy) * gsc), b.globalAlpha = 9 > q ? q / 9 * F : F, b.drawImage(ksmc, -B, -B, 2 * B, 2 * B), b.restore())), b.save(), b.globalAlpha = D, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), q = x % (2 * t.length), q >= t.length && (q = 2 * t.length - (q + 1)), b.drawImage(t[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
                            if (c.tsp > c.fsp) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], q = x % (2 * t.length), q >= t.length && (q = 2 * t.length - (q + 1)), b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), b.globalAlpha = D * G * (.5 + .5 * Math.cos(x /
                                        4 - c.sfr)), b.drawImage(t[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
                                b.restore()
                            }
                        }
                        if (c.antenna && 2 <= A && 1 == pbu[1]) {
                            c.atx[0] = pbx[1];
                            c.aty[0] = pby[1];
                            F = c.sc * gsc;
                            fj = c.atx.length - 1;
                            if (choosing_skin)
                                for (x = 1; x <= fj; x++) c.atvx[x] -= .3, c.atvy[x] += .14 * Math.cos(fr / 23 - 7 * x / fj);
                            for (x = 1; x <= fj; x++) xx = c.atx[x - 1], yy = c.aty[x - 1], xx += 2 * Math.random() - 1, yy += 2 * Math.random() - 1, e = c.atx[x] - xx, y = c.aty[x] - yy, ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y &&
                            16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e), xx += 4 * Math.cos(ang) * c.sc, yy += 4 * Math.sin(ang) * c.sc, c.atvx[x] += .1 * (xx - c.atx[x]), c.atvy[x] += .1 * (yy - c.aty[x]), c.atx[x] += c.atvx[x], c.aty[x] += c.atvy[x], c.atvx[x] *= .88, c.atvy[x] *= .88, e = c.atx[x] - c.atx[x - 1], y = c.aty[x] - c.aty[x - 1], H = Math.sqrt(e * e + y * y), H > 4 * c.sc && (ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y +
                            128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e), c.atx[x] = c.atx[x - 1] + 4 * Math.cos(ang) * c.sc, c.aty[x] = c.aty[x - 1] + 4 * Math.sin(ang) * c.sc);
                            b.globalAlpha = D;
                            b.strokeStyle = "#505050";
                            b.lineWidth = 5 * F;
                            b.lineCap = "round";
                            b.lineJoin = "round";
                            b.beginPath();
                            fj = c.atx.length - 1;
                            e = (c.atx[fj] - view_xx) * gsc;
                            y = (c.aty[fj] - view_yy) * gsc;
                            b.moveTo(e, y);
                            for (x = fj - 1; 1 <= x; x--) xx = (c.atx[x] - view_xx) * gsc, yy = (c.aty[x] - view_yy) * gsc, 1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx, y = yy, b.lineTo(e, y));
                            xx = (.5 * (c.atx[1] +
                                c.atx[0]) - view_xx) * gsc;
                            yy = (.5 * (c.aty[1] + c.aty[0]) - view_yy) * gsc;
                            1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx, y = yy, b.lineTo(e, y));
                            b.stroke();
                            b.globalAlpha = .5 * D;
                            b.strokeStyle = "#FFFFFF";
                            b.lineWidth = 4 * F;
                            b.beginPath();
                            fj = c.atx.length - 1;
                            e = (c.atx[fj] - view_xx) * gsc;
                            y = (c.aty[fj] - view_yy) * gsc;
                            b.moveTo(e, y);
                            for (x = fj - 1; 0 <= x; x--) xx = (c.atx[x] - view_xx) * gsc, yy = (c.aty[x] - view_yy) * gsc, 1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx, y = yy, b.lineTo(e, y));
                            b.stroke();
                            b.globalAlpha = D;
                            b.drawImage(rabulb, (c.atx[fj] - view_xx - 10 * c.sc) * gsc,
                                (c.aty[fj] - view_yy - 10 * c.sc) * gsc, 20 * F, 20 * F);
                            b.globalAlpha = .5 * D;
                            b.lineWidth = 3 * F;
                            b.stroke();
                            b.lineWidth = 2 * F;
                            b.stroke()
                        }
                        if (c.dead) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            t = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
                            w *= gsc;
                            for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.globalAlpha = t * (.6 + .4 * Math.cos(x / 4 - 15 * c.dead_amt)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(kdmc, -w, -w, 2 * w, 2 * w), b.restore());
                            b.restore()
                        }
                        b.restore()
                    }
                    x = 1 == render_mode ?
                    4 * u : 6 * u;
                    w = 6 * u;
                    A = Math.cos(E) * x + Math.cos(E - Math.PI / 2) * (w + .5);
                    t = Math.sin(E) * x + Math.sin(E - Math.PI / 2) * (w + .5);
                    b.fillStyle = c.ec;
                    b.globalAlpha = .75 * c.alive_amt;
                    b.beginPath();
                    b.arc(mww2 + (A + f - view_xx) * gsc, mhh2 + (t + C - view_yy) * gsc, c.er * u * gsc, 0, pi2);
                    b.closePath();
                    b.fill();
                    b.globalAlpha = c.ppa;
                    A = Math.cos(E) * (x + .5) + c.rex * u + Math.cos(E - Math.PI / 2) * w;
                    t = Math.sin(E) * (x + .5) + c.rey * u + Math.sin(E - Math.PI / 2) * w;
                    b.fillStyle = "#000000";
                    b.beginPath();
                    b.arc(mww2 + (A + f - view_xx) * gsc, mhh2 + (t + C - view_yy) * gsc, 3.5 * u * gsc, 0, pi2);
                    b.closePath();
                    b.fill();
                    A = Math.cos(E) * x + Math.cos(E + Math.PI / 2) * (w + .5);
                    t = Math.sin(E) * x + Math.sin(E + Math.PI / 2) * (w + .5);
                    b.fillStyle = c.ec;
                    b.globalAlpha = .75 * c.alive_amt;
                    b.beginPath();
                    b.arc(mww2 + (A + f - view_xx) * gsc, mhh2 + (t + C - view_yy) * gsc, c.er * u * gsc, 0, pi2);
                    b.closePath();
                    b.fill();
                    b.globalAlpha = c.ppa;
                    A = Math.cos(E) * (x + .5) + c.rex * u + Math.cos(E + Math.PI / 2) * w;
                    t = Math.sin(E) * (x + .5) + c.rey * u + Math.sin(E + Math.PI / 2) * w;
                    b.fillStyle = "#000000";
                    b.beginPath();
                    b.arc(mww2 + (A + f - view_xx) * gsc, mhh2 + (t + C - view_yy) * gsc, 3.5 * u * gsc, 0, pi2);
                    b.closePath();
                    b.fill();
                    b.globalAlpha = 1
                }
            if (high_quality || 0 < gla) {
                b.save();
                b.globalCompositeOperation = "lighter";
                for (h = foods_c - 1; 0 <= h; h--) c = foods[h], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (e = c.rx - view_xx, y = c.ry - view_yy, f = e * e + y * y, fs = 1 + .06 * c.rad, A = e * fs, t = y * fs, G = .005 + .09 * (1 - f / (86E3 + f)), 1 != c.rad && (G *= Math.pow(c.rad, .25)), 1 != gla && (G *= gla), A = A * gsc + mww2, t = t * gsc + mhh2, 1 == c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2, t -= c.gfh2, b.globalAlpha = G * c.fr, b.drawImage(c.gfi, A, t), b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) *
                    c.fr, b.drawImage(c.gfi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2 * c.rad, t -= c.gfh2 * c.rad, b.globalAlpha = G * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad), b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad)), fs = 1 + .32 * c.rad, A = e * fs, t = y * fs, G = .085 * (1 - f / (16500 + f)), 1 != c.rad && (G *= Math.pow(c.rad, .25)), 1 != gla && (G *= gla), A = A * gsc + mww2, t = t * gsc + mhh2, 1 == c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2, t -= c.g2fh2,
                    b.globalAlpha = G * c.fr, b.drawImage(c.g2fi, A, t), b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2 * c.rad, t -= c.g2fh2 * c.rad, b.globalAlpha = G * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad), b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            for (h = preys.length - 1; 0 <= h; h--) f = preys[h],
                e = f.xx + f.fx, y = f.yy + f.fy, f.eaten && (c = f.eaten_by, q = Math.pow(f.eaten_fr, 2), e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - e) * q, y += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - y) * q), e -= view_xx, y -= view_yy, c = e * e + y * y, fs = 1 + .08 * f.rad, px = e * fs, py = y * fs, G = .4 * (1 - c / (176E3 + c)), 1 != f.rad && (G *= Math.pow(f.rad, .25)), px = px * gsc + mww2, py = py * gsc + mhh2, 1 == f.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= f.gfw2, py -= f.gfh2, b.globalAlpha = G * f.fr, b.drawImage(f.gfi, px, py), b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) *
                f.fr, b.drawImage(f.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= f.gfw2 * f.rad, py -= f.gfh2 * f.rad, b.globalAlpha = G * f.fr, b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * f.rad, f.gfh * f.rad), b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr, b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * f.rad, f.gfh * f.rad)), fs = 1 + .32 * f.rad, px = e * fs, py = y * fs, G = .35 * (1 - c / (46500 + c)), 1 != f.rad && (G *= Math.pow(f.rad, .25)), c = 2 * f.rad, px = px * gsc + mww2, py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= f.gfw2 * c, py -=
                f.gfh2 * c, b.globalAlpha = G * f.fr, b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * c, f.gfh * c), b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr, b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * c, f.gfh * c));
            b.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                b.save();
                b.lineWidth = 23 * gsc;
                b.strokeStyle = "#800000";
                b.fillStyle = "#300000";
                b.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (x = -2E3; 2E3 >= x; x += 100) xx = grd + Math.cos(view_ang +
                        x / grd) * grd * .98, yy = grd + Math.sin(view_ang + x / grd) * grd * .98, b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                b.closePath();
                b.stroke();
                b.fill();
                b.restore()
            }
            wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1, h = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">Your length: </span><span style="opacity: .8; font-weight: bold;">' +
                Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"), h +=
                '<BR><span style="opacity: .3;">Your rank: </span><span style="opacity: .35;">' + rank +
                '</span><span style="opacity: .3;"> of </span><span style="opacity: .35;">' + snake_count +
                '</span><BR><span style="opacity: .35;">PositionX: ' + Math.round(snake.xx/100) + '<BR>PositionY: ' +
                Math.round(snake.yy/100) + '</span>', lbf.innerHTML = h);           //Add pos's
            b.restore()
        }
    },
    ww = window.innerWidth,
    hh = window.innerHeight,
    lww = 0,
    lhh = 0,
    csc, grd = 16384;

function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        var b = 0;
        if (mbi) {
            var h = ww / 1245;
            mbi.width = 1245 * h;
            b = Math.ceil(260 * h);
            mbi.height = b;
            hh -= b
        }
        ww -= wsu;
        loch.style.bottom = 16 + b + "px";
        lbf.style.bottom = 10 + b + "px"; //4 to 10
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = 230 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right = 10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        fbh.style.right =
            30 + wsu + "px";
        twth.style.right = 130 + wsu + "px";
        cstx.style.right = 240 + wsu + "px";
        pskh.style.left = Math.round(.25 * ww - 44) + "px";
        nskh.style.left = Math.round(.75 * ww - 44) + "px";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        skodiv.style.top = Math.round(hh / 2 + 120) + "px";
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        var h = Math.sqrt(ww * ww + hh * hh),
            b = Math.ceil(1400 * ww / h),
            c = Math.ceil(1400 * hh / h);
        1100 < b && (c = Math.ceil(1100 * c / b), b = 1100);
        1100 < c && (b = Math.ceil(1100 * b / c), c = 1100);
        lgbsc =
            560 > hh ? Math.max(50, hh) / 560 : 1;
        h = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        1 == h ? (trf(login, ""), login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px", trf(login, "scale(" + h + "," + h + ")"));
        if (mww != b || mhh != c) mww = b, mhh = c, mc.width = mww, mc.height = mhh, mwwp50 = mww + 50, mhhp50 = mhh + 50, mwwp150 = mww + 150, mhhp150 = mhh + 150, mww2 = mww / 2, mhh2 = mhh / 2, rdgbg();
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    nbg.style.width =
        ww + "px";
    nbg.style.height = hh + "px";
    redraw()
}
window.onresize = function() {
    resize()
};
for (i = ois.length - 1; 0 <= i; i--) ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(b) {
    (b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2)
};

function setAcceleration(b) {
    if (null != snake) {
        snake.md = 1 == b;
        if (5 <= protocol_version) {
            var h = new Uint8Array(1);
            h[0] = 1 == b ? 253 : 254
        } else h = new Uint8Array(2), h[0] = 109, h[1] = b;
        ws.send(h)
    }
}
window.oncontextmenu = function(b) {
    b.preventDefault();
    b.stopPropagation();
    return !1
};
window.ontouchmove = function(b) {
    dmutm = Date.now() + 1500;
    null != snake && (b = b || window.event) && (b = b.touches[0], "undefined" != typeof b.clientX ? (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2) : (xm = b.pageX - ww / 2, ym = b.pageY - hh / 2))
};
var dmutm = 0,
    ltchx = -1,
    ltchy = -1,
    ltchmtm = -1;
window.ontouchstart = function(b) {
    dmutm = Date.now() + 1500;
    if (null != snake) {
        if (b = b || window.event) {
            var h, c;
            c = b.touches[0];
            "undefined" != typeof c.clientX ? (h = c.clientX - ww / 2, c = c.clientY - hh / 2) : (h = c.pageX - ww / 2, c = c.pageY - hh / 2);
            var f = Date.now();
            24 > Math.abs(h - ltchx) && 24 > Math.abs(c - ltchy) && 400 > f - ltchmtm && setAcceleration(1);
            ltchx = h;
            ltchy = c;
            ltchmtm = f;
            xm = h;
            ym = c
        }
        b.preventDefault()
    }
};
window.onmousedown = function(b) {
    if (0 == dmutm || Date.now() > dmutm) dmutm = 0, null != snake && (window.onmousemove(b), setAcceleration(1), b.preventDefault())
};
window.ontouchend = function() {
    setAcceleration(0)
};

function omu(b) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var mscps = 0,
    fmlts = [],
    fpsls = [],
    etm = 0,
    ws = null,
    tcsecs = 0,
    trdps = 0,
    rdps = 0,
    rfps = 0,
    rnps = 0,
    rsps = 0,
    reps = 0,
    rdpspc = [],
    anguc = 0,
    angnuc = 0,
    wangnuc = 0,
    lrd_mtm = Date.now(),
    locu_mtm = 0;
if (testing)
    for (i = 0; 256 > i; i++) rdpspc[i] = -1;
var pfs = [],
    pft = 0,
    pf1 = 0,
    pf2 = 0,
    rpf1, rpf2, pf_nap = 0,
    pf_ep = 0,
    rpft = 0,
    pf;
for (i = 0; 100 > i; i++) pfs.push(0);
var pf_add = 0,
    pf_new_add = 0,
    pf_remove = 0,
    tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++) tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"), pfd.style.position = "fixed", pfd.style.left = "4px", pfd.style.bottom = "30px", pfd.style.width = "170px", pfd.style.height = "364px", pfd.style.background = "rgba(0, 0, 0, .8)", pfd.style.color = "#80FF80", pfd.style.fontFamily = "Verdana", pfd.style.zIndex = 999999, pfd.style.fontSize = "11px", pfd.style.padding = "10px", pfd.style.borderRadius = "30px", pfd.textContent = "ayy lmao", document.body.appendChild(pfd));

function resetGame() {
    ws && (ws.close(), ws = null);
    snake = null;
    want_close_socket = !1;
    snakes = [];
    foods = [];
    foods_c = 0;
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    biggest_snake_count = snake_count = 0;
    lagging = wfpr = playing = connected = !1;
    for (j = vfc - 1; 0 <= j; j--) fvxs[j] = 0, fvys[j] = 0;
    fvy = fvx = fvtg = 0;
    lag_mult = 1;
    cptm = 0;
    gsc = sgsc
}
var protocol_version = 2,
    connecting = !1,
    start_connect_mtm, play_btn_click_mtm = -1,
    waiting_for_sos = !1,
    sos_ready_after_mtm = -1;

function connect() {
    if (0 == sos.length) waiting_for_sos || (waiting_for_sos = !0, sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var b = 0; b < sos.length; b++) sos[b].ptm = 9999999;
            for (b = 0; b < sis.length; b++) {
                var h = sis[b];
                if (0 < h.ptms.length) {
                    for (var c = 0, f = h.ptms.length - 1; 0 <= f; f--) c += h.ptms[f];
                    c /= h.ptms.length;
                    for (f = sos.length - 1; 0 <= f; f--) sos[f].ip == h.ip && (sos[f].ptm = c)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (h =
                             "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2], c = rmsos[b].a[3], f = sos.length - 1; 0 <= f; f--) 0 <= sos[f].ip.indexOf(h) && sos[f].po == c && sos.splice(f, 1);
            sos.sort(function(c, b) {
                return parseFloat(c.po) - parseFloat(b.po)
            });
            bso = sos[Math.floor(Math.random() * sos.length)];
            for (b = sos.length - 1; 0 <= b; b--) sos[b].tainted || sos[b].ptm <= bso.ptm && 30 < sos[b].ac && (bso = sos[b])
        }
        ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function(c) {
            if (ws == this && (c = new Uint8Array(c.data),
                    rdps += c.length, 2 <= c.length)) {
                lptm = cptm;
                cptm = Date.now();
                var b = c[0] << 8 | c[1],
                    e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += e - b;
                testing && (rdpspc[c[2]] += c.length);
                var f = String.fromCharCode(c[2]),
                    b = 3,
                    h = c.length,
                    e = c.length - 2,
                    u = c.length - 3;
                if ("a" == f) connecting = !1, playing = connected = !0, play_btn_click_mtm = -1, grd = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, e = c[b] << 8 | c[b + 1], b += 2, sector_size = c[b] << 8 | c[b + 1], b += 2, sector_count_along_edge = c[b] << 8 | c[b + 1], b += 2, spangdv = c[b] / 10, b++, nsp1 = (c[b] << 8 | c[b + 1]) / 100, b += 2, nsp2 = (c[b] << 8 | c[b + 1]) / 100, b += 2, nsp3 =
                    (c[b] << 8 | c[b + 1]) / 100, b += 2, mamu = (c[b] << 8 | c[b + 1]) / 1E3, b += 2, mamu2 = (c[b] << 8 | c[b + 1]) / 1E3, b += 2, cst = (c[b] << 8 | c[b + 1]) / 1E3, b += 2, b < h && (protocol_version = c[b]), console.log("game radius = " + grd), setMscps(e), lbh.style.display = "inline", lbs.style.display = "inline", lbn.style.display = "inline", lbp.style.display = "inline", lbf.style.display = "inline", vcm.style.display = "inline", loch.style.display = "inline", startShowGame();
                else if ("e" == f || "E" == f || "3" == f || "4" == f || "5" == f) {
                    var w = c[b] << 8 | c[b + 1],
                        b = b + 2,
                        D = h = -1,
                        x = -1,
                        A = -1;
                    if (6 <= protocol_version) 6 ==
                    e ? (h = "e" == f ? 1 : 2, D = 2 * c[b] * Math.PI / 256, b++, x = 2 * c[b] * Math.PI / 256, b++, A = c[b] / 18) : 5 == e ? "e" == f ? (D = 2 * c[b] * Math.PI / 256, b++, A = c[b] / 18) : "E" == f ? (h = 1, x = 2 * c[b] * Math.PI / 256, b++, A = c[b] / 18) : "4" == f ? (h = 2, x = 2 * c[b] * Math.PI / 256, b++, A = c[b] / 18) : "3" == f ? (h = 1, D = 2 * c[b] * Math.PI / 256, b++, x = 2 * c[b] * Math.PI / 256) : "5" == f && (h = 2, D = 2 * c[b] * Math.PI / 256, b++, x = 2 * c[b] * Math.PI / 256) : 4 == e && ("e" == f ? D = 2 * c[b] * Math.PI / 256 : "E" == f ? (h = 1, x = 2 * c[b] * Math.PI / 256) : "4" == f ? (h = 2, x = 2 * c[b] * Math.PI / 256) : "3" == f && (A = c[b] / 18));
                    else if (3 <= protocol_version) {
                        "3" != f &&
                        (8 == e || 7 == e || 6 == e && "3" != f || 5 == e && "3" != f) && (h = "e" == f ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == f || 6 == e && "3" == f) D = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535, b += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != f || 6 == e && "3" != f) x = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535, b += 2;
                        if (8 == e || 6 == e || 4 == e) A = c[b] / 18
                    } else {
                        if (11 == u || 8 == u || 9 == u || 6 == u) h = c[b] - 48, b++;
                        if (11 == u || 7 == u || 9 == u || 5 == u) D = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3;
                        if (11 == u || 8 == u || 9 == u || 6 == u) x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3;
                        if (11 == u || 7 == u || 8 == u || 4 == u) A = (c[b] << 8 | c[b +
                            1]) / 1E3
                    }
                    var t = os["s" + w];
                    if (t) {
                        -1 != h && (t.dir = h);
                        anguc++;
                        if (-1 != D) {
                            t.ang == D && angnuc++;
                            c = (D - t.ang) % pi2;
                            0 > c && (c += pi2);
                            c > Math.PI && (c -= pi2);
                            w = t.fapos;
                            for (u = 0; u < afc; u++) t.fas[w] -= c * afas[u], w++, w >= afc && (w = 0);
                            t.fatg = afc;
                            t.ang = D
                        } - 1 != x && (t.wang == x && wangnuc++, t.wang = x, t != snake && (t.eang = x)); - 1 != A && (t.sp = A, t.spang = t.sp / spangdv, 1 < t.spang && (t.spang = 1))
                    }
                } else if ("h" == f) {
                    var w = c[b] << 8 | c[b + 1],
                        b = b + 2,
                        H = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    if (t = os["s" + w]) t.fam = H, snl(t)
                } else if ("r" == f) {
                    if (w = c[b] << 8 | c[b + 1], b += 2, t = os["s" +
                        w]) {
                        4 <= u && (t.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        for (u = 0; u < t.pts.length; u++)
                            if (!t.pts[u].dying) {
                                t.pts[u].dying = !0;
                                t.sct--;
                                t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                                t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                                t.ssp = nsp1 + nsp2 * t.sc;
                                t.fsp = t.ssp + .1;
                                t.wsep = 6 * t.sc;
                                c = nsep / gsc;
                                t.wsep < c && (t.wsep = c);
                                break
                            }
                        snl(t)
                    }
                } else if ("g" == f || "n" == f || "G" == f || "N" == f) {
                    if (playing && (H = "n" == f || "N" == f, w = c[b] << 8 | c[b + 1], b += 2, t = os["s" + w])) {
                        if (H) t.sct++;
                        else
                            for (u = 0; u < t.pts.length; u++)
                                if (!t.pts[u].dying) {
                                    t.pts[u].dying = !0;
                                    break
                                } var z = t.pts[t.pts.length -
                            1],
                            u = z,
                            h = !1;
                        3 <= protocol_version ? "g" == f || "n" == f ? (e = c[b] << 8 | c[b + 1], b += 2, B = c[b] << 8 | c[b + 1], b += 2) : (e = u.xx + c[b] - 128, b++, B = u.yy + c[b] - 128, b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3);
                        H && (t.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        (z = points_dp.get()) || (z = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        z.eiu = 0;
                        z.xx = e;
                        z.yy = B;
                        z.fx = 0;
                        z.fy = 0;
                        z.da = 0;
                        z.ebx = z.xx - u.xx;
                        z.eby = z.yy - u.yy;
                        t.pts.push(z);
                        h = !0;
                        t.iiv && (c = t.xx + t.fx - z.xx, b = t.yy + t.fy - z.yy, z.fx += c, z.fy += b, z.exs[z.eiu] = c, z.eys[z.eiu] = b, z.efs[z.eiu] =
                            0, z.ems[z.eiu] = 1, z.eiu++);
                        w = t.pts.length - 3;
                        if (1 <= w)
                            for (D = t.pts[w], f = n = 0, u = w - 1; 0 <= u; u--) w = t.pts[u], n++, c = w.xx, b = w.yy, 4 >= n && (f = cst * n / 4), w.xx += (D.xx - w.xx) * f, w.yy += (D.yy - w.yy) * f, t.iiv && (c -= w.xx, b -= w.yy, w.fx += c, w.fy += b, w.exs[w.eiu] = c, w.eys[w.eiu] = b, w.efs[w.eiu] = 0, w.ems[w.eiu] = 2, w.eiu++), D = w;
                        t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                        t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                        t.ssp = nsp1 + nsp2 * t.sc;
                        t.fsp = t.ssp + .1;
                        t.wsep = 6 * t.sc;
                        c = nsep / gsc;
                        t.wsep < c && (t.wsep = c);
                        H && snl(t);
                        t.lnp = z;
                        t == snake && (ovxx = snake.xx + snake.fx, ovyy = snake.yy +
                            snake.fy);
                        z = etm / 8 * t.sp / 4;
                        z *= lag_mult;
                        u = t.chl - 1;
                        t.chl = z / t.msl;
                        f = t.xx;
                        w = t.yy;
                        t.xx = e + Math.cos(t.ang) * z;
                        t.yy = B + Math.sin(t.ang) * z;
                        c = t.xx - f;
                        b = t.yy - w;
                        e = t.chl - u;
                        w = t.fpos;
                        for (u = 0; u < rfc; u++) t.fxs[w] -= c * rfas[u], t.fys[w] -= b * rfas[u], t.fchls[w] -= e * rfas[u], w++, w >= rfc && (w = 0);
                        t.fx = t.fxs[t.fpos];
                        t.fy = t.fys[t.fpos];
                        t.fchl = t.fchls[t.fpos];
                        t.ftg = rfc;
                        h && (t.ehl = 0);
                        if (t == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            c = view_xx - ovxx;
                            b = view_yy - ovyy;
                            w = fvpos;
                            for (u = 0; u < vfc; u++) fvxs[w] -= c * vfas[u], fvys[w] -= b * vfas[u],
                                w++, w >= vfc && (w = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" == f) {
                    if (playing) {
                        wumsts = !0;
                        D = z = B = "";
                        A = x = 0; - 1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var L = c[b];
                        b++;
                        rank = c[b] << 8 | c[b + 1];
                        rank < best_rank && (best_rank = rank);
                        b += 2;
                        snake_count = c[b] << 8 | c[b + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (b += 2; b < h;) {
                            var I = c[b] << 8 | c[b + 1],
                                b = b + 2,
                                H = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215,
                                b = b + 3,
                                t = c[b] % 9;
                            b++;
                            e = c[b];
                            b++;
                            f = "";
                            for (u = 0; u < e; u++) w = c[b], f = 38 == w ? f + "&amp;" : 60 == w ? f + "&lt;" : 62 == w ? f + "&gt;" : 32 == w ? f + "&nbsp;" : f + String.fromCharCode(c[b]),
                                b++;
                            A++;
                            x++;
                            score = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                            w = A == L ? 1 : .7 * (.3 + .7 * (1 - x / 10));
                            B += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
                            z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                            D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' + x + "</span><BR>"
                        }
                        lbs.innerHTML = B;
                        lbn.innerHTML = z;
                        lbp.innerHTML = D
                    }
                } else if ("v" == f) 2 == c[b] ? (want_close_socket = !0, want_victory_message = !1, want_hide_victory =
                    1, hvfr = 0) : (dead_mtm = Date.now(), play_btn.setEnabled(!0), e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10, twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"), lastscore.innerHTML = '<span style="opacity: .45;">Your final length was </span><b>' + e + '</b><BR><span style="opacity: .45;">Your current server\'s IP is: </span><b>' + bso.ip + ':' + bso.po + '</b>', play_btn.setText(String.fromCharCode(160) + "Play Again" + String.fromCharCode(160)), 1 == c[b] ? (nick_holder.style.display = "none", playh.style.display =
                    "none", smh.style.display = "none", victory_holder.style.display = "inline", saveh.style.display = "block", want_victory_focus = want_victory_message = !0, victory.disabled = !1, save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("w" == f)
                    if (h = c[b], b++, e = c[b] << 8 | c[b + 1], b += 2, B = c[b] << 8 | c[b + 1], 1 == h) t = {}, t.xx = e, t.yy = B, sectors.push(t);
                    else {
                        for (z = cm1 = foods_c - 1; 0 <= z; z--) u = foods[z], u.sx == e && u.sy == B && (z == cm1 ? foods[z] = null : (foods[z] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
                        for (z = sectors.length - 1; 0 <= z; z--) t = sectors[z],
                        t.xx == e && t.yy == B && sectors.splice(z, 1)
                    }
                else if ("m" == f) {
                    I = c[b] << 16 | c[b + 1] << 8 | c[b + 2];
                    b += 3;
                    H = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    b += 3;
                    B = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                    e = c[b];
                    b++;
                    u = "";
                    for (z = 0; z < e; z++) u += String.fromCharCode(c[b]), b++;
                    for (e = ""; b < h;) e += String.fromCharCode(c[b]), b++;
                    u = u.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < B && (c = "", 0 < e.length && (c += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" +
                        e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"), 0 < u.length ? (c = 0 < e.length ? c + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + u + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + u + "</b></span></i>", c += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + B + "</b></span></i>") : c = 0 <
                    e.length ? c + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + B + "</b></span></i>") : c + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + B + "</b></span></i>"), vcm.innerHTML = c)
                } else if ("p" == f) wfpr = !1, lagging && (etm *= lag_mult, lagging = !1);
                else if ("u" == f) {
                    u = asmc.getContext("2d");
                    u.clearRect(0, 0, 80, 80);
                    u.fillStyle = "#FFFFFF";
                    for (var B =
                        e = 0; b < h && !(80 <= B);)
                        if (w = c[b++], 128 <= w)
                            for (w -= 128, z = 0; z < w && !(e++, 80 <= e && (e = 0, B++, 80 <= B)); z++);
                        else
                            for (z = 0; 7 > z && !(0 < (w & u_m[z]) && u.fillRect(e, B, 1, 1), e++, 80 <= e && (e = 0, B++, 80 <= B)); z++);
                } else if ("s" == f) {
                    if (playing)
                        if (w = c[b] << 8 | c[b + 1], b += 2, 6 < u) {
                            D = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            b++;
                            x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            A = (c[b] << 8 | c[b + 1]) / 1E3;
                            b += 2;
                            H = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                            b += 3;
                            t = c[b];
                            b++;
                            var L = [],
                                I = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                                b = b + 3,
                                K = (c[b] << 16 | c[b + 1] << 8 |
                                    c[b + 2]) / 5,
                                b = b + 3,
                                e = c[b];
                            b++;
                            f = "";
                            for (u = 0; u < e; u++) f += String.fromCharCode(c[b]), b++;
                            for (var M = u = B = e = 0, O = !1; b < h;) u = e, M = B, O ? (e += (c[b] - 127) / 2, b++, B += (c[b] - 127) / 2, b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, u = e, M = B, O = !0), (z = points_dp.get()) || (z = {
                                exs: [],
                                eys: [],
                                efs: [],
                                ems: []
                            }), z.eiu = 0, z.xx = e, z.yy = B, z.fx = 0, z.fy = 0, z.da = 0, z.ebx = e - u, z.eby = B - M, L.push(z);
                            t = newSnake(w, I, K, t, D, L);
                            null == snake && (view_xx = e, view_yy = B, snake = t);
                            t.nk = f;
                            t.eang = t.wang = x;
                            t.sp = A;
                            t.spang = t.sp / spangdv;
                            1 < t.spang &&
                            (t.spang = 1);
                            t.fam = H;
                            t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                            t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                            t.ssp = nsp1 + nsp2 * t.sc;
                            t.fsp = t.ssp + .1;
                            t.wsep = 6 * t.sc;
                            c = nsep / gsc;
                            t.wsep < c && (t.wsep = c);
                            t.sep = t.wsep;
                            snl(t)
                        } else
                            for (c = 1 == c[b], z = snakes.length - 1; 0 <= z; z--)
                                if (snakes[z].id == w) {
                                    snakes[z].id = -1234;
                                    c ? (snakes[z].dead = !0, snakes[z].dead_amt = 0, snakes[z].edir = 0) : snakes.splice(z, 1);
                                    delete os["s" + w];
                                    break
                                }
                } else if ("F" == f)
                    if (4 <= protocol_version) {
                        for (f = !1; b < h;) t = c[b], b++, e = c[b] << 8 | c[b + 1], b += 2, B = c[b] << 8 | c[b + 1], b += 2, u = c[b] / 5, b++,
                            w = B * grd * 3 + e, u = newFood(w, e, B, u, !0, t), f || (f = !0, z = Math.floor(e / sector_size), H = Math.floor(B / sector_size)), u.sx = z, u.sy = H;
                        t = {};
                        t.xx = z;
                        t.yy = H;
                        sectors.push(t)
                    } else
                        for (z = c[b] << 8 | c[b + 1], b += 2, H = c[b] << 8 | c[b + 1], b += 2, t = {}, t.xx = z, t.yy = H, sectors.push(t); b < h;) w = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, t = c[b], b++, e = sector_size * (z + c[b] / 255), b++, B = sector_size * (H + c[b] / 255), b++, u = c[b] / 5, b++, u = newFood(w, e, B, u, !0, t), u.sx = z, u.sy = H;
                else if ("b" == f || "f" == f) 4 <= protocol_version ? (t = c[b], b++, 4 < u && (e = c[b] << 8 | c[b + 1], b += 2, B = c[b] << 8 | c[b + 1],
                    w = B * grd * 3 + e, u = c[b + 2] / 5, u = newFood(w, e, B, u, "b" == f, t), u.sx = Math.floor(e / sector_size), u.sy = Math.floor(B / sector_size))) : (w = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3, 4 < u && (t = c[b], b++, z = c[b] << 8 | c[b + 1], b += 2, H = c[b] << 8 | c[b + 1], b += 2, e = sector_size * (z + c[b] / 255), b++, B = sector_size * (H + c[b] / 255), b++, u = c[b] / 5, u = newFood(w, e, B, u, "b" == f, t), u.sx = z, u.sy = H));
                else if ("c" == f) {
                    4 <= protocol_version ? (e = c[b] << 8 | c[b + 1], b += 2, B = c[b] << 8 | c[b + 1], b += 2, w = B * grd * 3 + e) : (w = c[b] << 16 | c[b + 1] << 8 | c[b + 2], b += 3);
                    for (z = cm1 = foods_c - 1; 0 <= z; z--)
                        if (u = foods[z], u.id ==
                            w) {
                            u.eaten = !0;
                            b + 2 <= h ? (c = c[b] << 8 | c[b + 1], u.eaten_by = os["s" + c], u.eaten_fr = 0) : (z == cm1 ? foods[z] = null : (foods[z] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
                            w = -1;
                            break
                        } - 1 != w && console.log("wtf")
                } else if ("j" == f) {
                    w = c[b] << 8 | c[b + 1];
                    b += 2;
                    e = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    B = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    h = null;
                    for (z = preys.length - 1; 0 <= z; z--)
                        if (preys[z].id == w) {
                            h = preys[z];
                            break
                        }
                    if (h) {
                        z = etm / 8 * h.sp / 4;
                        z *= lag_mult;
                        f = h.xx;
                        w = h.yy;
                        15 == u ? (h.dir = c[b] - 48, b++, h.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, h.wang = 2 * (c[b] <<
                            16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, h.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 11 == u ? (h.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, h.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 12 == u ? (h.dir = c[b] - 48, b++, h.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, h.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 13 == u ? (h.dir = c[b] - 48, b++, h.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, h.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215) : 9 == u ? h.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215 : 10 == u ? (h.dir = c[b] - 48, b++, h.wang =
                            2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215) : 8 == u && (h.sp = (c[b] << 8 | c[b + 1]) / 1E3);
                        h.xx = e + Math.cos(h.ang) * z;
                        h.yy = B + Math.sin(h.ang) * z;
                        c = h.xx - f;
                        b = h.yy - w;
                        w = h.fpos;
                        for (u = 0; u < rfc; u++) h.fxs[w] -= c * rfas[u], h.fys[w] -= b * rfas[u], w++, w >= rfc && (w = 0);
                        h.fx = h.fxs[h.fpos];
                        h.fy = h.fys[h.fpos];
                        h.ftg = rfc
                    }
                } else if ("y" == f)
                    if (w = c[b] << 8 | c[b + 1], b += 2, 2 == u)
                        for (z = preys.length - 1; 0 <= z; z--) {
                            if (h = preys[z], h.id == w) {
                                preys.splice(z, 1);
                                break
                            }
                        } else if (4 == u)
                        for (c = c[b] << 8 | c[b + 1], z = preys.length - 1; 0 <= z; z--) {
                            if (h = preys[z], h.id == w) {
                                h.eaten = !0;
                                h.eaten_by = os["s" + c];
                                h.eaten_by ? h.eaten_fr = 0 : preys.splice(z, 1);
                                break
                            }
                        } else t = c[b], b++, e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5, b += 3, u = c[b] / 5, b++, h = c[b] - 48, b++, x = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, D = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215, b += 3, A = (c[b] << 8 | c[b + 1]) / 1E3, newPrey(w, e, B, u, t, h, x, D, A)
            }
        };
        ws.onerror = function(b) {};
        ws.onclose = function(b) {
            ws == this && (playing = connected = !1)
        };
        ws.onopen = function(b) {
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b =
                    b.substr(0, 24));
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e == "" + Number(e) && (c = Number(e))
                } catch (f) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 5;
                e[2] = c;
                for (c = 0; c < b.length; c++) e[c + 3] = b.charCodeAt(c);
                ws.send(e);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                1 == render_mode && (high_quality = !1, gla = 0);
                lpstm = Date.now()
            }
        }
    }
}

function connectTo() {
        var ipnport = document.getElementById("ipaddr").value.split(":");
        bso.ip = ipnport[0];
        bso.po = ipnport[1];
        forceServer(bso.ip, bso.po);
}

function asciize(b) {
    var h, c, f;
    c = b.length;
    var C = !1;
    for (h = 0; h < c; h++)
        if (f = b.charCodeAt(h), 32 > f || 127 < f) {
            C = !0;
            break
        }
    if (C) {
        C = "";
        for (h = 0; h < c; h++) f = b.charCodeAt(h), C = 32 > f || 127 < f ? C + " " : C + String.fromCharCode(f);
        return C
    }
    return b
}
var nick = document.getElementById("nick"),
    victory = document.getElementById("victory"),
    victory_bg = document.getElementById("victory_bg"),
    logo = document.getElementById("logo"),
    login = document.getElementById("login"),
    lastscore = document.getElementById("lastscore"),
    nick_holder = document.getElementById("nick_holder"),
    victory_holder = document.getElementById("victory_holder"),
    smh = document.getElementById("smh"),
    cstx = document.getElementById("cstx");

var smh = document.getElementById("smh");
smh.innerHTML = smh.innerHTML + '<div style="position: fixed; left: 120px; bottom: 22px; z-index: 50; display: inline; opacity: 1;" id="chbgdiv"><a href="#" style="width: 95px; height: 89px;" id="chbg" draggable="false" class="btn btnt" title=""><img width="95" border="0" height="89" onclick="changeBg();" class="nsi" draggable="false" src="http://i.imgur.com/ELjPhtc.png"></a></div>';
//changeBg

try {
    "1" != localStorage.edttsg && (cstx.style.display = "inline")
} catch (b) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
    localStorage.edttsg = "1"
};
var fbh = document.getElementById("fbh"),
    twt = document.getElementById("twt");
twt.onclick = function() {
    localStorage.edttsg = "1"
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io! #slitherio");
var twth = document.getElementById("twth"),
    csk = document.getElementById("csk"),
    cskh = document.getElementById("cskh"),
    chbgdiv = document.getElementById("chbgdiv"), //chbgdiv, remember chbgdiv.style.opacity
    plq = document.getElementById("plq"),
    clq = document.getElementById("clq");
try {
    "1" == localStorage.edttsg && (cskh.style.display = "inline")
} catch (b) {}
var psk = document.getElementById("psk"),
    pskh = document.getElementById("pskh"),
    nsk = document.getElementById("nsk"),
    nskh = document.getElementById("nskh"),
    choosing_skin = !1;
psk.onclick = function() {
    if (playing && null != snake) {
        var b = snake.rcv;
        b--;
        0 > b && (b = max_skin_cv);
        setSkin(snake, b)
    }
    return !1
};
nsk.onclick = function() {
    if (playing && null != snake) {
        var b = snake.rcv;
        b++;
        b > max_skin_cv && (b = 0);
        setSkin(snake, b)
    }
    return !1
};
csk.onclick = function() {
    if (!playing && -1 == dead_mtm) {
        resetGame();
        choosing_skin = !0;
        pskh.style.opacity = 0;
        nskh.style.opacity = 0;
        skodiv.style.opacity = 0;
        pskh.style.display = "inline";
        nskh.style.display = "inline";
        skodiv.style.display = "inline";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        nick.disabled = !0;
        0 == mscps && setMscps(300);
        gsc = sgsc;
        for (var b = [], h = 22; 1 <= h; h--) b.push({
            xx: grd / 2 - 10 * h,
            yy: grd / 2,
            fx: 0,
            fy: 0,
            exs: [],
            eys: [],
            efs: [],
            ems: [],
            eiu: 0,
            fpos: 0,
            da: 0,
            ebx: 10,
            eby: 0
        });
        h = 0;
        try {
            var c = localStorage.snakercv;
            c == "" + Number(c) && (h = Number(c))
        } catch (f) {}
        b = newSnake(1, grd / 2, grd / 2, h, 0, b);
        view_xx = grd / 2 - 105;
        view_yy = grd / 2;
        snake = b;
        b.nk = "";
        b.eang = b.wang = b.ang;
        b.sp = 4.8;
        b.spang = b.sp / spangdv;
        1 < b.spang && (b.spang = 1);
        b.sc = 1;
        b.scang = 1;
        b.ssp = nsp1 + nsp2 * b.sc;
        b.fsp = b.ssp + .1;
        b.wsep = 6 * b.sc;
        c = nsep / gsc;
        b.wsep < c && (b.wsep = c);
        b.sep = b.wsep;
        snl(b);
        b.alive_amt = 1;
        b.rex = 1.66;
        ws = {
            send: function(b) {},
            close: function() {}
        };
        high_quality = playing = connected = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        startShowGame();
        lbh.style.display = "none";
        lbs.style.display = "none";
        lbn.style.display =
            "none";
        lbp.style.display = "none";
        lbf.style.display = "none";
        vcm.style.display = "none";
        loch.style.display = "none"
    }
    return !1
};
nick.oninput = function() {
    var b = this.value,
        h = asciize(b);
    24 < h.length && (h = h.substr(0, 24));
    b != h && (this.value = h)
};
victory.oninput = function() {
    var b = this.value,
        h = asciize(b);
    140 < h.length && (h = h.substr(0, 140));
    b != h && (this.value = h)
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas"),
    lmc = document.createElement("canvas"),
    lgsc = 1,
    lw = 900,
    lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d"),
    lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 107, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 140, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 48.5, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 178.5, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717,
        96, 717, 140, 717, 184
    ],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 48.5, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0,
    lgss = 0,
    ncka = 0,
    mwig = 4,
    lgfr = 0,
    lgtm = Date.now();

function showLogo(b) {
    var h = Date.now(),
        c = (h - lgtm) / 25;
    lgtm = h;
    var f, C, q, e, y, E, u, w, D, x, A, t, H, z, L;
    lgfr += c;
    if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka) clearInterval(showlogo_iv), showlogo_iv = -1;
    else {
        if (b || 1 != lga) lga += .05 * c, 1 <= lga && (lga = 1), lmc2.style.opacity = lga;
        1 != lgss && (lgss += .00375 * c, 1 <= lgss && (lgss = 1));
        if (b || 1 != ncka) ncka += .006 * c, 1 <= ncka && (ncka = 1), nick_holder.style.opacity = Math.min(1, 6 * ncka), is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))), .01 <= ncka && (playh.style.opacity = Math.min(1,
            5 * (ncka - .01)));
        lctx.clearRect(0, 0, lw, lh);
        for (h = 0; h < lts.length; h++) {
            var I = lts[h],
                B = I.pts,
                K = I.kc,
                M = I.ws,
                O = I.wr,
                N = I.qm;
            f = I.sp;
            var J = I.sz;
            L = I.r;
            var F = I.mwig;
            b && (I.wch = !0, F = 1E-7);
            I.wch && 0 != F && (F *= .982, F -= .001 * c, 1 == render_mode && (F -= .005 * c), 0 >= F && (F = 0), I.mwig = F);
            L || (L = 1);
            lctx.beginPath();
            9 > h ? (q = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc), q.addColorStop(0, "#80FFA0"), q.addColorStop(1, "#008040")) : (q = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc), q.addColorStop(0, "#9850FF"), q.addColorStop(1, "#281060"));
            lctx.fillStyle =
                q;
            H = !1;
            z = 0;
            q = B[0];
            e = B[1];
            D = q;
            x = e;
            var G = lgfr * f;
            for (A = 2; A < B.length; A += 4) {
                f = q;
                C = e;
                cx2 = B[A];
                cy2 = B[A + 1];
                q = B[A + 2];
                e = B[A + 3];
                for (var Q = 1; Q <= K; Q++) {
                    z++;
                    var P = Q / K;
                    y = f + (cx2 - f) * P;
                    E = C + (cy2 - C) * P;
                    u = cx2 + (q - cx2) * P;
                    w = cy2 + (e - cy2) * P;
                    y += (u - y) * P;
                    E += (w - E) * P;
                    D = Math.atan2(E - x, y - D);
                    H ? (D - t > Math.PI ? D -= 2 * Math.PI : D - t < -Math.PI && (D += 2 * Math.PI), t += .05 * (D - t), t %= 2 * Math.PI) : (H = !0, t = D);
                    D = y;
                    x = E;
                    y += Math.cos(Math.PI / 2 + t) * Math.sin(G) * M * F;
                    E += Math.sin(Math.PI / 2 + t) * Math.sin(G) * M * F;
                    G -= .76 * N * M;
                    M += O;
                    lctx.beginPath();
                    w = 1.15 * J * Math.min(1, lgsc * (.2 +
                            .8 * lga) * (30 * lgss * L - z / 20 - h / 2));
                    .5 < w && (lctx.arc(y * lgsc, E * lgsc, w, 0, pi2), I.wch = !0);
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1, showLogo(!0)) : showlogo_iv = setInterval("showLogo(false)", 25);
document.onkeydown = function(b) {
    b = b || window.event;
    b = b.keyCode;
    if (37 == b) kd_l = !0;
    else if (39 == b) kd_r = !0;
    else if (38 == b) kd_u = !0, setAcceleration(1);
    else if (13 == b || 10 == b)
        if (want_victory_message) {
            if (0 < victory.value.length) save_btn.elem.onclick()
        } else if (!connecting && !connected) play_btn.elem.onclick()
};
document.onkeyup = function(b) {
    b = b || window.event;
    b = b.keyCode;
    37 == b ? kd_l = !1 : 39 == b ? kd_r = !1 : 38 == b && (kd_u = !1, setAcceleration(0))
};

function loadSos(b) {
    if (!forcing && 0 < b.length) {
        sos = [];
        sis = [];
        b.charAt(0);
        for (var h = 1, c = {}, f = 0, c = f = 0, C, q = 0, e = 0, y = [], E = [], u = []; h < b.length;)
            if (C = (b.charCodeAt(h++) - 97 - e) % 26, 0 > C && (C += 26), q *= 16, q += C, e += 7, 1 == c) {
                if (0 == f) y.push(q), 4 == y.length && f++;
                else if (1 == f) E.push(q), 3 == E.length && f++;
                else if (2 == f && (u.push(q), 3 == u.length)) {
                    c = {};
                    for (f = C = 0; f < E.length; f++) C *= 256, C += E[f];
                    for (f = E = 0; f < u.length; f++) E *= 256, E += u[f];
                    c.ip = y.join(".");
                    c.po = C;
                    c.ac = E;
                    sos.push(c);
                    y = [];
                    E = [];
                    u = [];
                    f = 0
                }
                c = q = 0
            } else c++;
        for (h = sos.length - 1; 0 <=
        h; h--) {
            c = 1;
            for (f = sis.length - 1; 0 <= f; f--)
                if (sis[f].ip == sos[h].ip) {
                    c = 0;
                    break
                }
            if (1 == c) {
                e = b = -1;
                y = [];
                for (f = sos.length - 1; 0 <= f; f--) sos[f].ip == sos[h].ip && (y.push(sos[h].po), sos[f].ac > e && (b = f, e = sos[f].ac));
                sis.push({
                    ip: sos[b].ip,
                    po: y[Math.floor(Math.random() * y.length)],
                    ptms: []
                })
            }
        }
        for (f = sis.length - 1; 0 <= f; f--)
            if (c = sis[f], h = null, !(.5 > Math.random())) {
                try {
                    h = new WebSocket("ws://" + c.ip + ":" + c.po + "/ptc")
                } catch (w) {
                    h = null
                }
                h && (h.binaryType = "arraybuffer", h.onerror = function(b) {}, h.onmessage = function(b) {
                    b = new Uint8Array(b.data);
                    if (1 == b.length && 112 == b[0])
                        for (var c = sis.length - 1; 0 <= c; c--)
                            if (b = sis[c], b.ps == this) {
                                c = Date.now() - b.stm;
                                b.ptms.push(c);
                                4 > b.ptms.length ? (b.stm = Date.now(), b = new Uint8Array(1), b[0] = 112, this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3), this.close(), b.ps = null);
                                break
                            }
                }, h.onopen = function(b) {
                    b = !1;
                    for (var c = sis.length - 1; 0 <= c; c--) {
                        var e = sis[c];
                        if (e.ps == this) {
                            e.stm = Date.now();
                            b = new Uint8Array(1);
                            b[0] = 112;
                            this.send(b);
                            b = !0;
                            break
                        }
                    }
                    b || this.close()
                }, c.ps = h)
            }
    }
}


function changeBg(){ //changebg
    var bgurl = prompt("Enter background URL (599x519px)", "/s/bg45.jpg");

    ii.src = bgurl;
}

var mba = null,
    mbi = null;
if (is_ios || is_android) mba = document.createElement("a"), mbi = document.createElement("img"), mbi.border = 0, mbi.draggable = "false", mbi.className = "nsi", mbi.width = 1245, mbi.height = 260, mbi.style.position = "fixed", mbi.style.left = "0px", mbi.style.bottom = "0px", mbi.style.zIndex = 70, mbi.src = "/s/n2.jpg", mba.appendChild(mbi), document.body.appendChild(mba), is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = {
    f: function(b, h, c) {
        "success" == h && loadSos(b)
    }
};
getData("/i2.txt?" + Math.random(), o);
