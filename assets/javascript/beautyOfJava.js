
var search = prompt("enter");
var getArticle = function (search) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=IMIcpmhbfn3Fzie5MCJtfer4qJbYfnlB";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var add = $("<div>")
        for(var i = 0; i < 6; i++);{
            var url = $("<a>" + JSON.stringify(response.response.docs[i].web_url + "<a>"));
            add.append(url);
        $("#help").append(add)}
    })
}
getArticle(search);
