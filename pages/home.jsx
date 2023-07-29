import Navbar from '../components/navbar';
import styles from '../styles/homepage.module.css'


export default function Homepage() {

    
    return(
    <div className={styles.body}>
        <Navbar></Navbar>
        <h1>First Post </h1>
    </div>
     );   
     
}


// import React from 'react';
// import { UserProvider } from './api/node_modules/@auth0/nextjs-auth0/client';

// export default function App({ Component, pageProps }) {
//   return (
//     <UserProvider>
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }



// import React from 'react';
// import { useUser } from './api/node_modules/@auth0/nextjs-auth0/client';

// export default function Profile() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   return (
//       user && (
//           <div>
//             <img src={user.picture} alt={user.name} />
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//           </div>
//       )
//   );
// }



