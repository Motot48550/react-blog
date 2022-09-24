import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InterestingArticles from "../components/InterestingArticles";
import LatestArticles from "../components/LatestArticles";

function Category() {
    const { name } = useParams();
    const { articles } = useContext(ArticlesContext);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPegPage] = useState(process.env.REACT_APP_ITEMS_PER_PAGE);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        setPosts(articles.filter(article => article.attributes.category.data.attributes.name === name));
    }, [articles, name])

    return (
        <div id="blog" className="post-template-default single single-post postid-211 single-format-standard">
            <div className="main-container">

                <Header />

                <div id="page" className="home-page">
                    <div className="content">
                        <div className="article">
                            {posts.length ? <LatestArticles articles={posts} page={page} setPage={setPage} itemsPegPage={itemsPegPage} /> : <div>Постов нет</div>}
                        </div>
                        <InterestingArticles categoryPage />

                    </div>
                </div>

                <Footer />

            </div>
        </div>
    );
}

export default Category;