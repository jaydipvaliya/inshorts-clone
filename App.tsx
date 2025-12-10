import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DownloadBanner from './components/DownloadBanner';
import NewsCard from './components/NewsCard';
import { fetchNewsArticles } from './services/geminiService';
import { Category, NewsArticle } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('India');
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const getNews = useCallback(async (category: Category) => {
    setLoading(true);
    setArticles([]); // Clear previous articles while loading
    try {
      const data = await fetchNewsArticles(category);
      setArticles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNews(selectedCategory);
  }, [selectedCategory, getNews]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] pb-10">
      <Navbar onMenuClick={toggleSidebar} />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <div className="container mx-auto px-2 md:px-0 mt-8">
        <DownloadBanner />
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
             <p className="text-gray-500 font-light">Generating latest news for {selectedCategory}...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
             {articles.length > 0 ? (
               articles.map((article, index) => (
                 <NewsCard key={index} article={article} />
               ))
             ) : (
               <div className="text-gray-500 mt-10">No articles found. Try refreshing.</div>
             )}
          </div>
        )}
        
        {!loading && articles.length > 0 && (
            <div className="flex justify-center mt-4 mb-8">
                 <button 
                    onClick={() => getNews(selectedCategory)}
                    className="px-6 py-2 bg-white border border-gray-300 shadow-sm text-gray-700 rounded hover:bg-gray-50 transition"
                 >
                    Load More
                 </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default App;