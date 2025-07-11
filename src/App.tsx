import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, X } from 'lucide-react';
import axios from 'axios';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface SearchResponse {
  products: Product[];
  count: number;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post<SearchResponse>('http://localhost:8000/search', {
        query,
        limit: 20
      });
      setSearchResults(response.data.products);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = async (product: Product) => {
    setSelectedProduct(product);
    setShowRecommendations(true);
    
    try {
      const response = await axios.get<SearchResponse>(`http://localhost:8000/recommendations?product=${encodeURIComponent(product.name)}&limit=8`);
      setRecommendations(response.data.products.filter(p => p.name !== product.name));
    } catch (error) {
      console.error('Recommendations error:', error);
      setRecommendations([]);
    }
  };

  const closeRecommendations = () => {
    setShowRecommendations(false);
    setSelectedProduct(null);
    setRecommendations([]);
  };

  useEffect(() => {
    if (searchQuery) {
      const delayedSearch = setTimeout(() => {
        handleSearch(searchQuery);
      }, 300);
      return () => clearTimeout(delayedSearch);
    }
  }, [searchQuery]);

  return (
    <div className="app">
      <ParticleBackground />
      <div className="app-container">
        <motion.header 
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="logo-icon" />
              <span className="logo-text">index</span>
            </motion.div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}

export default App;