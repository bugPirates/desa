import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function PembangunanPage(props){
    return(
        <div>
            <Hero title={props.title} />
        </div>
    );
}

export default PembangunanPage;