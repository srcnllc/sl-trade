import React from 'react'
import { Link } from 'react-router-dom'


export const List = [
    {
      name: "Moda",
      url: "https://s4.gifyu.com/images/moda.webp",
      test: [
        { name: "Ayakkabı & Çanta", image: "/category/shoes.png" },
        { name: "Kadın Giyim & Aksesuar", image: "/category/hat.png" },
        { name: "Erkek Giyim & Aksesuar", image: "/category/man.png" },
      ],
    },
    {
        name: "Teknoloji",
        url: "https://s4.gifyu.com/images/teknoloji.webp",
        test: [
          { name: "Telefon & Aksesuar", image: "/category/airpods.png" },
          { name: "Televizyon & Ses", image: "/category/sound.png" },
          { name: "Ev Aletleri", image: "/category/householdappliances.png" },
        ],
      },
      {
        name: "Yaşam",
        url: "https://s1.gifyu.com/images/yasam.webp",
        test: [
          { name: "Mobilya", image: "/category/wardrobe.png" },
          { name: "Dekorasyon & Aydınlatma", image: "/category/lamb.png" },
          { name: "Ev Aletleri", image: "/category/householdappliances.png" },
        ],
      },
      {
        name: "Bebek",
        url: "https://s4.gifyu.com/images/annebebek.webp",
        test: [
          { name: "Islak Mendil", image: "/category/hand.png" },
          { name: "Bebek Giyim", image: "/category/childshoes.png" },
          { name: "Hamile Giyim", image: "/category/pregnant.png" },
        ],
      },
      {
        name: "Kozmetik",
        url: "https://s4.gifyu.com/images/kozmetik.webp",
        test: [
          { name: "Parfüm & Deodorant", image: "/category/parfume.png" },
          { name: "Saç Bakım", image: "/category/care.png" },
          { name: "Yüz & Vücut Bakım", image: "/category/woman.png" },
        ],
      },
      {
        name: "Altın&Saat",
        url: "https://s1.gifyu.com/images/saat.webp",
        test: [
          { name: "Altın & Gümüş", image: "/category/golden.png" },
          { name: "Saat", image: "/category/watch.png" },
          { name: "Güneş Gözlüğü", image: "/category/glass.png" },
        ],
      },
      {
        name: "Spor",
        url: "https://s4.gifyu.com/images/spor.webp",
        test: [
          { name: "Fitness", image: "/category/plates.png" },
          { name: "Spor Giyim & Ayakkabı", image: "/category/sportshoes.png" },
          { name: "Bisiklet", image: "/category/bike.png" },
        ],
      },
      {
        name: "Kültür",
        url: "https://s1.gifyu.com/images/kitap.webp",
        test: [
          { name: "Kitap", image: "/category/books.png" },
          { name: "Film", image: "/category/movie.png" },
          { name: "Müzik", image: "/category/music.png" },
        ],
      },
      {
        name: "Otomotiv",
        url: "https://s1.gifyu.com/images/lastik.webp",
        test: [
          { name: "Aksesuar", image: "/category/speed.png" },
          { name: "Yağ&Akü", image: "/category/oil.png" },
          { name: "Navigasyon", image: "/category/navigation.png" }
        ],
      },
]

function HeaderBottom() {
  return (
    <div className='headerbottom'>
        <ul className='nav'>
        {List.map((listItem,i)=>{
            return(
                <div className='navlist' key={i}>
                     <Link className='navlist' to={`/sl-trade/${listItem.name}`}>
                        <img src={listItem.url} alt={listItem.name}/>
                        <li >{listItem.name}</li>
                    </Link>
                </div>
            )
        })}
        </ul>
    </div>
  )
}

export default HeaderBottom