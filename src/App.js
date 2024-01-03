
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';

function App() {
  return (
    <div >

      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      
     <Row isPoster= {true}  title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>  

     <Row title="Trending Movie" fetchUrl={requests.fetchTrending}/>  

     <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>  

     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>  

     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>  

     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>  

     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>  

     <Row title="Documenataries" fetchUrl={requests.fetchDocumentaries}/>  

     
    </div>
  );
}

export default App;                                                                                                  
