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
  { mineName: "TEST" },
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

/**
 * Generate the application navbar
 * @return {ReactElement}
 */
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
          <NavbarBrand href="/">Network Automation Services</NavbarBrand>
          <NavbarToggler onClick={this.handleNavbarDisplay} className="mr-2" />
          <Collapse isOpen={this.state.displaySiteNavbar} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Wolverine Fuels</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://its-gj.com">ITS</NavLink>
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
      <ModalBody>Select network service</ModalBody>
      <ModalFooter>
        <Button
          className="btn-p"
          color="primary"
          onClick={() => console.log("You clicked a button!")}
        >
          Playbook 1
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
            <Button className="card-btn" onClick={this.handleModalDisplay}>
              View Playbooks
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
