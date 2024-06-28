import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Transactions from './pages/Transactions';
import Users from './pages/Users';
import Parking from './pages/Parking';

const { Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Router>
            <Layout>
                <Sidebar collapsed={collapsed} />
                <Layout className="site-layout">
                    <Navbar collapsed={collapsed} toggleSidebar={toggleSidebar} />
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                        <Routes>
                            <Route
                                path="/transactions"
                                element={<Transactions />}
                            />
                            <Route
                                path="/users" e
                                lement={<Users />}
                            />
                            <Route
                                path="/parking"
                                element={<Parking />}
                            />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
