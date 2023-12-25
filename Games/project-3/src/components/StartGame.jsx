import styled from "styled-components";
import { Button } from "../styled/Button";
import { GiDiceFire } from "react-icons/gi";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <div className="content">
          <h1>
            {" "}
            <GiDiceFire size={600} />
          </h1>
        </div>
      </div>
      <div className="content">
        <h2>Dice Game</h2>
        <Button onClick={toggle}>Play Now</Button>
        <h5>Dev By..: Zaid Bin Ather</h5>
      </div>
    </Container>
  );
};

export default StartGame;

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
