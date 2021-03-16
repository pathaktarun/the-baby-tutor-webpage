console.log("The baby tutor project");
var values=["Apple","Banana","Cat","Dog","Egg","Fish","Grapes","Horse","Icecream","jug","Kite","Lion","Mango","Nest","Orange","parrot","Queen","Rat","Snow","Table","Umbrella","Van","Watch","Xmas","Yak","Zebra"];
var items=document.querySelectorAll("#alpha li");
var prev_index=-1;
for(var i=0;i<items.length;i++)
{
    items[i].onclick=function(){
      document.getElementById("alpha").style.backgroundColor="#32a89b";
      document.getElementById("search_box").value="";
     this.style.backgroundColor="";
      var text=this.innerHTML;
       console.log(text);
      var k=text.charCodeAt(0);
      console.log(k);
      console.log(values[k-65]);
     var s=document.getElementById("search_box");

     s.value+=values[k-65]; 
     searchphoto();   
      prev_index=i;
    };
}

function searchphoto(){
  
  console.log("inside search");
  let clientid="ZmztM3MTJ66yqwciX49aFXxqnLRDO_OfRMCPmFwk2gw";
  let query=document.getElementById("search_box").value;
 
  console.log(query);
 
  let url="https://api.unsplash.com/search/photos/?client_id="+clientid+"&query="+query;
  console.log(url);
  document.getElementById("image_container").innerHTML="";
  
  fetch(url).then(function(data){ 
    console.log(data);
    return data.json();
  }).then(function(data){
      
      let image=new Image();
      image.height=300;
      image.width=400;
      image.src=data.results[0].urls.small;
      document.getElementById("image_container").appendChild(image);
      
      console.log(data);
  })

  }