import React from 'react'
import styles from './Header.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
      <Navbar.Brand href="/"><b>Data</b><span className="text-primary">Graphs</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  )
}
