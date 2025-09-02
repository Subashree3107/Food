import React from 'react'
import './Members.css'
import members_img from '../../assets/members.png'
const Members = () => {
  return (
    <div>
      <div className='members'>
        <div className='members-left'>
            <img src={members_img} alt=""  className='members-img'/>
        </div>
        <div className='members-right'>
            <h3>MEMBERS OF NGO</h3>
            <h2>Donate and Smile</h2>
            <p> ngo provides food to the needy
            </p>
        </div>

      </div>
    </div>
  )
}

export default Members
