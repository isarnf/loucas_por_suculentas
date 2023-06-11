import succulent from '../images/succulent5.png';
import succulentLogo from '../images/suculentaLogo.png';

import { getToken, setToken } from '../hook/useToken';
import { destruirToken } from '../api/SuculentaApi';

export default function Header(){
	const token = getToken();
	
	const handleClickColecao = () => {

		if(token != null)
			window.location.assign('/colecao');
		else
			window.location.assign('/login');
	};

	const handleClickLogin = () => {

		if(token != null)
			window.location.assign('/logado');
		else
			window.location.assign('/login');
	};

	const handleClickLogout = () => {

		if(token != null)
			setToken(destruirToken());
		window.location.assign('/login');
	};


	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<div className="container">
							<a className="navbar-brand" href="/">
								<img src={succulent} alt="" width="55" height="70"/>
							</a>
							<a className="navbar-brand" href="/">
								<img src={succulentLogo} alt="" width="230" height="60"/>
							</a>
						</div>
		
						<div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link " aria-current="page" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" aria-current="page" onClick={handleClickColecao} href="/colecao">Coleção</a>
								</li>
								{
									(!token) ? 
										<li className="nav-item">
											<a className="nav-link" onClick={handleClickLogin} href="/login">Login</a>
										</li> :
										<></>
								}
								
								{
									(token) ? 
										<li className="nav-item">
											<a className="nav-link" onClick={handleClickLogout} >Logout</a>
										</li> :
										<></>
								}
								
							</ul>
						</div>
						
					</div>
				</nav>
			</header>
		</>
	);
}