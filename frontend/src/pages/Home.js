import TextoHome from '../components/TextoHome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Styles.css';


function Home() {
	return (
		<>
			<Header/>
			<div className="bgHome">
				<TextoHome/>
			</div>
			<Footer/>
		</>
    
	);
}

export default Home;