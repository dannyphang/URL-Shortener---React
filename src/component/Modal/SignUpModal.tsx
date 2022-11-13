import React from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Link,
} from "@nextui-org/react";
import { EmailSecurity, LockOne, Woman } from "@icon-park/react";

export default function LoginModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button flat auto onClick={handler}>
        Sign Up
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text h3>Sign Up</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<Woman theme="outline" size="20" fill="#333" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={
              <EmailSecurity theme="outline" size="20" fill="#333" />
            }
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
          />

          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link color="text" href="#">
              <Text size={14}>Forget Password</Text>
            </Link>
          </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
