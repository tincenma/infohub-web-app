import { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem.jsx";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../config.js";


export default function NewsBoard({ category, searchQuery }) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `${NEWS_API_BASE_URL}&category=${category}&apiKey=${NEWS_API_KEY}`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
      })
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Fetch Error:', error));
  }, [category])

  const filteredArticles = articles.filter((news) => {
    if (!searchQuery)
      return true; // если поисковый запрос пустой, показываем все статьи
    const lowerQuery = searchQuery.toLowerCase();
    return (
      (news.title && news.title.toLowerCase().includes(lowerQuery)) ||
      (news.description && news.description.toLowerCase().includes(lowerQuery))
    );
  });

  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {filteredArticles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  )
}
