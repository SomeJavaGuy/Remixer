import styled from  'styled-components';
import { Menu } from 'antd';

export const MenuWrapper = styled(Menu)`
  &.ant-menu-vertical {
    border-right: none;
  }
  &.ant-menu {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding-left: 0rem;
  }
  li.ant-menu-item {
    margin: 0.8rem 0;
    height: 3rem;
    padding-bottom: 0rem;
    text-align: left;
    color: darkerGray;
    font-size: 16px;
    line-height: 1.313rem;
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

/* This defines the actual bar going down the screen */
export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 205px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  background-color: #fff; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 5rem;
`;

// export default StyledSideNav;