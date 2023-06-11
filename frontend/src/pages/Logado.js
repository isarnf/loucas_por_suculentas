import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Styles.css';


function Home() {
	return (
		<>
			<Header/>
			<div>
				<h1>Você já está logado!</h1>
			</div>
			<Footer/>
		</>
    
	);
}

export default Home;