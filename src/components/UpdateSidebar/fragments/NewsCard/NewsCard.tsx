import "./NewsCard.css";
import React from "react";

interface NewsCardProps {
  news: {
    id: number
    title: string;
    image: string;
    source: string;
    date: string;
    time: string;
  };
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onClick }) => {
  const { title, image, source, date, time } = news;

  return (
    <div className="news-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <div className="news-card-footer">
          <span>{`${date} ${time}`}</span>
          <span>{source}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
