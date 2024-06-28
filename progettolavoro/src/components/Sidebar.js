import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;


const Sidebar = ({ collapsed, showParking }) => (
    <Sider collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline">
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