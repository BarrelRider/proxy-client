import * as React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  Button,
} from "reactstrap";
import HeadphonesIcon from "./Icons/HeadphonesIcon";
import LogoIcon from "./Icons/LogoIcon";
import MenuIcon from "./Icons/MenuIcon";
import MessageIcon from "./Icons/MessageIcon";
import PowerIcon from "./Icons/PowerIcon";
import UserIcon from "./Icons/UserIcon";

const NavigationTemplate: React.FC<any> = ({ children }) => {
  const routes: Array<any> = [
    {
      to: "/",
      text: "Contact Support",
      className: "nav-link",
      icon: <HeadphonesIcon />,
    },
    {
      to: "/",
      text: null,
      className: "nav-link",
      icon: <MessageIcon />,
    },
    {
      to: "/",
      text: null,
      className: "nav-link",
      icon: <UserIcon />,
    },
    {
      to: "/",
      text: null,
      className: "nav-link",
      icon: <PowerIcon />,
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar expand="md" className="px-0">
        <Button color="link">
          <MenuIcon />
        </Button>
        <NavbarBrand>
          <LogoIcon />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <div className="d-none d-md-block ml-auto">
          <Nav navbar>
            {routes.map(({ text, icon, ...rest }, index) => (
              <NavItem key={index + 1}>
                <Link {...rest}>
                  <div className="mc-icontext">
                    {icon && (
                      <span className={text ? "mc-icon pr-2" : "mc-icon"}>
                        {icon}
                      </span>
                    )}
                    {text && (
                      <span className="mc-text mc-text--bold">{text}</span>
                    )}
                  </div>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </Navbar>
      {children}
    </>
  );
};

export default NavigationTemplate;
