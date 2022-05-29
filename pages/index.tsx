import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../modules/login/screens'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default Home
