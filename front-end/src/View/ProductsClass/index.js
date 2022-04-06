import CardDivComponet from "../../Componentes/Cards/CardDivComponet";
import Layout from "../../Componentes/layout";
import BoxClass from '../../imagens/boxClasses.png'
import './index.css'


const productsclass = [
    {
        id : 1,
        image:  '../../imagens/teste.png',
        name: 'nunca',
        description :'Material de Uso eletrico',
    },
    {
        id : 1,
        image:'front-end/src/imagens/teste.png',
        name: 'Carros',
        description :'Produtos para carro',
    },
    {
        id : 1,
        imagem:'front-end/src/imagens/teste.png',
        name: 'Gamers',
        description :'Mundo Gamer',
    },
    {
        id : 1,
        imagem:'front-end/src/imagens/teste.png',
        name: 'Limpeza',
        description :'Material de Limpeza',
    },
    {
        id : 1,
        imagem:'front-end/src/imagens/teste.png',
        name: 'Para casa',
        description :'Material de casa',
    }
]
function ProductsClass () {
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={BoxClass} alt='a'/>
            </div>
            <h1 className="text-center"> Categorias </h1>
            {productsclass.map(products => (
                <div className="ProductsCategory" key={products.id}>
                    <CardDivComponet products={products}/>
                </div>
            ))}
        </Layout>
    )
}
export default ProductsClass