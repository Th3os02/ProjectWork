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
                selectedKeys={[selectedKey]} 
            >
                <Menu.Item key="/transactions">
                    <Link to="/transactions">Transazioni</Link>
                </Menu.Item>
                <Menu.Item key="/users">
                    <Link to="/users">Utenti</Link>
                </Menu.Item>
                <Menu.Item key="/parking">
                    <Link to="/parking">Parcheggi</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
