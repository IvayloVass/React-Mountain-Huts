import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Article from './components/Article'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import * as hutsService from './services/hutsService';
import './assets/css/screen.css'


function App() {

  const [hutsList, setHutsList] = useState([]);

  useEffect(() => {
    hutsService.getHuts()
      .then(result => setHutsList(result));
  }, [])

  return (
    <>
      <Navigation />
      <Header />
      <main id="content" className="content" role="main">
        <div className="wraps">
          <div className="grid">
            {hutsList.map((hut) => {
              return <Article
                key={hut._id}
                id={hut._id}
                picture={hut.picture}
                title={hut.title}
                description={hut.description}
                content={hut.content}
                author={hut.author}
                createdOn={hut.createdOn}
                Article />
            })}
          </div>
          <Pagination />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default App
