"use strict";let scroll=function(){return{init:function(){!function(){let e=document.getElementById("main-left").offsetTop,t=document.getElementById("introduce"),n=document.getElementById("top");window.onscroll=function(){(document.body.scrollTop||document.documentElement.scrollTop)>e-32?(t.classList.add("fixed"),n.style.bottom="2rem"):(t.classList.remove("fixed"),n.style.bottom="")}}(),function(){let e=document.getElementById("top"),t=document.getElementById("container");e.addEventListener("click",function(){t.scrollIntoView({behavior:"smooth",block:"start"})})}()}}}(),siteSearch=function(){let e={},t=document.querySelector("html"),n=document.getElementById("search-img"),c=document.getElementById("container"),o=document.getElementById("search-mask"),i=document.getElementById("search-pop"),l=document.getElementById("search-input"),s=document.getElementById("search-close"),a=document.getElementById("search-body").querySelector("ul");function r(){i.classList.remove("fadein"),o.style.display="none",c.classList.remove("filter"),t.classList.remove("overflow_hidden"),a.innerHTML="",l.value=""}function d(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function u(){n.addEventListener("click",function(e){i.classList.add("fadein"),o.style.display="block",c.classList.add("filter"),t.classList.add("overflow_hidden"),d(e)})}let m='<li>\n        <a href="{HREF}">\n        <div class="search-title">{TITLE}</div>\n        <div class="search-date">{DATE}</div>\n        <div class="search-tag">{TAG}</div>\n        </a>\n      </li>';function f(t){t?(Object.keys(e).length?new Promise(function(t,n){t(e)}):fetch("/content.json",{method:"GET"}).then(function(e){return e.json()}).then(function(t){return e=t}).catch(function(e){console.log("fetch failed",e)})).then(e=>{if(e.length){let n;if((n=e.filter(e=>(function(e,t){var n=new RegExp(t.replace(/[ ]/g,"|"),"gmi");return n.test(e.title)||e.tags.some(function(e){return n.test(e.name)})||n.test(e.text)})(e,t))).length){let e="";for(let t=0;t<n.length;t++){let c="";if(n[t].tags.length)for(let e=0;e<n[t].tags.length;e++)c+=`<a href="${n[t].tags[e].permalink}">#${n[t].tags[e].name}</a> &nbsp&nbsp`;e+=m.replace("{HREF}",n[t].permalink).replace("{TITLE}",n[t].title).replace("{TAG}",c).replace("{DATE}",n[t].date)}a.innerHTML=e}else a.innerHTML='<li><a href="#">无结果</a></li>'}}):a.innerHTML=""}function g(){l.addEventListener("input",function(e,t){let n=this,c=null;return function(o){c?(clearTimeout(c),c=setTimeout(function(){e.call(n,o.target.value)},t)):c=setTimeout(function(){e.call(n,o.target.value)},t)}}(f,1e3))}function h(){u(),s.addEventListener("click",function(){r()}),i.addEventListener("click",function(e){d(e)}),document.addEventListener("click",function(){r()}),g()}return{init:function(){h()}}}();