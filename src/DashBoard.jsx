import React, { Component } from "react";
import "./index.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// Configuration for each mine site
const cardConfig = [
  { mineName: "BM2" },
  { mineName: "KY" },
  { mineName: "DUG" },
  { mineName: "GJO" },
  { mineName: "KY" },
  { mineName: "NOC" },
  { mineName: "SAL" },
  { mineName: "SKY" },
  { mineName: "SLC" },
  { mineName: "SUF" },
  { mineName: "TLS" }
];

/**
 * Generate `MineCard`s based on the sites definined in `cardConfig`
 * @return {ReactElement}
 */
export const CardGenerator = () => {
  const mapCards = () =>
    cardConfig.map((mineSite, idx) => {
      return <MineCard key={idx} cardData={mineSite} />;
    });
  return <CardDeck>{mapCards()}</CardDeck>;
};

export class SiteNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySiteNavbar: false
    };
  }

  handleNavbarDisplay = () => {
    this.setState({ displaySiteNavbar: !this.state.displaySiteNavbar });
  };

  render() {
    return (
      <div className="navbar-wrapper">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            NETWORK NUKE
          </NavbarBrand>
          <NavbarToggler onClick={this.handleNavbarDisplay} className="mr-2" />
          <Collapse isOpen={this.state.displaySiteNavbar} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Wolverine Fuels</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  ITS
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/**
 * An individual card
 * @return {ReactElement}
 */
class MineCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false
    };
  }

  handleModalDisplay = () => {
    this.setState({ displayModal: !this.state.displayModal });
  };

  CardModal = () => (
    <Modal isOpen={this.state.displayModal} toggle={this.handleModalDisplay}>
      <ModalHeader toggle={this.handleModalDisplay}>
        {this.props.cardData.mineName}
      </ModalHeader>
      <ModalBody>Modal Body</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => console.log("You clicked a button!")}
        >
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={this.handleModalDisplay}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  render() {
    return (
      <div className="card-wrapper">
        <Card>
          <CardBody>
            <this.CardModal />
            <CardTitle>{this.props.cardData.mineName}</CardTitle>
            <CardText>Network Information.</CardText>
            <Button onClick={this.handleModalDisplay}>View Playbooks</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
