import succulent from '../images/succulent5.png';
import succulentLogo from '../images/suculentaLogo.png';

export default function Header(){
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
									<a className="nav-link active" aria-current="page" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="/colecao">Coleção</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/login">Login</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}