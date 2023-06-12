import '../style/Styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { createSuculenta, findOneSuculenta, updateSuculenta } from '../api/SuculentaApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {getToken} from '../hook/useToken';



function CadastrarSuculenta() {
	const token = getToken();
	const {id} = useParams();
	const [formulario, setFormulario] = useState({
		nome_popular: '',
		nome_cientifico: '',
		data_aquisicao: '',
		cor: '',
	});

	useEffect(() => {
		if (id != null){
			findOneSuculenta(setFormulario, id, token);

		}
	},[id]);

	const handleChange = (e) => { setFormulario(values => (
		{ ...values, 
			[e.target.name]: e.target.value }
	));};

	const handleChangeDate = (e) => {
		if(Date.parse(e.target.value) < Date.now()){
			setFormulario(values => ({...values, ['data_aquisicao']:e.target.value}));
		}
		

	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formulario);
		if (id != null)
			updateSuculenta(id, formulario, token);
		else
			createSuculenta(formulario, token);
		window.location.assign('/colecao');
	};



	return (
		<>
			<Header/>
			<div className="cadastrarSuculenta">
				<form>
					<div className="form-outline mb-4 mt-5">
						<input type="text" value={formulario.nome_popular} name="nome_popular" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Nome popular</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" value={formulario.nome_cientifico} name="nome_cientifico" onChange={handleChange} className="form-control" />
						<label className="form-label" htmlFor="">Nome científico</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="date" value={formulario.data_aquisicao} name="data_aquisicao" onChange={handleChangeDate} className="form-control" />
						<label className="form-label" htmlFor="">Data aquisição</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" value={formulario.cor} name="cor" onChange={handleChange} className="form-control" />
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