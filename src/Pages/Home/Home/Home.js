import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import BottomCall from '../BottomCall/BottomCall';
import EasySend from '../EasySend/EasySend';
import FeatureOne from '../FeatureContainer/One/FeatureOne';
import FeatureTwo from '../FeatureContainer/Two/FeatureTwo';
import HomeBanner from '../HomeBanner/HomeBanner';
import TestRequirement from '../TestRequirement/TestRequirement';

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeBanner />
            <FeatureOne />
            <EasySend />
            <FeatureTwo />
            <TestRequirement />
            <BottomCall />
        </div>
    );
};

export default Home;