import Layout from "../../Componentes/layout";
import BoxClass from '../../imagens/boxClasses.png'
import ImagemTeste from '../../imagens/teste.png'
import './index.css'

function ProductsClass () {
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={BoxClass} alt='a'/>
            </div>
            <div className="ProductsCategory">
                <h1> Categorias </h1>
                <section className="SecCategory">
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                    <div className="DivCard">
                        <div><img src={ImagemTeste}/></div>
                        <div className="ItensConteines">
                            <h2> Nome Produto</h2>
                            <p>descrição </p>
                            <button> Ir para</button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default ProductsClass