import { useContext } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { shuffle, scrollTop } from "../utils";
import { Link } from "react-router-dom";

function Footer() {
    const { articles } = useContext(ArticlesContext)
    return (
        <footer>
            <div className="carousel">
                <h3 className="frontTitle">
                    <div className="latest"></div>
                </h3>

                {articles.length ?  shuffle(articles).slice(0, 6).map(article => {
                    return (
                        <div className="excerpt" key={article.id}>
                            <Link to={'/article/' + article.attributes.slug} title={article.attributes.title} rel="nofollow" id="footer-thumbnail">
                                <div>
                                    <div className="hover"><i className="point-icon icon-zoom-in"></i></div>

                                    <img width="140" height="130" src={process.env.REACT_APP_SERVER_URL + article.attributes.banner.data.attributes.url}
                                        className="attachment-carousel size-carousel wp-post-image" alt="" title="" />
                                    {/* <img width="140" height="130" src={process.env.REACT_APP_SERVER_URL + article.attributes.banner.data.attributes.url}
                                                className="attachment-carousel size-carousel wp-post-image" alt="" title=""
                                                srcSet="//the-best-info.xyz/wp-content/uploads/2017/03/9-3-140x130.jpg 140w, //the-best-info.xyz/wp-content/uploads/2017/03/9-3-60x57.jpg 60w"
                                                sizes="(max-width: 140px) 100vw, 140px" /> */}
                                </div>
                                <p className="footer-title">
                                    <span className="featured-title">{article.attributes.title}</span>
                                </p>
                            </Link>
                        </div>
                    )
                }) : <span></span>}
            </div>

            <div className="copyrights">
                <div className="row" id="copyright-note">
                    <div className="copyright-left-text">Copyright © 2022 <a href="#" title=""
                        rel="nofollow">Blog About</a>.</div>
                    <div className="copyright-text">
                    </div>
                    <div className="footer-navigation">
                        <ul className="menu">
                            <li className="page_item page-item-4"><a href="#">Legal
                                Notice</a></li>
                            <li className="page_item page-item-6"><a href="#">PRIVACY
                                POLICY</a></li>
                            <li className="page_item page-item-8"><a href="#">TERMS OF
                                SERVICE</a></li>
                        </ul>
                    </div>
                    <button className="top" onClick={scrollTop}><i className="point-icon icon-up-dir"></i></button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;