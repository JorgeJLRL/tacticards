// src/app/dashboard/page.js
import React from 'react';
import DashboardContainer from '../../components/dashboardContainer/dashboardContainer';
import Cards from '../../../components/dashboardPages/cards/cards';

function CardsPage() {

    const content = <Cards/>

    return (
        <DashboardContainer content={content} />
    );
}

export default CardsPage;