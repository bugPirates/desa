import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Official Kawil",
      headerLinks: [
        { title: 'Beranda', path: '/' },
        { title: 'Profil', path: '/profil'},
        { title: 'Info', path: '/info'},
        { title: 'Penduduk', path: '/penduduk'},
        { title: 'Pembangunan', path: '/pembangunan'}
      ],
      beranda:{
        title: 'Hai dunia',
        subTitile: 'Project KP',
        textL: 'Check out this'
      },
      profil:{
        title: 'Profil desa'
      },
      info: {
        title: 'Test'
      },
      penduduk: {
        title: 'Test'
      },
      pembangunan: {
        title: 'Test'
      }     
     }
    }
    render() {
      return (
        <Router>
          <Container classname="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kawil official</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Beranda</Link>
                <Link className="nav-link" to="/profil">Profil</Link>
                <Link className="nav-link" to="/info">Info</Link>
                <Link className="nav-link" to="/penduduk">Penduduk</Link>
                <Link className="nav-link" to="/pembangunan">Pembangunan</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* 
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/profil" render={() => <ProfilPage title={this.state.profil.title} />} />
          <Route path="/info" render={() => <InfoPage title={this.state.info.title} />} />
          <Route path="/penduduk" render={() => <PendudukPage title={this.state.penduduk.title} />} />
          <Route path="/pembangunan" render={() => <PembangunanPage title={this.state.pembangunan.title} />} />
          */}

          <Footer />
          </Container>
        </Router>
      );
    }
  }
 
export default App;
