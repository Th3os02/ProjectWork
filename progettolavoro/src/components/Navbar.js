import React from 'react';
import { Layout, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ collapsed, toggleSidebar }) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginLeft: '16px'
                }}
                onClick={toggleSidebar}
            >
                &lt;
            </Button>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px', color:'white' }}>
                <span style={{marginRight: '10px'}}>r.lanza@gmail.com</span>
                <Avatar style={{ backgroundColor: '#87d068', marginRight: '8px' }} icon={<UserOutlined />} />
            </div>
        </Header>
    );
};

export default Navbar;
