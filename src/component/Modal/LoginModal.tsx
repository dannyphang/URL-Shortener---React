import React, { useCallback, useMemo, useState } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Link,
  useInput,
} from "@nextui-org/react";
import { EmailSecurity, LockOne } from "@icon-park/react";

function loginValidation(setVisible: any, message: string) {
  console.log("Message: " + message);
  if (message != "123") {
    console.log("wrong password");
    // document.getElementById("password")?.add.HelperText;
    setVisible(true);
  }
}

export default function LoginModal() {
  const dummy = [
    {
      email: "dannyphang64@gmail.com",
      password: "123",
    },
    {
      email: "456@gmail.com",
      password: "456",
    },
  ];
  const { value, bindings } = useInput("");
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const validater = useCallback((value: any) => {
    if (!value) {
      return;
    }
    const user = dummy.find((user) => user.password === value);
    if (user) {
      return "valid";
    } else {
      return "invalid";
    }
  }, []);

  const helper = useMemo(() => {
    if (!value) return;
    const invalid = validater(value);
    return {
      invalid,
      text: invalid ?? "Enter a valid password",
      color: invalid ? (invalid ? "success" : "error") : undefined,
    };
  }, [value, validater]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setUpdated(message);
  };
  return (
    <div>
      <Button light auto onClick={handler}>
        Login
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
            <Text h3>{message}</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
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
          <Input.Password
            id="password"
            clearable
            bordered
            fullWidth
            color={helper?.color}
            size="lg"
            placeholder="Password"
            onChange={handleChange}
            value={message}
            contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
          />

          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link color="text" href="#">
              <Text size={14}>Forget Password</Text>
            </Link>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={() => loginValidation(setVisible, message)}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
