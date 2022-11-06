import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import AddArticle from "./pages/AddArticle";
import GetArticles from "./pages/GetArticles";
import ViewCategories from "./pages/ViewCategories";

const App = () => {
    return (
        <div className="App">
            <>
                <Header/>
                <main>
                    <Routes>
                        <Route path='/' element={<AddArticle/>}/>
                        <Route path='/articles' element={<GetArticles/>}/>
                        <Route path='/categories' element={<ViewCategories/>}/>
                    </Routes>
                </main>
            </>
        </div>
    );
}

export default App;
