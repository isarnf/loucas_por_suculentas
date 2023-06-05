import "../style/Styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


function DetalharSuculenta() {
	return (
		<>
            <Header/>
			<div className="infoSuculenta">
			<p>Nome popular: </p>
			<p>Nome científico: </p>
			<p>Data aquisição: </p>
			<p>Cor: </p>
			<p>Descrição: </p>
			</div>
            <Footer/>
		</>
    
	);
}

export default DetalharSuculenta;