import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'
import { Menu } from 'antd';
import {StyledSideNav, MenuWrapper} from './StyledSideNav';
import { Link } from 'react-router-dom';
import './Remix.css';

// class SideNav extends React.Component {
//   render() {
//     return (
//       <StyledSideNav></StyledSideNav>
//     );
//   }
// }

// export default class Sidebar extends React.Component {
//   render() {
//     return (
//       <SideNav></SideNav>
//     );
//   }
// }



export default class Sidebar extends Component {
  state = { activeItem: 'home' }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <StyledSideNav>
        <img src="./images/unnamed.jpg" roundedCircle alt='my'className='creator-image'/>
        <MenuWrapper
          mode="inline" defaultSelectedKeys={['home']} 
          onClick={this.handleItemClick}>
          <Menu.Item key='home'>
            <img src="./images/home.png"  alt="home" className="images1"/>
            <Link to={"\home"}>Home</Link>
          </Menu.Item>
          <Menu.Item key='license'>
            <img src="./images/license.png" alt="license" className="images1"/>
            <Link to={"\license"}>Licences</Link>
          </Menu.Item>
          <Menu.Item key='remix'>
            <img src="./images/remix.png"  alt="remixes" className="images1"/>
            <Link to={"\remixes"}>Remixes</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <img src="./images/profile.png"  alt="profile" className="images1"/>
            <Link to={"\profile"}>Profile</Link>
          </Menu.Item>
        </MenuWrapper>
      </StyledSideNav>
    )
  }
}
