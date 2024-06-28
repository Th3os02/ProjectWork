import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, FileOutlined, CarOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<FileOutlined />}>
                    <Link to="/transactions">Transazioni</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to="/users">Utenti</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<CarOutlined />}>
                    <Link to="/parking">Parcheggi</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
