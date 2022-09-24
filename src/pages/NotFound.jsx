import Header from "../components/Header";
import InterestingArticles from "../components/InterestingArticles";
import Footer from "../components/Footer";
import NotFoundImage from "../components/NotFound";

function NotFound() {
    return (
        <div id="blog" className="post-template-default single single-post postid-211 single-format-standard">
            <div className="main-container">

                <Header />

                <div id="page" className="home-page">
                    <div className="content">
                        <div className="article">
                            <NotFoundImage />
                        </div>
                        <InterestingArticles categoryPage/>

                    </div>
                </div>

                <Footer />

            </div>
        </div>        
    );
}

export default NotFound;