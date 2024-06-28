import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
    const location = useLocation();
    const selectedKey = location.pathname;

    return (
        <Sider width={200} style={{ background: '#001529' }}>
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
                theme="dark"
                selectedKeys={[selectedKey]} // Imposta la root selezionata
            >
                <Menu.Item key="/transactions">
                    <Link to="/transactions">Transactions</Link>
                </Menu.Item>
                <Menu.Item key="/users">
                    <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item key="/parking">
                    <Link to="/parking">Parking</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
