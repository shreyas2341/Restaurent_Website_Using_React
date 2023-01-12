import React from 'react'
import menu_data from './Menu-data'
import menu_data1 from './Menu-data1'
import Hiden_card from './Hiden_card';
import { useState } from 'react';

export default function Menu() {
  const [hidcard, setSlider] = useState();
  const [count, setCount] = useState(0);

  const loadSlider = () => {
    setCount(count + 1);
    console.log('count = ' + count);
    if (count % 2 == 0)
      setSlider(<Hiden_card />)
    else
      setSlider('')
  }

  return (
    <>
      <div className='menu_div'>
        <center>
          <p className='menu_head_txt'>Menu That Fits You Palatte</p>
          <img className='spoon' src="https://gericht-restaurant-phi.vercel.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg" alt="" />
          <h1 class="headtext__cormorant"> Today's Special</h1>
        </center>
        <div className='menu_list'>

          <div className='menu_list_side'>
            <center>
              <h1 className='text-white font-weight-light'><i>Wine $ Beer</i></h1>
            </center>
            <br />
            <br />

            {

              menu_data.map((val) => {
                return (
                  <div className='ml_obj' style={{ display: 'flex' }}>
                    <div className='menu_list_item_div'>
                      <p class="menu_list_item">{val.item_name}</p>
                      <p class="menu_list_desc"> {val.item_desc} </p>
                    </div>
                    <div className='menu_hr_line'>
                      <h1 style={{ color: 'rgb(220, 202, 135)' }}>____</h1>
                    </div>
                    <div>
                      <h3 style={{ paddingTop: '25px', marginLeft: '20px', color: 'white' }}>{val.item_price}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>


          <div className='menu_list_mid'><img className='menu_mid_img' src="https://gericht-restaurant-phi.vercel.app/static/media/menu.a8287c67809afebcc280.png" alt="" /></div>

          <div className='menu_list_side'>
            <center>
              <h1 className='text-white font-weight-light'><i>Cocktails</i></h1>
            </center>
            <br />
            <br />

            {

              menu_data1.map((val) => {
                return (
                  <div className='ml_obj' style={{ display: 'flex' }}>
                    <div className='menu_list_item_div' style={{ paddingLeft: '20px' }}>
                      <p class="menu_list_item">{val.item_name}</p>
                      <p class="menu_list_desc"> {val.item_desc} </p>
                    </div>
                    <div className='menu_hr_line'>
                      <h1 style={{ color: 'rgb(220, 202, 135)' }}>____</h1>
                    </div>
                    <div>
                      <h3 style={{ paddingTop: '25px', marginLeft: '20px', color: 'white' }}>{val.item_price}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <br />
        <center><button style={{ marginTop: '20px', backgroundColor:'#f5efdb',color:'black'}} className="btn btn-warning"
          onClick={() => loadSlider()} ><b>View More</b></button></center>
        <br />
        <br />
        <br />
      </div>

      {hidcard}

      <div className='menu_part2'>

        <div className='menu_part2_left'>
          <img src="https://gericht-restaurant-phi.vercel.app/static/media/chef.02d6c5b61bfdc70303b4.png" alt="" style={{ height: '630px', width: '510px' }} />
        </div>

        <div className='menu_part2_right'>
          <p className='menu_head_txt'>Chef's World</p>
          <img className='spoon' src="https://gericht-restaurant-phi.vercel.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg" alt="" />
          <br />
          <h1 class="headtext__cormorant"> What We Believe In</h1>
          <img src="" alt="" />
          <h1 style={{ color: 'white', fontSize: '55px', paddingTop: '45px' }}>“</h1>
          <p style={{ fontSize: '19px', color: 'white' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit    Auctor Sit . <br />
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla <br /> Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. <br /> Congue Iaculis Integer Curabitur Semper Sit Nunc.
          </p>
          <br />
          <p style={{ fontSize: '29px', color: 'rgb(220, 202, 135)' }}>Kevin Luo</p>
          <br />
          <img src="https://gericht-restaurant-phi.vercel.app/static/media/sign.9bf0bd90ad4caa17991f.png" alt="" height={'130px'} />

        </div>
      </div>

    </>
  )
}
