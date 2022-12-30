!function(){"use strict";var t=document.querySelector("canvas"),i=t.getContext("2d"),h=t.width=window.innerWidth,o=t.height=window.innerHeight,n=700,e=1e3,a=[];function r(t,s){this.x=t,this.y=s}r.prototype={constructor:r,add:function(t){this.x+=t.x,this.y+=t.y},diff:function(t){var s=this.copy();return Math.sqrt((s.x-=t.x)*s.x+(s.y-=t.y)*s.y)},copy:function(){return new r(this.x,this.y)}};var p=[["rgba(179,255,129,","rgba(0,255,0,"],["rgba(0,0,255,","rgba(100,217,255,"],["rgba(255,0,0,","rgba(255,255,0,"],["rgba(145,0,213,","rgba(251,144,204,"]];function d(t,s,i){this.start=t,this.pos=this.start.copy(),this.target=s,this.spread=Math.round(Math.random()*(n-e))+e,this.distance=s.diff(t),this.speed=i||5*Math.random()+15,this.angle=Math.atan2(s.y-t.y,s.x-t.x),this.velocity=new r(Math.cos(this.angle)*this.speed,Math.sin(this.angle)*this.speed),this.particals=[],this.prevPositions=[];for(var h=p[Math.round(Math.random()*(p.length-1))],o=0;o<this.spread;o++)this.particals.push(new c(s.copy(),h))}function c(t,s){this.pos=t,this.ease=.2,this.speed=6*Math.random()+2,this.gravity=3*Math.random()+.1,this.alpha=.8,this.angle=Math.random()*(2*Math.PI),this.color=s[Math.round(Math.random()*(s.length-1))],this.prevPositions=[]}function s(t){var s=new r(h/2,o);t=t||new r(Math.random()*h,Math.random()*(o-300)),a.push(new d(s,t))}d.prototype={constructor:d,draw:function(){var t=this.prevPositions[this.prevPositions.length-1]||this.pos;i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(this.pos.x,this.pos.y),i.strokeStyle="rgba(255,255,255,.7)",i.stroke(),this.update()},update:function(){var s;this.start.diff(this.pos)>=this.distance?(s=[],this.particals.forEach(function(t){t.draw(),t.done||s.push(t)}),this.particals=s,this.prevPositions=[],s.length||(this.done=!0)):(this.prevPositions.push(this.pos.copy()),8<this.prevPositions.length&&this.prevPositions.shift(),this.pos.add(this.velocity))}},c.prototype={constructor:c,draw:function(){var t=this.prevPositions[this.prevPositions.length-1]||this.pos;i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(this.pos.x,this.pos.y),i.strokeStyle=this.color+this.alpha+")",i.stroke(),this.update()},update:function(){this.alpha<=0?this.done=!0:(this.prevPositions.push(this.pos.copy()),10<this.prevPositions.length&&this.prevPositions.shift(),1<this.speed&&(this.speed-=this.ease),this.alpha-=.01,this.gravity+=.01,this.pos.add({x:Math.cos(this.angle)*this.speed,y:Math.sin(this.angle)*this.speed+this.gravity}))}},t.addEventListener("click",function(t){s(new r(t.clientX,t.clientY))},!1),function t(){var s=[];i.clearRect(0,0,h,o),a.forEach(function(t){t.draw(),t.done||s.push(t)}),a=s,window.requestAnimationFrame(t)}(),function t(){s(),window.setTimeout(t,500*Math.random())}()}();