import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Input,
  InputGroup,
} from "reactstrap";

import { HiSearch } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="success">
        <NavbarBrand href="/">Techno Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar color="primary">
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <InputGroup>
              <Input />
              <Button color="warning">
                <HiSearch />
              </Button>
            </InputGroup>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
