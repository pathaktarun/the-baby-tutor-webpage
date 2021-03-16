$("#form").submit(function(e)
{
    e.preventDefault();
    var query=$("#search").val();
    var access_key='d1fea1b245e66a3c6977c8b646137db3';
    var url='http://api.serpstack.com/search?access_key='+access_key + '&type=web&query=' +query; 
    console.log(url);
    $.get(url,function(data){
        console.log(data);
        $("#result").html('');
        data.organic_results.forEach(res=>
            {  
                result=`<h1> ${res.title}</h1><br><a target=_blank href="${res.url}">${res.url}</a>
                
                <p>${res.snippet}</p>`
                $("#result").append(result);   
            })

    });

})
