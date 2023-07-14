import './assets/css/style.css'
import Header from './component/Header';
import ContentSection from './component/ContentSection';
import Footer from './component/Footer';
function App() {

  return (
    <>
      <div id="container">
          <Header text="Header"/>
          <div className='mainContent'>
            <ContentSection myContentText="I am Content"/>
          </div>
          <Footer footerText="Footer Section" qoute="Quote: 'The only way to do great work is to love what you do.' - Steve Jobs"/>
      </div>
    </>
  )
}

export default App
