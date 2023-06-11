import '../style/Styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deleteSuculenta, findOneSuculenta } from '../api/SuculentaApi.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'moment' from moment;


function DetalharSuculenta() {
	const {id} = useParams();

	
	const [suculenta, setSuculenta] = useState([]);


	const loadingData = async () => {
		findOneSuculenta(setSuculenta, id);
		console.log(suculenta.values);
		// setSuculenta(values => ({
		// 	...values, ['data_aquisicao']:values.data_aquisicao.slice(0,9)
		// }));
		
		setSuculenta(values => ({
			...values, ['data_aquisicao']:moment.utc(values.data_aquisicao).format('MM/DD/YYYY')
		}));
		
	};

	useEffect(() => {
		loadingData();
	}, []);

	const handleUpdate = () => {
		window.location.assign(`/colecao/editar/${id}`);
	};

	const handleDelete = () => {
		deleteSuculenta(id);
		window.location.assign('/colecao');
	};
	
	return (
		<>
			<Header/>
			<div className="d-flex">
				<div className="infoSuculenta0 text-center">
					<p><b>Suculenta</b></p>
					<p><b># {suculenta.id}</b></p>
				</div>
			
				<div className="infoSuculenta">
					<>
						<p><b>Nome popular:</b> {suculenta.nome_popular}</p>
						<p><b>Nome científico:</b> {suculenta.nome_cientifico}</p>
						<p><b>Data aquisição:</b> {suculenta.data_aquisicao}</p>
						<p><b>Cor:</b> {suculenta.cor}</p>
						<button className="btn me-2 btn-estilizado" onClick={handleUpdate}>Editar</button>
						<button className="btn me-2 btn-estilizado" onClick={handleDelete}>Excluir</button>
					</>

				</div>
			</div>
			<Footer/>
		</>
    
	);
}

export default DetalharSuculenta;