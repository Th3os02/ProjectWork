import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => (
    <Sider width={200} style={{ background: '#001529' }}>
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            theme="dark" 
        >
            <Menu.Item key="1">
                <Link to="/transactions">Transactions</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/parking">Parking</Link>
            </Menu.Item>
        </Menu>
    </Sider>
);

export default Sidebar;
