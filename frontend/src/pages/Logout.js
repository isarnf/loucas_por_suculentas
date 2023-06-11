import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Styles.css';


function Logout() {


	return (
		<>
			<Header/>
			<div>
				<h1>Você está DESLOGADO!</h1>
				<p>Clique aqui para fazer login novamente</p>
				<a className="nav-link" href="/login">Login</a>
			</div>
			<Footer/>
		</>
    
	);
}

export default Logout;