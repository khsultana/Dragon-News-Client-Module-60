import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYahoo,
  FaTwitch,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import BrandCarousel from "../../Components/Brand/BrandCarousel";

const RightSide = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Sign In With Google{" "}
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Sign In WIth Github
        </Button>
      </ButtonGroup>

      <div className="mt-5">
        <h5>Find us On</h5>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYahoo /> Yahoo{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel> </BrandCarousel>
      </div>
    </div>
  );
};

export default RightSide;
