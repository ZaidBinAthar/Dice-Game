// StartGame.js
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
import { GiDiceFire } from "react-icons/gi";
import Modal from "react-modal";
import { verifyPassword } from "./verifyPassword";
import { IoReturnDownBackOutline } from "react-icons/io5";

Modal.setAppElement("#root"); // Set the root element for accessibility

const StartGame = ({ toggle }) => {
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(true);
  };

  const handlePlayNow = () => {
    const specialPassword = "hamzapro";

    if (verifyPassword(password, specialPassword)) {
      setIsValidPassword(true);
      toggle();
      setIsModalOpen(false);
    } else {
      setIsValidPassword(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setPassword(""); // Clear password when opening the modal
    setIsValidPassword(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsValidPassword(true);
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handlePlayNow(e.target.value);
    }
  }

  return (
    <Container>
      <div>
        <div className="content">
          <h1 style={{ color: "teal" }}>
            <GiDiceFire size={600} />
          </h1>
        </div>
      </div>
      <div className="content">
        <h2>Dice Game</h2>
        <Button onClick={openModal}>Play Now</Button>
        <h5>Dev By..: Zaid Bin Ather</h5>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Password Modal"
        >
          <ModalContent>
            <h2>Enter Password</h2>
            <input
              type="password"
              id="password"
              placeholder="Password"
              style={{ margin: "5px", padding: "10px", width: "300px", borderRadius: "5px" }}
              value={password}
              onKeyDown={handleKeyDown}
              onChange={handlePasswordChange}
            />
            {!isValidPassword && (
              <ErrorMessage>Invalid password. Please try again.</ErrorMessage>
            )}
            <br />
            <Button onClick={handlePlayNow} style={{ margin: "5px", padding: "10px", width: "323px" }}>Submit</Button>
            <br />
            <Button onClick={closeModal} style={{ margin: "5px", padding: "10px", width: "323px" }}>Back</Button>
          </ModalContent>
        </Modal>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h2 {
      font-size: 116px;
      white-space: nowrap;
    }

    h1 {
      color: #353434;
    }
  }
`;

const ModalContent = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  label {
    margin-right: 5px;
  }

  input {
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;



export default StartGame;
