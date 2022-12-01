import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Kargo from '../../components/Kargo/Kargo';
import productdata from '../../json/data.json'
import './ProductDetail.css'


function ProductDetail() {
    let { name } = useParams("");
    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        setDetailData(productdata.filter(item => item.name === `${name}`))
    }, [name])

    console.log(detailData)
    return (
        <>
            <div className='detailpage'>
                <div className='leftPage'>
                    {detailData.map((item, index) => {
                        return (
                            <img src={item.img} alt={item.name} key={index} />
                        )
                    })}
                </div>
                <div className='rightPage'>
                    {detailData.map((item, index) => {
                        return (
                            <div key={index} className={'rightdesc'}>
                                <h1 className='righttitle'>{item.name}</h1>
                                <p>{item.desc}</p>
                                <div className='priceButton'>
                                    <h1>{`${item.price} ₺`}</h1>
                                    <button onClick={() => { alert('tıkladnı') }}>SEPETE EKLE</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Kargo />
        </>)
}

export default ProductDetail