({44:function(){var t=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,c=0,o=e.length;c<o;c++)!r&&c in e||(r||(r=Array.prototype.slice.call(e,0,c)),r[c]=e[c]);return t.concat(r||Array.prototype.slice.call(e))},e=t([],document.querySelectorAll("#top__nav ul li a"),!0),n=document.getElementById("content");e.forEach((function(t){t.addEventListener("click",(function(r){r.preventDefault(),e.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active");var c=t.getAttribute("href");fetch(c.slice(1)).then((function(t){return t.text()})).then((function(t){return n.innerHTML=t})).catch((function(t){return console.error(t)}))}))}))}})[44]();