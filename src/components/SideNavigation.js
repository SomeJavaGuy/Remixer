import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'
import { Menu } from 'antd';
import {StyledSideNav, MenuWrapper} from './StyledSideNav';

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
          <Menu.Item key='home'>Home</Menu.Item>
          <Menu.Item key='messages'>Licences</Menu.Item>
          <Menu.Item key='friends'>Remix</Menu.Item>
          <Menu.Item key="profile">Profile</Menu.Item>
        </MenuWrapper>
      </StyledSideNav>
    )
  }
}
