var JekyllPWA=JekyllPWA||{};JekyllPWA.Posts={init:function(){this.initMentions(),this.initAnotherFunction()},initMentions:function(){const e=document.getElementById("page-path").value;fetch("https://webmention.io/api/mentions?target="+e).then(e=>e.json()).then(e=>{0==e.links.length?console.log("no mentions yet"):(document.querySelector(".post-webmentions").removeAttribute("hidden"),e.links.forEach(function(e){var n=document.getElementById("mention-tmpl").content.cloneNode(!0);n.querySelector(".mention-reply-content").innerHTML=e.data.content,n.querySelector(".mention-reply-author").innerText=e.data.author.name,n.querySelector(".mention-reply-link").setAttribute("href",e.source),n.querySelector(".mention-reply-link").innerText=e.data.author.url,document.getElementById("webmentions-container").appendChild(n)})),console.log(e)})},initAnotherFunction:function(){console.log("party?")}},JekyllPWA.Posts.init();