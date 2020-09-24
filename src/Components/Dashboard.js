import React from 'react';
import Banner from './Banner'
import SubHeader from './SubHeader'
import TabPane from './Template/TabPane';

export default function Dashboard() {
    return (
        <div>
            <SubHeader/>
            <Banner/>
            <TabPane/>
        </div>
    )
}
