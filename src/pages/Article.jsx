import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFoundImage from "../components/NotFound";
import RelatedArticles from "../components/RelatedArticles";
import Sidebar from "../components/InterestingArticles";
import { ArticlesContext } from "../context/ArticlesContext";

function Article() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const { articles, setCurrentCategory } = useContext(ArticlesContext);
    
    useEffect(() => {
        const currentArticle = articles.find(item => item.attributes.slug === slug);
        if(currentArticle) {
            setArticle(currentArticle)
            setCurrentCategory(currentArticle.attributes.category.data.attributes.name)
        }

        window.scrollTo({
            top: 0,
        });
    }, [articles, slug, setCurrentCategory])

    return (
        <div id="blog" className="post-template-default single single-post postid-211 single-format-standard">
            <div className="main-container">

                <Header />

                <div id="page" className="single">
                    <div className="content">
                        <article className="article">
                            {article ? <div id="post-211"
                                className="post post-211 type-post status-publish format-standard has-post-thumbnail hentry category-world">
                                <div className="single_post">
                                    <header>
                                        <h1 className="title single-title">{article.attributes.title}</h1>
                                    </header>
                                    <div className="post-single-content box mark-links">
                                        {article.attributes.textWithImage.map(content => {
                                            const img = content.caption?.data?.attributes?.url;
                                            return !img ?
                                                (
                                                    <div key={content.id}>
                                                        <pre className="article-text">{content.paragraph}</pre>
                                                    </div>
                                                ) :
                                                (
                                                    <div key={content.id}>
                                                        <pre className="article-text">{content.paragraph}</pre>
                                                        <img src={img} alt="" width="399" height="270" className="aligncenter size-medium wp-image-212 article-image" />
                                                    </div>
                                                );
                                        })}
                                    </div>

                                    <RelatedArticles />

                                </div>
                            </div> : <NotFoundImage />}


                        </article>



                        <Sidebar />

                    </div>
                </div>
                <Footer />

            </div>
        </div>
    );
}

export default Article;