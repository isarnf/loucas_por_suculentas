import '../style/Styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { createSuculenta, findOneSuculenta, updateSuculenta } from '../api/SuculentaApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CadastrarSuculenta() {
	const {id} = useParams();
	const [formulario, setFormulario] = useState({
		nome_popular: '',
		nome_cientifico: '',
		data_aquisicao: '',
		cor: '',
	});

	useEffect(() => {
		if (id != null)
			findOneSuculenta(setFormulario, id);
	},[id]);

	const handleChange = (e) => { setFormulario(values => (
		{ ...values, 
			[e.target.name]: e.target.value }
	));};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (id != null)
			updateSuculenta(id, formulario);
		else
			createSuculenta(formulario);
		window.location.assign('/colecao');
	};



	return (
		<>
			<Header/>
			<div className="cadastrarSuculenta">
				<form>
					{/* <div className="form-outline mb-4 mt-5 ">
						<input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
						<br/><br/>
						<label className="form-label" htmlFor="">Imagem</label>
					</div> */}
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" value={formulario.nome_popular} name="nome_popular" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Nome popular</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" value={formulario.nome_cientifico} name="nome_cientifico" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Nome científico</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" value={formulario.data_aquisicao} name="data_aquisicao" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Data aquisição</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" value={formulario.cor} name="cor" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Cor</label>
					</div>

					
				
					<button type="submit" onClick={handleSubmit} className="btn btn-estilizado btn-block mb-4">Enviar</button>
	
					
					
				</form>

			</div>
			<Footer/>
		</>
    
	);
}

export default CadastrarSuculenta;