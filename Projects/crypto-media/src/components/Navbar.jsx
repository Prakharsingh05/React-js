import React from 'react'
import {Button , Menu , Typography , Avatar } from 'antd';
import{Link} from 'react-router-dom';
import { HomeOutlined , MoneyCollectOutlined , BulbOutlined, MenuOutlined, FundOutlined} from '@ant-design/icons';
import icon from "../images/cryptocurrency.png"

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size ="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Crypto Media</Link>
   
            </Typography.Title>
            
        </div>
        <menu theme="dark">
          <Menu.Item icon={<HomeOutLined/>}>
            <link to ="/">Home</link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <link to ="/">Home</link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <link to ="/">Home</link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutLined/>}>
            <link to ="/">Home</link>
          </Menu.Item>
          
        </menu>
      
    </div>
  )
}

export default Navbar
