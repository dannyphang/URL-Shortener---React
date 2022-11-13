import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";

export default function NavBar() {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Content
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Navbar.Item>
          <LoginModal></LoginModal>
        </Navbar.Item>
        <Navbar.Item>
          <SignUpModal></SignUpModal>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
