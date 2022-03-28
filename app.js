// Toggle dark theme
const html = document.querySelector('html');
const toggleBtn = document.querySelector('.btn');
toggleBtn.addEventListener('click', () => {
	// Sélection du bloc HTML ,-)
	document.documentElement.classList.toggle('darkTheme');
});

// Display data
const articlesContainer = document.querySelector('.articles');
const articlesData = articles.map((article) => {
	const { id, title, date, length, snippet } = article;
	// Format date
	const formatDate = moment(date).format("MMMM Do, YYYY");
	// Return
	return(
		`<article class="post">
			<h2>${ title }</h2>
			<div class="post-info">
				<span>${ formatDate }</span>
				<span>${ length } min read</span>
			</div>
			<p>${ snippet }</p>
		</article>`
	);
}).join('');
articlesContainer.innerHTML = articlesData;