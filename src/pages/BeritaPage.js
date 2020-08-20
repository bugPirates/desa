import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Router from '../components/Router';
import SinglePost from '../components/SinglePost';

function BeritaPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <SinglePost />
        </div>
              
   );
}

export default BeritaPage;