import styles from '../styles/navbar.module.css'


export default function Navbar() {
   return( 
        <nav className={styles.container}>
             <div>
                 <span><a href='/#'>Contacts</a></span>
             </div>
             <div>
                 <span><a href='/#'>About</a></span>
                 <span><a href='/#'>Contacts</a></span>
             </div>
         </nav>
    ); 
}








