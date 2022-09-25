import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LatestArticles({ articles, page, setPage, itemsPegPage }) {
    const [pagination, setPagination] = useState([]);

    useEffect(()=>{
        setPagination(Array.from({ length: Math.round(articles.length / itemsPegPage) }));
    }, [articles.length, itemsPegPage])

    return (
        <>
            {articles.length ? articles.slice(page * itemsPegPage - itemsPegPage, page * itemsPegPage).map((article, i) => {
                return (
                    <article className="post excerpt" key={article.id}>
                        <a href={'/article/' + article.attributes.slug} title={article.attributes.title} rel="nofollow" id="featured-thumbnail">
                            <div className="featured-thumbnail">
                                <img width="220" height="162" src={article.attributes.banner.data.attributes.url}
                                    className="attachment-featured size-featured wp-post-image" id="article-image" alt="" title="" />
                            </div>
                            <div className="featured-cat">{article.attributes.category.data.attributes.name}</div>
                        </a>
                        <header>
                            <h2 className="title">
                                <Link to={"/article/" + article.attributes.slug} title={article.attributes.title} rel="bookmark">{article.attributes.title}
                                </Link>
                            </h2>
                            <div className="post-info"><span className="thetime">{article.attributes.date.split('T').join(' ').split('.')[0]}</span></div>
                        </header>

                        <div className="post-content image-caption-format-1">
                            {article.attributes.description} </div>
                        <span className="readMore">
                            <Link to={"/article/" + article.attributes.slug} title={article.attributes.title} rel="nofollow">Read More</Link>
                        </span>
                    </article>
                )
            }) : <div>Постов нет</div>}

            <nav className="navigation posts-navigation" role="navigation">
                <nav className="navigation pagination" role="navigation">
                    <h2 className="screen-reader-text">Навигация по записям</h2>
                    <div className="nav-links">
                        {/* <span className="page-numbers current">1</span>
                                        <a className="page-numbers" href="#">2</a>
                                        <a className="next page-numbers" href="#">Older</a> */}
                        {pagination.length > 1 ? pagination.map((_, i) => {
                            return (
                                <button className="page-numbers" key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
                            )
                        }) : <span></span>}

                    </div>
                </nav>
            </nav>



        </>
    );
}

export default LatestArticles;