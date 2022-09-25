import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MainArticles({ articles }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const filteredArticles = articles.filter((article) => !!article.attributes.top_banner.data)
            .sort((article1, article2) => article1.attributes.top_banner.data.attributes.position.slice(-1) - article2.attributes.top_banner.data.attributes.position.slice(-1));
        setPosts(filteredArticles);
    }, [articles, posts.length])

    return (
        <>
            {posts.length ?
                <div className="featuredBox grid-box">
                    {posts.map((article, i) => {
                        return (
                            <div className={"front-post excerpt-" + i} key={article.id}>
                                <Link to={'/article/' + article.attributes.slug} title={articles[0].attributes.title} rel="nofollow" id="second-thumbnail">

                                    <img src={article.attributes.banner.data.attributes.url}
                                        className="attachment-mediumthumb size-mediumthumb wp-post-image" alt="" title="" />
                                    <p className="featured-excerpt">
                                        <span className="featured-title">{article.attributes.title}</span>
                                        {i === 0 ? <span className="f-excerpt">{article.attributes.description}</span> : null}
                                    </p>
                                </Link>
                            </div>
                        )
                    })}
                </div> : <span></span>
            }
        </>
    )
}

export default MainArticles;