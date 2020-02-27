// Christos Kokkalis 2020
// The following JavaScript code handles a user submission from an input field, fetches the requested JSON objects from
// Reddit's public API, and displays the top 10 results in HTML format with CSS styling

// Max articles per request (up to 25 posts at a time per subreddit API)
const articlesPerRequest = 10;

// Declare responses variable to store fetched JSON data
const responses = [];

// Handle user submission
const handleSubmit = e => {
  e.preventDefault();
  const subreddit = document.getElementById('subreddit').value;
  fetchArticles(subreddit);
};

// Access reddit API, fetch data
const fetchArticles = async (subreddit) => {
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/top.json?limit=${articlesPerRequest}`
  );
  const responseJSON = await response.json();
  responses.push(responseJSON);
  displayResults(responses[0]);
};

// Generate HTML list for loop (display responses & format data)
const displayResults = responses => {
  const container = document.getElementById('results-container');
  for (var i=0; i<responses.data.children.length; i++)
  { 
    var title = responses.data.children[i].data.title;
    var link = responses.data.children[i].data.permalink;
    const linkCard = document.createElement('a');
    linkCard.href = "https://www.reddit.com"+link;
    linkCard.classList.add('post-card');
    linkCard.innerText = title;
    container.appendChild(linkCard);
  }
}

// Event listener
const subredditSelectForm = document.getElementById('subreddit-select-form');
subredditSelectForm.addEventListener('submit', handleSubmit);
