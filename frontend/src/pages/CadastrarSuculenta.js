import "../style/Styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CadastrarSuculenta() {
	return (
		<>
            <Header/>
			<div className="cadastrarSuculenta">
				<form>
                <div class="form-outline mb-4 mt-5 ">
                    <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                    <br/><br/>
                    <label className="form-label" for="">Imagem</label>
                </div>
                <div class="form-outline mb-4 mt-5">
                    <input type="text" id="" className="form-control" />
                    <label className="form-label" for="">Nome popular</label>
                </div>
				<div class="form-outline mb-4 mt-5">
                    <input type="text" id="" className="form-control" />
                    <label className="form-label" for="">Nome científico</label>
                </div>
				<div class="form-outline mb-4 mt-5">
                    <input type="text" id="" className="form-control" />
                    <label className="form-label" for="">Data aquisição</label>
                </div>
				<div class="form-outline mb-4 mt-5">
                    <input type="text" id="" className="form-control" />
                    <label className="form-label" for="">Cor</label>
                </div>
				<div class="form-outline mb-4 mt-5">
                    <input type="text" id="" className="form-control" />
                    <label className="form-label" for="">Descrição</label>
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