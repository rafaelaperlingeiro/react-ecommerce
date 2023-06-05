import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Card />
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;