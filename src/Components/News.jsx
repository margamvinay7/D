import React from 'react'

const News = () => {

    const newsData = async () => {
        const news = await fetch(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=609034a4817843888b3d30ce600f0273"
        );
        const response = await news.json();
        console.log(response);
      };
    
      newsData();
  return (
    <></>
  )
}

export default News