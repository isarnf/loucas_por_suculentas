import '../style/Styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CadastrarSuculenta() {
	return (
		<>
			<Header/>
			<div className="cadastrarSuculenta">
				<form>
					<div className="form-outline mb-4 mt-5 ">
						<input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
						<br/><br/>
						<label className="form-label" htmlFor="">Imagem</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" className="form-control" />
						<label className="form-label" htmlFor="">Nome popular</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" className="form-control" />
						<label className="form-label" htmlFor="">Nome científico</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" className="form-control" />
						<label className="form-label" htmlFor="">Data aquisição</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" className="form-control" />
						<label className="form-label" htmlFor="">Cor</label>
					</div>
					<div className="form-outline mb-4 mt-5">
						<input type="text" id="" className="form-control" />
						<label className="form-label" htmlFor="">Descrição</label>
					</div>
					<button type="submit" className="btn btn-estilizado btn-block mb-4">
                            Cadastrar suculenta
					</button>
				</form>

			</div>
			<Footer/>
		</>
    
	);
}

export default CadastrarSuculenta;