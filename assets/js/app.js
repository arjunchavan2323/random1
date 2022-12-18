//alert("hilo")
var cl=console.log;

var imgcontainer=document.getElementById("imgcontainer");

var imgArray=["https://source.unsplash.com/random/?city",
              "https://source.unsplash.com/random/?shivsena",
			  "https://source.unsplash.com/random/?raje",
			  "https://source.unsplash.com/random/?watch",
			  "https://source.unsplash.com/random/?chhatrapati shivaji",
			  "https://source.unsplash.com/random/?shivray",
			  "https://source.unsplash.com/random/?india",
			  "https://source.unsplash.com/random/?mumbai",
			  "https://source.unsplash.com/random/?gandhi",
			  "https://source.unsplash.com/random/?maharashtra",
			  "https://source.unsplash.com/random/?mahadev",
			  "https://source.unsplash.com/random/?html",
			  "https://source.unsplash.com/random/?css",
			  "https://source.unsplash.com/random/?sass",
			  "https://source.unsplash.com/random/?boostrap",
			  "https://source.unsplash.com/random/?mongodb",
			  "https://source.unsplash.com/random/?up",
			  "https://source.unsplash.com/random/?delhi",
			  "https://source.unsplash.com/random/?bird",
			  "https://source.unsplash.com/random/?army",
			  "https://source.unsplash.com/random/?police",
			  "https://source.unsplash.com/random/?mp",
			  "https://source.unsplash.com/random/?shree",
			  




]

result="";
imgArray.forEach(function(img){
result+=`
<div class="col-sm-4 mb-3">
<div class="card">
<div class="card-header">imagesd</div>
<div class="card-body">
<img src="${img}"class="img-fluid">
</div>
</div>


</div>`	
	
})

imgcontainer.innerHTML=result;