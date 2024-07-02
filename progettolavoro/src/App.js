import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Transactions from './Routes/Transactions';
import Users from './Routes/Users';
import Parking from './Routes/Parking';

const { Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Navbar collapsed={collapsed} toggleSidebar={toggleSidebar} />
                <Layout>
                    <Sidebar collapsed={collapsed} />
                    <Layout >
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/transactions" replace />} />
                                <Route path="/transactions" element={<Transactions />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/parking" element={<Parking />} />
                                <Route path="*" element={<Navigate to="/transactions" replace />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
