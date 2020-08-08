import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { render } from '@testing-library/react';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilPage from './pages/ProfilPage';
import PendudukPage from './pages/PendudukPage';
import PembangunanPage from './pages/PembangunanPage';
import BeritaPage from './pages/BeritaPage';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Official Kawil",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Profil', path: '/profil'},
        { title: 'Contact', path: '/contact'},
        { title: 'Penduduk', path: '/penduduk'},
        { title: 'Pembangunan', path: '/pembangunan'},
        { title: 'Berita', path: '/berita'}
      ],
      home:{
        title: 'Website Kawil',
        subTitle: 'Project KP',
        text: 'Created By: Gondes'
      },
      profil:{
        title: 'Profil Desa'
      },
      contact: {
        title: 'Kontak Desa'
      },
      penduduk: {
        title: 'Penduduk'
      },
      pembangunan: {
        title: 'Pembangunan'
      },
      berita: {
        title: 'Berita Desa'
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
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/profil">Profil</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/penduduk">Penduduk</Link>
                <Link className="nav-link" to="/pembangunan">Pembangunan</Link>
                <Link className="nav-link" to="/berita">Berita</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
         
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/profil" render={() => <ProfilPage title={this.state.profil.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/penduduk" render={() => <PendudukPage title={this.state.penduduk.title} />} />
          <Route path="/pembangunan" render={() => <PembangunanPage title={this.state.pembangunan.title} />} />
          <Route path="/berita" render={() => <BeritaPage title={this.state.berita.title} />} />

          <Footer />
          </Container>
        </Router>
      );
    }
  }
 
export default App;
