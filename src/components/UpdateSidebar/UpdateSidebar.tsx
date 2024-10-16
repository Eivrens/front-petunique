import "./UpdateSidebar.css";
import React, { useState } from "react";
import NewsCard from "./fragments/NewsCard/NewsCard";
import NewsDetailsModal from "./fragments/NewsDetailsModal/NewsDetailsModal";
import NewsDataMock from "./fragments/NewsDetailsModal/Data/NewsDataMock";

const UpdateSidebar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  const openNewsModal = (id: number) => {
    setModalOpen(true);
    setSelectedNewsId(id);
  };

  const closeNewsModal = () => {
    setModalOpen(false);
    setSelectedNewsId(null);
  };

  return (
    <div className="update-sidebar">
      {NewsDataMock.map((news) => (
        <NewsCard key={news.id} news={news} onClick={() => openNewsModal(news.id)} />
      ))}
      <NewsDetailsModal isOpen={isModalOpen} isClosed={closeNewsModal} newsId={selectedNewsId} />
    </div>
  );
};

export default UpdateSidebar;
