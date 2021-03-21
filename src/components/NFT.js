
import './NFT.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Button} from 'antd';
import styled from  'styled-components';
import { DownOutlined } from '@ant-design/icons';
import './Button.css';
import { ButtonDropDown } from './ButtonDropDown';

export const MenuDDWrapper = styled(Menu)`
padding-left: 0;
li {
  list-style-type : none;
}
  &.ant-menu-vertical {
    border-right: none;
    underline: none;
  }
  &.ant-menu {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding-left: 0rem;
  }
  li.ant-menu-item {
    padding-bottom: 0rem;
    text-align: left;
    color: darkerGray;
    font-size: 16px;
    list-style-type: none;
    &:hover {
      color: darkerGray;
    }
  }

  &.ant-menu .ant-menu-item-selected {
    background-color: transparent;
    font-weight: bold;
    border-left: 0.34rem solid #435EE9;
  }
`;

const menu = (
  <MenuDDWrapper onClick={(e) => e.stopPropagation()}>
    <Menu.Item key="0">
      <Link href="">1st menu item</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="">2nd menu item</Link>
    </Menu.Item>
  </MenuDDWrapper>
);

const NFT = (props) => {
    const [button, setButton] = useState(true);

    const DropDownBtn = () => {
      return (
        <>
          {
            <Dropdown overlay={menu} trigger={['click']}>
              <Button className='btn--outline' >
                Get License <DownOutlined />
              </Button>
          </Dropdown>
          }
        </>
      );
    };

    return (
        <>
        <div className="licWrapper">
          <div className='text' style={{"margin-top": "5%"}}>
            <div>
              <div className='clsHeader'>
                <img src="./images/unnamed.jpg" alt='my'className=' creater-header-img'/>
                <h1 className='creater'> Sanchit Banati </h1>
              </div>
              </div>
              <div style={{"width": "70%", height:"70%"}}>
                <h2 className='Name'> Banati Bombers </h2>
                <p className='text2'>Let's talk about Money, Finance, Stock Markets, Savings, Business and Most Importantly Life of STudent <br></br>
                  who is motivated to save money and live like a cheap star in his 20's to transform his life and live his <br></br>
                  dream of becoming a personal finance enthusiast. </p>
                
                {/* <Button buttonStyle='btn--outline' className='dropdown'>Get License </Button> */}
                {/* <Dropdown overlay={menu} trigger={['click']}>
                  <Button className='btn--outline' onClick={(e) => e.stopPropagation()}>
                    Get License <DownOutlined />
                  </Button>
                </Dropdown> */}
                {/* <ButtonDropDown/> */}
                {<DropDownBtn></DropDownBtn>}
              </div>
          </div>
          <div className='nft'>
              <img src="./images/download.jpeg" alt='cryptokitty' />
          </div>
        </div>
        </>
    );
};

export default NFT;
