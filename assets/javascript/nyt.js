var startYear = 0;
var endYear = 0;
var indexNumArticle = 0;

$('#searchForm').submit(function(){
	indexNumArticle = 0; //reset

	$("#searchResults").show();
	$("#articlesHere").empty();

	var nytKey = "4e1cd191060c4a94b411c236f8c2613d";
	var basicURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytKey + "&q=";
	var searched = $('#searched').val().trim();
	startYear = $('#startYear').val().trim();
	endYear = $('#endYear').val().trim();
	queryURL = basicURL + searched;

	if (parseInt(startYear)) {
		queryURL = queryURL + "&begin_date=" + startYear + "0101";
	}
	else {
		queryURL = queryURL + "&begin_date=20160101";
	}

	if (parseInt(endYear)) {
		queryURL = queryURL + "&end_date=" + endYear + "0101";
	}

	$("#whatArticles").html('Top 10 "'+searched+'" Articles');
	runQuery(queryURL);
	$("form").trigger("reset");
	return false;
});

function runQuery(queryURL){
	$.ajax({url: queryURL, method: "GET"}) 
		.done(function(NYTData) {

		for (var i=0; i<10; i++) {
			indexNumArticle++;

			var articleDiv = $("<div>");
			articleDiv.addClass('articleDiv');
			articleDiv.attr('id', 'article-' + indexNumArticle)
			$('#articlesHere').append(articleDiv);

			var headline = NYTData.response.docs[i].headline.main;
			var author = NYTData.response.docs[i].byline.original;
			var date = (NYTData.response.docs[i].pub_date).slice(0, -10);
			var section = NYTData.response.docs[i].section_name;
			var summary = NYTData.response.docs[i].snippet;
			var readurl = NYTData.response.docs[i].web_url;
			var read =("<a href='" + readurl + "'>Continue Reading...</a>");

			var thatDiv= $("#article-"+ indexNumArticle);
			thatDiv.append('<h2 class="articleHeadline">' + headline + "</h2>");	
			thatDiv.append('<h4>' + author + " ("+date+")</h4>");
			thatDiv.append('<h4>Section: ' + section + "</h4>");	
			thatDiv.append('<h4>' + summary + " "+read+ "</h4>");
		}
	});
}