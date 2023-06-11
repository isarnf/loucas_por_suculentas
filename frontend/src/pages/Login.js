import '../style/Styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loginImage from '../images/imgLogin3.jpg';
import { useState  } from 'react';
import { verificaLogin } from '../api/SuculentaApi';
import { setToken } from '../hook/useToken';


function Login() {


	const [formularioLogin, setFormularioLogin] = useState({
		email: '',
		senha: ''
	});

	const handleChange = (e) => { setFormularioLogin(values => (
		{ ...values, 
			[e.target.name]: e.target.value }
	));};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await verificaLogin(formularioLogin);
		
		setToken(res);
		window.location.assign('/colecao');
	};



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
                    
									<div className="form-outline mb-4">
										<input type="email" name="email" onChange={handleChange} className="form-control" />
										<label className="form-label" htmlFor="">E-mail</label>
									</div>

									<div className="form-outline mb-4">
										<input type="password" name="senha" onChange={handleChange} className="form-control" />
										<label className="form-label" htmlFor="">Senha</label>
									</div>

                        
									<button type="submit" onClick={handleSubmit} className="btn btn-estilizado btn-block mb-4">
                            Entrar
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