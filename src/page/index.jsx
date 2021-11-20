import React from "react"
import "./index.css"

export const CheckBoxIMG = () => {
  function handleClick(e) {
    console.log("Handle click")
    e = e || window.event
    e = e.target || e.srcElement
    console.log(e)
    console.log(e.parentNode.parentNode)
    console.log(e.parentNode.parentNode.children[0])

    const checkboxParent = e.parentNode
    const firstChild = checkboxParent.parentNode.children[0]

    if (firstChild.className === "img-checkbox-overlay") {
      firstChild.className = "img-checkbox-overlay-active"
      checkboxParent.className += " img-checkbox-active"
    } else {
      firstChild.className = "img-checkbox-overlay"
      checkboxParent.className = "img-checkbox-details"
    }
  }

  return (
    <div>
      <div className='img-checkbox'>
        <div className='img-checkbox-overlay'></div>
        <img
          className='img-checkbox-image'
          src='https://www.hdwallpaper.nu/wp-content/uploads/2015/02/Funny-Cat-Hidden.jpg'
          alt='1'
        />
        <div className='img-checkbox-details'>
          <input
            type='checkbox'
            className='img-checkbox-cb'
            name='img_checkbox'
            onClick={handleClick}
          />
        </div>
      </div>

      <div className='img-checkbox'>
        <div className='img-checkbox-overlay'></div>
        <img
          className='img-checkbox-image'
          src='https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg'
          alt='1'
        />
        <div className='img-checkbox-details'>
          <input
            type='checkbox'
            className='img-checkbox-cb'
            name='img_checkbox'
            onClick={handleClick}
          />
        </div>
      </div>

      <div className='img-checkbox'>
        <div className='img-checkbox-overlay'></div>
        <img
          className='img-checkbox-image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/1200px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg'
          alt='1'
        />
        <div className='img-checkbox-details'>
          <input
            type='checkbox'
            className='img-checkbox-cb'
            name='img_checkbox'
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
