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
    setErkek(productdata.filter(item => item.category === "erkekgiyim&aksesuar"))
    setBayan(productdata.filter(item => item.category === "kadingiyim&aksesuar"))
    setElektronik(productdata.filter(item => item.category === "televizyon&ses"))
    setEv(productdata.filter(item => item.category === "evaletleri"))
  }, [])

  return (
    <>
      <main>
        <section className='title'>
          <p style={{ backgroundColor: "#EE9EB9" }}>Bayanlara özel ...</p>
          <div className='Card'>
            <Section productcatagory={bayan} />
          </div>
        </section>
        <section className='title'>
          <p >Erkeklere özel ...</p>
          <div className='Card'>
            <Section productcatagory={erkek} />
          </div>
        </section>
        <section className='title'>
          <p style={{ backgroundColor: "#B9B2B4" }}>Elektronik ...</p>
          <div className='Card'>
            <Section productcatagory={elektonik} />
          </div>
        </section>
        <section className='title'>
          <p style={{ backgroundColor: "#A1688B" }}>Eviniz için ...</p>
          <div className='Card'>
            <Section productcatagory={ev} />
          </div>
        </section>
      </main>
      <Kargo />
    </>

  )
}

export default HomePage