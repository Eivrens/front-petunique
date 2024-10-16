import "./NewsDetailsModal.css";
import React from "react";
import Modal from "../../../Modal/Modal";
import NewsDataMock from "./Data/NewsDataMock";

interface NewsDetailsModalProps {
  isOpen: boolean;
  isClosed: () => void;
  newsId: number | null;
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ isOpen, isClosed, newsId }) => {
    const news = newsId !== null ? NewsDataMock.find(item => item.id === newsId) : null;
  
    if (!isOpen || !news) return null;
  
    return (
      <Modal isOpen={isOpen} isClosed={isClosed}>
      <div className="news-details-modal">
        <h2>{news.title}</h2>
        <img src={news.image} alt={news.title} />
        <p className="news-details-footer">{news.source}, {news.date} às {news.time}</p>
        <div className="news-details-body" dangerouslySetInnerHTML={{ __html: news.body }} />
      </div>
    </Modal>
    );
  };
  
  export default NewsDetailsModal;