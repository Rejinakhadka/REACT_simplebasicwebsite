import React from 'react';
import news1 from "../assets/images/news1.png"
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import news4 from "../assets/images/news4.png";
import news5 from "../assets/images/news5.png";
import news6 from "../assets/images/news6.png";
import "../News.css";

const newsData = [
  {
    id: 1,
    image: news1,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition   ',
    description: 
    'In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
  {
    id: 2,
    image: news2,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition ',
    description: 
    'In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
  {
    id: 3,
    image: news3,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition ',
    description: 
    'In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
  {
    id: 4,
    image: news4,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition ',
    description: 
    'In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
  {
    id: 5,
    image: news5,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition ',
    description: 
   ' In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
  {
    id: 6,
    image: news6,
    title: 'Statement from the Catalogue Colition Statement from the Catalogue Colition ',
    description: 
    'In 1947, the United Nations adopted Resolution 181, known as the Partition Plan, which sought to divide the British Mandate of Palestine into Arab and Jewish states. On May 14, 1948, the State of Israel was created, sparking the first Arab-Israeli War.',
  },
];

const News = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h2>News</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          dolor non dolor.
        </p>
      </div>
      <div className="news-cards">
        {newsData.map((newsItem) => (
          <div className="news-card" key={newsItem.id}>
            <img src={newsItem.image} alt={newsItem.title} />
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <a href="#">Learn More &rarr;</a>
          </div>
        ))}
      </div>
      <div className="news-footer">
        <button className="view-all-news-button">View All News</button>
      </div>
    </div>
  );
};

export default News;
