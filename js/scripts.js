$(document).ready(function() {
	var articleId = getUrlParameter("article");

	if (articleId) {
		var article = $.grep(articles, function(x) { return x.id == articleId; })[0];
		$(".articles").append(createArticle(article.id, 
											article.title,
											article.author,
											article.authorTwitter,
											article.date, 
											article.blurb, 
											article.article, 
											article.tags));
		gfyCollection.init();
		$(".article-body").slideToggle();
	} else {
		articles.forEach(function(article) {
			$(".articles").append(createArticle(article.id, 
												article.title,
												article.author,
												article.authorTwitter,
												article.date, 
												article.blurb, 
												article.article, 
												article.tags));
			if (articles.indexOf(article) == articles.length - 1) {
				gfyCollection.init();
			}
		});
	}


	$(".article-header").click(function() {
		$(this).parent().children(".article-body").slideToggle();
	});

	$(".articles").css({
		"min-height": $(window).height() - $(".footer").height() - 
										   $(".header").height() - 
										   (2 * parseInt($(".articles").css("padding")))
	});

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", gfyCollection.init, false);
	} else {
		document.attachEvent("onreadystatechange", gfyCollection.init);
	}
});

var createArticle = function(id, title, author, authorTwitter, date, blurb, article, tags) {
	var articleDiv = "<div id='" + id + "' class='article shadow'>";
	articleDiv += "<div class='article-header'>" + title + "</div>";
	articleDiv += "<div class='article-author-date clearfix'>";
	articleDiv += "<div class='article-author'><a href='" + authorTwitter + "'>" + author + "</a></div>";
	articleDiv += "<div class='article-date'>" + date + "</div></div>";
	articleDiv += "<div class='article-body'>" + article + "</div>";
	articleDiv += "</div>";

	return articleDiv;
}


var getUrlParameter = function(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};