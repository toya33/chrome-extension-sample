
const getHeadingElement = function(article) {

  if (article.querySelector("h1") !== null)
  {
    return article.querySelector("h1")
  }

  if (article.querySelector("h2") !== null)
  {
    return article.querySelector("h2")
  }

  if (article.querySelector("h3") !== null)
  {
    return article.querySelector("h3")
  }
};

const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  let heading = getHeadingElement(article)

  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
