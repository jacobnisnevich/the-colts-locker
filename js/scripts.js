$(document).ready(function() {
	articles.forEach(function(article) {
		$(".articles").append(createArticle(article.id, 
											article.title,
											article.author,
											article.authorTwitter,
											article.date, 
											article.blurb, 
											article.article, 
											article.tags));
	});

	$(".article-header").click(function() {
		$(this).parent().children(".article-body").slideToggle();
	});

	$(".articles").css({
		"min-height": $(window).height() - $(".footer").height() - 
										   $(".header").height() - 
										   (2 * parseInt($(".articles").css("padding")))
	});
});

var createArticle = function(id, title, author, authorTwitter, date, blurb, article, tags) {
	var articleDiv = "<div id='" + id + "' class='article shadow'>";
	articleDiv += "<div class='article-header'>" + title + "</div>";
	articleDiv += "<div class='article-author-date clearfix'>";
	articleDiv += "<div class='article-author'><a href='" + authorTwitter + "'>" + author + "</a></div>";
	articleDiv += "<div class='article-date'>" + date + "</div></div>";
	articleDiv += "<div class='article-body'>" + article + "</div>";
	articleDiv += "</div>";

	return articleDiv
}