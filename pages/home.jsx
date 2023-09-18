import Navbar from '../components/navbar';
import styles from '../styles/homepage.module.css'



export default function Homepage() {

    console.log(process.env.AUTH0_ISSUER_BASE_URL);
    
    return(
    <div className={styles.body}>
        <Navbar></Navbar>
        <h1>First Post </h1>
    </div>
);}




