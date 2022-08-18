import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBarComp() {
    // if (!user) {
    //   return (
    //     <Navbar bg="light" expand="lg">
    //       <Container>
    //         <div className='login-btns'>
    //             <Nav.Link href="login">Login</Nav.Link>
    //         </div>
    //         <div className='logo'>
    //             <Navbar.Brand href="/">Edu-teers</Navbar.Brand>
    //         </div>
    //         <div className='login-btns'>
    //             <Nav.Link href="register">Register</Nav.Link>
    //         </div>
    //       </Container>
    //     </Navbar>
    //   );
    // } else {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='login-btns'>
                    <Nav.Link href="/">Logout</Nav.Link>
                </div>
                <div className='logo'>
                    <Navbar.Brand href="/">Edu-teers</Navbar.Brand>
                </div>
                <div className='login-btns'>
                    <Nav.Link href="settings">Settings</Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
    // }
}
