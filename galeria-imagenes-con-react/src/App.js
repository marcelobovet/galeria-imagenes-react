import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const data = [  
    {
      title: 'Chucao',
      desc: 'Su tamaño no le hace honor a su canto',
      photo: 'https://i.ytimg.com/vi/aT3sdyRZxr0/maxresdefault.jpg'
    },
    {
      title: 'Martin pescador',
      desc: 'omo su nombre lo dice, es un pescador por excelencia',
      photo: 'http://diariopuertovaras.cl/wp-content/uploads/2018/07/martin-pescador.png'
    },
    {
      title: 'golondrina',
      desc: 'Aerodinámica, delicada y grácil. Estas tres características definen perfectamente a esta especie',
      photo: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116090571/1800'
    },
  ];

  return (
    <>
      <div className="App container">
        <div>
          <Header 
            title="Galeria de imagenes con react" 
          />
        <hr></hr>
        {data.map((item) => (
          <div className="boxes">
            <div className="col-12">
              <Card 
                title={item.title} 
                desc={item.desc}
                photo={item.photo} 
              />
            </div>
          </div>
        ))}
        <hr></hr>
        </div>
      </div>
      <Footer>
        
      </Footer>
    </>
  );
};

export default App;
