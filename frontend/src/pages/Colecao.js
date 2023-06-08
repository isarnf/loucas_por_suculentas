import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Styles.css';
import { findAllSuculentas } from '../api/SuculentaApi.js';
import { useEffect, useState } from 'react';


function Colecao() {
	const [suculentas, setSuculentas] = useState([]);

	const loadingData = async () => {
		findAllSuculentas(setSuculentas, 'colecao');
	};

	useEffect(() => {
		loadingData();
	}, []);

	return (
		<>
			<Header/>
			
			<div className="colecao">
				<h1 className="text-center pt-4">Coleção</h1>
				<div className="tabela">
					<button className="btn me-2 btn-estilizado"><a  href="/colecao/cadastrar">Cadastrar nova suculenta</a></button>
					<br/><br/>
					<div className="horizontal-group d-flex mb-5">
						<form className="form-search d-flex">
							<input type="hidden" name="column" value="name" />
							<input name="value" type="text" placeholder="Pesquisar por suculenta" className="form-control pesquisa"/>
							<button className="btn ms-2 me-2"><i className="fa-solid fa-magnifying-glass"></i></button>
						</form>
						<button className="btn me-2 btn-estilizado"><a  href="/colecao">Mostrar todas</a></button>
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
							{suculentas.map((suculenta) => {
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