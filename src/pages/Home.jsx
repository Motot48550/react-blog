import { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestArticles from '../components/LatestArticles';
import MainArticles from '../components/MainArticles';
import Sidebar from '../components/InterestingArticles';
import { ArticlesContext } from '../context/ArticlesContext'

function Home() {
    const [page, setPage] = useState(1);
    const [itemsPegPage] = useState(process.env.REACT_APP_ITEMS_PER_PAGE);
    const { articles } = useContext(ArticlesContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [page])

    return (
        <div id="blog" className="home blog">

            <div className="main-container">

                <Header />

                <MainArticles articles={articles} />

                <div id="page" className="home-page">
                    <div className="content">
                        <div className="article">

                            <h3 className="frontTitle">
                                <div className="latest">Latest</div>
                            </h3>

                            <LatestArticles articles={articles} page={page} setPage={setPage} itemsPegPage={itemsPegPage} />
                        </div>
                        <Sidebar />

                    </div>
                </div>

                <Footer />

            </div>
        </div>
    );
}

export default Home;