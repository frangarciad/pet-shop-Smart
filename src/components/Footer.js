import "./Footer.css";
import Logo from "../assets/logo.png";
import Loli from "../assets/shopLocal.jpg"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper-container">
        <div className="container">
          <div className="div__footer__container">
            <div className="div__footer__img">
                <h3>Nuestro Local</h3>
              <img src={Loli} width={270} height={210}></img>
            </div>
            <div className="div__footer__links ">
              <h3>Categorías</h3>
              <ul className="lista1">
                <li>
                  <a href="#">Hogar, Muebles y Jardín</a>
                </li>
                <li>
                  <a href="#">Animal es y Mascotas</a>
                </li>
                <li>
                  <a href="#">Industrias y Oficinas</a>
                </li>
                <li>
                  <a href="#">Herramientas</a>
                </li>
              </ul>
              <ul className="lista2">
                <li>
                  <a href="#">Agro</a>
                </li>
                <li>
                  <a href="#">Accesorios para Vehículos</a>
                </li>
                <li>
                  <a href="#">Construcción</a>
                </li>
                <li>
                  <a href="#">Juegos y Juguetes</a>
                </li>
              </ul>
             
            </div>

            <div className="div__footer__contacto">
              <div className="container-a">
                <p>Tel: 112030-3985</p>
                <a href="mailto:ventas.smartproductos@gmail.com">
                  ventas.smartproductos@gmail.com
                </a>
              </div>
              <div className="div__footer__mapa">
                <iframe
                  width="100%"
                  height="200"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Somellera%20515%20Adrogue+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
                </iframe>
              </div>
            </div>
          <div className="contenedor__copy">
            <p> 
             ©smartProductosPet - 2023
              </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
