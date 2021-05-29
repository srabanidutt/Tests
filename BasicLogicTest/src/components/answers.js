import React from 'react'
import {Nav, Navbar,NavDropdown, FormControl} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import './file.css'
export default function Answers() { 
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className='brand'>Basic Logic Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="alignment" as={Link} to="./answer1" className="alignment">View Answer1</Nav.Link>
            <Nav.Link className="alignment" as={Link} to="./answer2" className="alignment">View Answer2</Nav.Link>
            <Nav.Link className="alignment" as={Link} to="./answer3" className="alignment">View Answer3</Nav.Link>
            <Nav.Link className="alignment" as={Link} to="./answer4" className="alignment">View Answer4</Nav.Link>
            <Nav.Link className="alignment" as={Link} to="./answer5" className="alignment">View Answer5</Nav.Link>
        </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
}


/*
import React from 'react'
import {Link} from 'react-router-dom'
export default function Answers() {
    return (
        <>
            <Link to="./answer1"><button>Click to view Answer1</button></Link>
            <Link to="./answer2"><button>Click to view Answer2</button></Link>
            <Link to="./answer3"><button>Click to view Answer3</button></Link>
            <Link to="./answer4"><button>Click to view Answer4</button></Link>
            <Link to="./answer5"><button>Click to view Answer5</button></Link>
        </>
    )
}
*/