import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ButtonDropDown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      {
        <Dropdown overlay={menu} trigger={['click']}>
        <Button className='btn--outline'>
          Get License <DownOutlined />
        </Button>
      </Dropdown>
      }
    </>
  );
};

export default ButtonDropDown;