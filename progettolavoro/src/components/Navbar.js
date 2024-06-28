import React from 'react';
import { Layout,  Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ collapsed, toggleSidebar }) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggleSidebar,
            })}
            <div style={{ float: 'right', marginRight: '16px' }}>
                <Avatar icon={<UserOutlined />} />
            </div>
        </Header>
    );
};

export default Navbar;
