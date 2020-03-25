import Header from "../components/generic/Header"
import BarraTitulo from "../components/generic/BarraTitulo"

export default () => (
    <div>
        <Header />
        <BarraTitulo />
        <h3>Pagina de calculadora</h3>
        <div className="z-depth-2 lime darken-2 white-text center-align resultados">Area de resultados</div>
        <div style={{ textAlign: "center" }}>
            <a className="waves-effect lime darken-4  btn">0</a>
            <a className="waves-effect lime darken-4  btn">1</a>
            <a className="waves-effect lime darken-4  btn">2</a>
        </div>
        <style jsx>
            {`
                .resultados{
                    width:300px;
                    margin:0 auto;
                    font-size: 32px;
                    margin-bottom:10px;
                }
            `}
        </style>
    </div>
)