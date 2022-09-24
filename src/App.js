import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getArticles } from "./http/articles";
import { ArticlesContext } from "./context/ArticlesContext";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

function App() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');
    useEffect(() => {
        setLoading(true);
        getArticles()
            .then(articles => {
                const posts = articles.sort((item1, item2) => {
                    return new Date(item2.attributes.date).getTime() - new Date(item1.attributes.date).getTime()
                })
                console.log(posts);
                setArticles(posts);
            })
            .then(() => setLoading(false))
    }, [])

    if(loading) return <Loader />

    return (
        <ArticlesContext.Provider value={{ articles, setArticles, loading, setLoading, currentCategory, setCurrentCategory }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article/:slug" element={<Article />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ArticlesContext.Provider>
    )
}

export default App;