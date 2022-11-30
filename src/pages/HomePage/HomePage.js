import React, { useEffect, useState } from 'react'
import './HomePage.css'
import productdata from '../../json/data.json'
import Section from '../../components/Section/Section';
import Kargo from '../../components/Kargo/Kargo';

function HomePage() {
  const [erkek, setErkek] = useState([])
  const [bayan, setBayan] = useState([])
  const [elektonik, setElektronik] = useState([])
  const [ev, setEv] = useState([])

  useEffect(() => {
    setErkek(productdata.filter(item => item.category === "Erkekgiyim&Aksesuar"))
    setBayan(productdata.filter(item => item.category === "Kadıngiyim&Aksesuar"))
    setElektronik(productdata.filter(item => item.category === "Televizyon&Ses"))
    setEv(productdata.filter(item => item.category === "EvAletleri"))
  }, [])

  return (
    <>
      <main>
        <section className='title'>
          <p style={{ backgroundColor: "#EE9EB9" }}>Bayanlara özel ...</p>
          <div className='sectionCard'>
            <Section productcatagory={bayan} />
          </div>
        </section>
        <section className='title'>
          <p >Erkeklere özel ...</p>
          <div className='sectionCard'>
            <Section productcatagory={erkek} />
          </div>
        </section>
        <section className='title'>
          <p style={{ backgroundColor: "#B9B2B4" }}>Elektronik ...</p>
          <div className='sectionCard'>
            <Section productcatagory={elektonik} />
          </div>
        </section>
        <section className='title'>
          <p style={{ backgroundColor: "#A1688B" }}>Eviniz için ...</p>
          <div className='sectionCard'>
            <Section productcatagory={ev} />
          </div>
        </section>
      </main>
      <Kargo />
    </>

  )
}

export default HomePage