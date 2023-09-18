import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image'

// COMPONENTS IMPORTS
import Navbar from '../components/navbar'
import Board from '../components/shopboard'


// IMAGES IMPORTS
import Model from '../assets/images/model.png'
import styles from '../styles/homepage.module.css'
import hmLogo from '../assets/images/hmLogo.png'
import obeyLogo from '../assets/images/obeyLogo.png'
import shopifyLogo from '../assets/images/shopifyLogo.png'
import lacosteLogo from '../assets/images/lacosteLogo.png'
import leviLogo from '../assets/images/leviLogo.png'
import amazonLogo from '../assets/images/amazonLogo.png'
import teesModel from '../assets/images/teesModel.png'
import coatsModel from '../assets/images/coatsModel.png'
import hoodieModel from '../assets/images/hoodieModel.png'
import Link from 'next/link';


function index() {

  const { user, error, isLoading } = useUser();


  




  return (
    <>
      
      <Navbar></Navbar>
      <Board modelLogo={Model}></Board>
      <div className={styles.logoBanners}>
          <Image src={hmLogo} height={65}></Image>
          <Image src={obeyLogo}  height={50}></Image>
          <Image src={shopifyLogo} height={65}></Image>
          <Image src={lacosteLogo} height={65}></Image>
          <Image src={leviLogo} height={65}></Image>
          <Image src={amazonLogo} height={50}></Image>
      </div>

      <div className={styles.arrivalsContainer}>
        <div>
          <h1>NEW ARRIVALS</h1>
        </div>

        <div className={styles.arrivalsboxesContainer}>
          <div >
              <Image src={hoodieModel}></Image>
              <div className={styles.arrivalslinksContainer}>
                <div>
                  <h3>Hoodies & Sweatshirt</h3>
                  <Link href='/#'>Explore Now!</Link>
                </div>
                <div>
                    <p>→</p>
                </div>
              </div>
          </div>
          <div >
              <Image src={coatsModel}></Image>
              <div className={styles.arrivalslinksContainer}>
                <div>
                  <h3>Coats & Parkas</h3>
                  <Link href='/#'>Explore Now!</Link>
                </div>
                <div>
                    <p>→</p>
                </div>
              </div>
          </div>
          <div>
              <Image src={teesModel}></Image>
              <div className={styles.arrivalslinksContainer}>
                <div>
                  <h3>Tees & T-shirt</h3>
                  <Link href='/#'>Explore Now!</Link>
                </div>
                <div>
                    <p>→</p>
                </div>
              </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default index


