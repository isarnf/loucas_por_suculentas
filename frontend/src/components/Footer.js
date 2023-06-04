import succulent from "../images/succulent5.png";
import succulentLogo from "../images/suculentaLogo.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

export default function Footer(){
	return (
		<>
			<footer>
				<div className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap">
					<div className="logo">
						<a href="/#" className="d-flex align-items-center p-0 text-dark">
							<img src={succulent} alt="" width="55" height="70"/>
						</a>
						<a href="/#" className="d-flex align-items-center p-0 text-dark">
							<img src={succulentLogo} alt="" width="230" height="60"/>
						</a>
						<button className="btn btn-flat p-2">
							<img src={instagram} alt="" width="20" height="20"/>
						</button>
						<button className="btn btn-flat p-2">
							<img src={facebook} alt="" width="20" height="20"/>
						</button>
					</div>
				</div>
				<div className="textoFooter">
					<small><p >Desenvolvido por: Isabela Forti</p></small>
				</div>
				<br/>
			</footer>
		</>
	);
}