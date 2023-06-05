import { useParams } from 'react-router-dom';

function Product() {
    const parameters = useParams();

    console.log(parameters);

    return (
        <div>
            <h1>Product</h1>
            <h2>{parameters.id}</h2>
        </div>
    );
}

export default Product;