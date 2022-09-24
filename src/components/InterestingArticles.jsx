import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ArticlesContext } from '../context/ArticlesContext';
import { shuffle } from '../utils';

function Sidebar({ categoryPage }) {
    const { articles } = useContext(ArticlesContext);
    return (
        <aside className={categoryPage ? "sidebar c-4-12 fix-aside" : "sidebar c-4-12"}>
            <div id="sidebars" className="sidebar">
                <div className="sidebar_list">
                    <aside id="recent-posts-3" className="widget widget_recent_entries">
                        <h3 className="widget-title">INTERESTING</h3>
                        { articles.length ?
                            <ul>
                                {shuffle(articles).slice(0, 5).map(article => {
                                    return (
                                        <li key={article.id}>
                                            <Link to={"/article/" + article.attributes.slug}>{article.attributes.title.toUpperCase()}</Link>
                                        </li>
                                    )
                                })}
                            </ul> : <div>Постов нет</div>
                        }
                    </aside>
                </div>
            </div>

        </aside>
    );
}

export default Sidebar;