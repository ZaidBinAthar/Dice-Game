import styled from "styled-components";
import {BsFillDice1Fill} from "react-icons/bs";
import {BsFillDice2Fill} from "react-icons/bs";
import {BsFillDice3Fill} from "react-icons/bs";
import {BsFillDice4Fill} from "react-icons/bs";
import {BsFillDice5Fill} from "react-icons/bs";
import {BsFillDice6Fill} from "react-icons/bs";


const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
       <div>{currentDice === 1 ? <BsFillDice1Fill size={230} className="dices56"/>: currentDice === 2? <BsFillDice2Fill size={230} className="dices56"/>
       : currentDice === 3? <BsFillDice3Fill size={230} className="dices56"/>: currentDice === 4? <BsFillDice4Fill size={230} className="dices56"/>
       : currentDice === 5? <BsFillDice5Fill size={230} className="dices56"/>
           : <BsFillDice6Fill size={230}/>
           }</div>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;