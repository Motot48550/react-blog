import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArticlesContext } from '../context/ArticlesContext';
import { shuffle } from '../utils';

function RelatedArticles() {
    const { articles, currentCategory } = useContext(ArticlesContext);
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const filteredArticles = shuffle(articles).filter(article => article.attributes.slug !== slug && article.attributes.category.data.attributes.name === currentCategory).slice(0, 2);
        setPosts(filteredArticles)
    }, [articles, slug, currentCategory])

    if (posts.length) {
        return (
            <div className="related-posts">
                <h3>Related Posts</h3>
                <div className="postauthor-top">
                    <ul className="related-articles">
                        {posts.map((article, id) => {
                            return (
                                <li className={id !== 0 && id % 2 !== 0 ? 'last' : ''} key={article.id}>
                                    <Link rel="nofollow" className="relatedthumb related-article" to={'/article/' + article.attributes.slug}
                                        title={article.attributes.title}>
                                        <span className="rthumb">
                                            <img width="60" height="57" src={article.attributes.banner.data.attributes.url} alt=""
                                                className="attachment-widgetthumb size-widgetthumb wp-post-image" />
                                        </span>
                                        <div>
                                            <span>{article.attributes.title}</span>

                                            <div className="meta">
                                                <div rel="nofollow">Комментариев нет</div> |
                                                <span className="thetime">
                                                    {new Date("2022-09-23T09:23:00.000Z").toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                </span>
                                            </div>
                                        </div>

                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    return (
        <span></span>
    )
}

export default RelatedArticles;