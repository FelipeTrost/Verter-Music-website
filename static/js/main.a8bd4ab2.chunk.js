(this.webpackJsonpverter_react=this.webpackJsonpverter_react||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.922ab98c.png"},17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),l=a.n(c),o=a(4),i=a(13),s=a.n(i),u=(a(22),a(23),a(0)),m=a.n(u),h=(a(11),a(14)),d=a(15),f=a(16),E=function(){function e(t,a,n,r,c,l,o,i,s){Object(d.a)(this,e),this.x=t,this.y=a,this.r1=n,this.r2=r,this.npoints=c,this.colr=l,this.colg=o,this.colb=i,this.sx=0,this.sy=0,this.angle=360/c,this.halfAngle=360/c/2}return Object(f.a)(e,[{key:"createStar",value:function(e){e.noStroke(),e.fill(this.colr,this.colg,this.colb),e.beginShape();for(var t=0;t<360;t+=this.angle)this.sx=this.x+e.cos(t)*this.r2,this.sy=this.y+e.sin(t)*this.r2,e.vertex(this.sx,this.sy),this.sx=this.x+e.cos(t+this.halfAngle)*this.r1,this.sy=this.y+e.sin(t+this.halfAngle)*this.r1,e.vertex(this.sx,this.sy);e.endShape(e.CLOSE)}},{key:"moveStar",value:function(e,t){if(this.y+=e.pow(this.r1,.9),this.y>e.height){var a=t.indexOf(this);t.splice(a,1)}}}]),e}(),p=function(e,t){var a,n,r,c,l,o,i,s=80,u=!1,d=!1,f=!1,p=0,v=[];e.playSong=function(t){if(a&&a.url===t)return u&&e.canvasPressed(),!1;u=!1,d=!0,a&&a.pause(),p=0,a=null,a=e.loadSound(t,(function(){u=!0,d=!1,f||a.play()}),(function(e){return console.log("er\xa7or: "+e)}),(function(e){p=e}))},e.preload=function(){return o=e.loadImage(t)},e.stop=function(){a&&a.pause(),f=!0},e.canvasPressed=function(){if(!a)return null;a.isPlaying()?a.pause():a.play()},e.windowResized=function(){e.windowWidth<500&&(e.resizeCanvas(.7*e.windowWidth,.7*e.windowWidth),s=50),c=e.height,l=e.width},e.setup=function(){i=e.createCanvas(350,350),e.windowResized(),i.mousePressed(e.canvasPressed),i.parent("canvas"),e.angleMode(e.DEGREES),n=new m.a.FFT(.7,1024)},e.draw=function(){if(e.image(o,0,0,l,c),u){e.background("rgba(0,0,0, 0.25)"),r=n.analyze(),e.translate(l/2,c/2);for(var t=1;t<361;t+=4){var a=.2*r[t];a=a*(Math.sqrt(120-a)/Math.sqrt(110))|10;var i=e.cos(t)*s,m=e.sin(t)*s,f=e.cos(t)*(a+s),b=e.sin(t)*(a+s);e.stroke(255),e.line(i,m,f,b)}}else if(d){for(var g=new E(e.random(0,l),e.random(0,c/2),e.random(2,4),e.random(2,7),5,17,85,79,e),y=0;y<e.random(3);y+=1)v.push(g);var k,w=Object(h.a)(v);try{for(w.s();!(k=w.n()).done;){var N=k.value;N.moveStar(e,v),N.createStar(e)}}catch(S){w.e(S)}finally{w.f()}e.stroke(255),e.fill(255),e.rect(0,4*c/5,p*l,30)}}},v=a(3),b=a(6),g=function(e){var t=e.track,a=e.close,c=Object(n.useState)(!1),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),d=h[0],f=h[1];Object(n.useEffect)((function(){document.addEventListener("keyup",E);var e=new AbortController,a=e.signal,n=new m.a((function(e){p(e,t.cover_big)}));return f(n),fetch("https://cors-anywhere.herokuapp.com/"+t.tracklist,{signal:a}).then((function(e){return e.json()})).then((function(e){s(e.data)})),function(){n.stop(),n.remove(),document.removeEventListener("keydown",E,!1),e.abort()}}),[]);var E=function(e){27===e.keyCode&&a()};return r.a.createElement("div",{id:"popup1",className:"overlay",onClick:function(e){"overlay"===e.target.className&&a()}},r.a.createElement("div",{className:"popup","react-html-id":"popup"},r.a.createElement("h3",null,t.title," ",r.a.createElement("p",null,t.release_date)),r.a.createElement("p",{className:"close",onClick:a},"\xd7"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{id:"canvas"}),r.a.createElement("br",null),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Songs:"),r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},e.title," "),r.a.createElement(v.a,{icon:b.b,onClick:function(){return d.playSong(e.preview)}}))})))),r.a.createElement("a",{href:t.link,rel:"noopener noreferrer",target:"_blank"},"Listen to it on Deezer"))))},y=function(e){var t=e.handleSelection,a=e.close,n=e.open;return r.a.createElement("div",{className:"sideNav",style:{width:n?"80%":0}},r.a.createElement("p",{className:"closeNav",onClick:a},"\xd7"),r.a.createElement("p",{onClick:function(){return t(0)}},"ABOUT ME"),r.a.createElement("p",{onClick:function(){return t(1)}},"RELEASES"),r.a.createElement("p",{onClick:function(){return t(2)}},"WHERE TO FIND ME"))},k=function(e){var t=e.tracks,a=e.trackSelected,n=t.map((function(e){return r.a.createElement("div",{className:"flip-card",aos:"fade",key:e.id,onClick:function(){return a(e.id)}},r.a.createElement("div",{className:"dummy"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("img",{src:e.cover_medium,alt:e.title})),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("h3",null,e.title)))))}));return r.a.createElement(r.a.Fragment,null,n)},w=a(5),N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/14379707/albums",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return c(e.data)})).catch((function(e){return alert("Error al cargar albumes.")}))}),[]);var l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1],h=Object(n.useState)(!1),d=Object(o.a)(h,2),f=d[0],E=d[1],p=Object(n.useRef)(),N=Object(n.useRef)(),S=Object(n.useRef)();return r.a.createElement("div",{onClick:function(e){"sideNav"!==e.target.className&&u&&m(!1)},className:"main"},r.a.createElement(y,{handleSelection:function(e){switch(e){default:case 0:p.current.scrollIntoView({behavior:"smooth"});break;case 1:N.current.scrollIntoView({behavior:"smooth"});break;case 2:S.current.scrollIntoView({behavior:"smooth"})}},close:function(){return m(!1)},open:u}),f&&r.a.createElement(g,{track:f,close:function(){return E(!1)}}),r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"menuBar"},r.a.createElement(v.a,{icon:b.a,onClick:function(){return m((function(e){return!e}))}})),r.a.createElement("img",{src:s.a,className:"logo",alt:"Logo"}),r.a.createElement("div",{className:"section",ref:p},r.a.createElement("h1",null,"ABOUT ME"),r.a.createElement("p",null,"Hi, I'm a Chilean/German musician and somewhat of an artist, I guess my number one characteristic is my laziness, I'm so lazy I didn't even write this bio. Let me tell you a little about myself. I've loved music ever since I can remember, when I was a little boy  I couldn't stop talking about it and always annoyed everyone, and that someday developed into me learning how to play the guitar, and eventually into getting into making awesome music. ",r.a.createElement("br",null),"Hope you enjoy my journey.")),r.a.createElement("br",null)),r.a.createElement("div",{className:"section",ref:N},r.a.createElement("h1",{className:"titel"},"RELEASES"),r.a.createElement("div",{className:"releases"},a?r.a.createElement(k,{tracks:a,trackSelected:function(e){var t=a.find((function(t){return t.id===e}));t&&E(t)}}):r.a.createElement(v.a,{icon:b.c,spin:!0,className:"spinner"}))),r.a.createElement("div",{className:"section",ref:S},r.a.createElement("h1",null,"WHERE TO FIND ME"),r.a.createElement("div",{className:"logos"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/verter_music"},r.a.createElement(v.a,{icon:w.c})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://open.spotify.com/artist/6H8wsbtJTIAsvbKysRvVFO?si=68wVdV44RdCBUzx3LfZAcA"},r.a.createElement(v.a,{icon:w.e})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://music.apple.com/us/artist/verter-music/1360898688"},r.a.createElement(v.a,{icon:w.a})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://play.google.com/store/music/artist/Verter_Music?id=At3s3lycrhahb7cwgjw5niptfn4"},r.a.createElement(v.a,{icon:w.b})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/the_verter"},r.a.createElement(v.a,{icon:w.d})))),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",null,"Dev: Felipe Trost")),r.a.createElement("div",null,r.a.createElement("p",null,"Martin Vetter"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a8bd4ab2.chunk.js.map