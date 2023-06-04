import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Styles.css";

function Colecao() {
	return (
		<>
			<Header/>
			
			<div className="colecao">
			<h1 className="text-center pt-4">Coleção</h1>
			<div className="tabela">
				<div className="horizontal-group">
				<form className="form-search">
					<input type="hidden" name="column" value="name" />
					<input name="value" type="text" placeholder="Pesquisar suculenta" className="form-control pesquisa"/>
					<button className="btn ms-2 me-2"><i className="fa-solid fa-magnifying-glass"></i></button>
				</form>
				<button className="btn me-2 btn-estilizado"><a  href="/colecao">Mostrar todas</a></button>
				</div>
				<table class="table table-hover">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Nome popular</th>
					<th scope="col">Nome científico</th>
					<th scope="col">Maiores informações</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row">1</th>
					<td></td>
					<td></td>
					<td>
						<button className="btn">
							<a href="/" >
								{/* <i className="fa-regular fa-circle-info"></i> */}
								Detalhar
							</a>
						</button>
					</td>
					</tr>
					<tr>
					<th scope="row">2</th>
					<td></td>
					<td></td>
					<td>
						<button className="btn">
							<a href="/" >
								{/* <i className="fa-regular fa-circle-info"></i> */}
								Detalhar
							</a>
						</button>
					</td>
					</tr>
					<tr>
					<th scope="row">3</th>
					<td></td>
					<td></td>
					<td>
						<button className="btn">
							<a href="/" >
								{/* <i className="fa-regular fa-circle-info"></i> */}
								Detalhar
							</a>
						</button>
					</td>
					</tr>
				</tbody>
				</table>
				</div>

			
			</div>
			<Footer/>
		</>
    
	);
}

export default Colecao;