import "../style/Styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImage from "../images/imgLogin3.jpg";

function Login() {
	return (
		<>
            <Header/>
            <div class="container py-4">
                <div class="row g-0 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card cascading-right login1">
                    <div class="card-body p-5 shadow-5 text-center">
                        <h2 class="fw-bold mb-5">Login</h2>
                        <form>
                    
                        <div class="form-outline mb-4">
                            <input type="email" id="" class="form-control" />
                            <label class="form-label" for="">E-mail</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="" class="form-control" />
                            <label class="form-label" for="">Senha</label>
                        </div>

                        
                        <button type="submit" class="btn btn-estilizado btn-block mb-4 me-3">
                            Entrar
                        </button>
                        <button type="submit" class="btn btn-estilizado btn-block mb-4">
                            Registrar
                        </button>
                        </form>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                    <img src={loginImage} class="w-100 rounded-4 shadow-4 loginImg" alt=""/>
                </div>
                </div>
            </div>

            <Footer/>
		</>
    
	);
}

export default Login;