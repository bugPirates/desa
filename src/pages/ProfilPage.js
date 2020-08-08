import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ProfilPage(props){
    return(
        <div>
            <Hero title={props.title} />
            
        </div>
    );
}

export default ProfilPage;