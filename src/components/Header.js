import React from 'react'

const Header = () => {
  return (
    <header>
      <span className='logo'>
      WIX
      </span>
      <div className='container'>
      <div className='i-con'>
      <i class="fa-solid fa-desktop"></i>
       <span className='dash'></span> 
       <i class="fa-solid fa-mobile-screen"></i>
      </div>
      <p>Click edit and create your own amazing website</p>
      <button>Bu Siteyi Düzenle</button>
      </div>
    </header>
  )
}

export default Header