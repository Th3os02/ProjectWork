import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            <Layout>
                <Sidebar collapsed={collapsed} />
                <Layout className="site-layout">
                    <Navbar collapsed={collapsed} toggleSidebar={toggleSidebar} />
                        <Routes>
                            <Route 
                            path="/transactions" 
                            element={<Transactions />} 
                            />
                            <Route 
                            path="/users" 
                            element={<Users />} 
                            />
                            <Route 
                            path="/parking" 
                            element={<Parking />} 
                            />
                        </Routes>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
