import React from 'react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-[4px] shadow-[0_2px_5px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.12)] mb-6 overflow-hidden flex flex-col md:flex-row max-w-[900px] w-full mx-auto relative group">
      
      {/* Image Section */}
      <div className="md:w-[320px] h-[200px] md:h-auto flex-shrink-0 bg-gray-200">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-[20px] md:text-[22px] leading-[27px] font-light text-[#44444d] mb-2 tracking-wide">
            {article.title}
          </h2>
          
          <div className="text-[12px] text-[#808290] mb-3 font-light">
            <span className="font-bold text-black">short</span> by {article.author} / {article.time} on {article.date}
          </div>
          
          <p className="text-[16px] font-light text-[#44444d] leading-[24px]">
            {article.content}
          </p>
        </div>

        <div className="mt-4 md:mt-2 text-[12px] font-light text-[#808290]">
          read more at <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-black font-bold no-underline">{article.sourceName}</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;