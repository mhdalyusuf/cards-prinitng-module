import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const TopMenu = () => {
  return (
    <Container fluid>
      <Menu stackable>
        <Menu.Item>
          <img src="/images/wireframe/logo.png" />
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <NavLink to={"/404"} style={{ textDecoration: "none" }}>
            404
          </NavLink>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default TopMenu;
