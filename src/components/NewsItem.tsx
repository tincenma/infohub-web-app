import React from 'react';
import { NewsItemProps } from '../types/NewsTypes';

const NewsItem: React.FC<NewsItemProps> = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{ height: "200px" }} className="card-img-top" alt="News Image" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News about something that happened somewhere somehow with someone or something by someone or something."}
        </p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;
