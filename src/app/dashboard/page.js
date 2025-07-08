// src/app/dashboard/page.js
import React from 'react';
import DashboardContainer from '../components/dashboardContainer/dashboardContainer';

function Dashboard() {

    const content = 
    <div className="p-4">
        <h2 className="text-lg font-bold">Page Content</h2>
        <p>This is where your page content will go.</p>
    </div>

    return (
        <DashboardContainer content={content} />
    );
}

export default Dashboard;