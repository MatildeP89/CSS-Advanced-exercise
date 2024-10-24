
let twitterButton=document.querySelector("div.p-4:last-child ol li:nth-of-type(2)")
twitterButton.style.display="none"


let link=document.querySelector("div.jumbotron p.lead a ")
let parent=link.parentElement;
link.addEventListener("click", function(){parent.style.display="none"} )


let authorsButtons=document.querySelector("p.blog-post-meta a")
let authorName=authorsButtons.textContent
authorsButtons.addEventListener("mouseover", function(){alert(authorName)})


