import "../style/Styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImage from "../images/imgLogin3.jpg";

function Login() {
	return (
		<>
            <Header/>
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right login1">
                    <div className="card-body p-5 shadow-5 text-center">
                        <h2 className="fw-bold mb-5">Login</h2>
                        <form>
                    
                        <div class="form-outline mb-4">
                            <input type="email" id="" className="form-control" />
                            <label className="form-label" for="">E-mail</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="" className="form-control" />
                            <label className="form-label" for="">Senha</label>
                        </div>

                        
                        <button type="submit" className="btn btn-estilizado btn-block mb-4 me-3">
                            Entrar
                        </button>
                        <button type="submit" className="btn btn-estilizado btn-block mb-4">
                            Registrar
                        </button>
                        </form>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src={loginImage} className="w-100 rounded-4 shadow-4 loginImg" alt=""/>
                </div>
                </div>
            </div>

            <Footer/>
		</>
    
	);
}

export default Login;