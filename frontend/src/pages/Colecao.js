import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Styles.css';
import { findAllSuculentas } from '../api/SuculentaApi.js';
import { useEffect, useState } from 'react';
// import { getToken } from '../hook/useToken';


function Colecao() {
	// const token = getToken();


	const [suculentas, setSuculentas] = useState([]);
	const [search, setSearch] = useState('');
	console.log(search);

	

	const loadingData = async () => {
		// findAllSuculentas(setSuculentas, 'colecao', token);
		findAllSuculentas(setSuculentas, 'colecao');
	};

	useEffect(() => {
		// if(token != null)
		loadingData();
		// else
		// window.location.assign('/login');
	}, []);

	const handleSearch = (e) =>{
		setSearch(e.target.value);
	};

	return (
		<>
			<Header/>
			
			<div className="colecao">
				<h1 className="text-center pt-4">Coleção</h1>
				<div className="tabela">
					
					<div className="horizontal-group d-flex mb-5">
						<form className="form-search d-flex">
							<input name="value" type="text" placeholder="Pesquisar por suculenta" onChange={handleSearch} className="form-control pesquisa me-2"/>
						</form>
						<button className="btn me-2 btn-estilizado"><a  href="/colecao/cadastrar">Cadastrar nova suculenta</a></button>
					</div>
				
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nome popular</th>
								<th scope="col">Nome científico</th>
								<th scope="col">Maiores informações</th>
							</tr>
						</thead>
						<tbody>
							{suculentas.filter((suculenta) => {
								return search.toLowerCase() === '' ? suculenta : suculenta.nome_popular.toLowerCase().includes(search);
							}).map((suculenta) => {
								return (
									<tr key={suculenta.id}>
										<td scope="row">{suculenta.id}</td>
										<td>{suculenta.nome_popular}</td>
										<td>{suculenta.nome_cientifico}</td>
										<td>
											<button className="btn">
												<a href={`/colecao/${suculenta.id}`} >{/* <i className="fa-regular fa-circle-info"></i> */}Detalhar</a>
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

			
			</div>
			<Footer/>
		</>
    
	);
}

export default Colecao;