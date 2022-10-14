import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Wrapper = styled(motion.div)`
  width: 100vw;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Field = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 720px;
  border: 5px solid white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Area = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Player = styled(motion.div)`
  width: 75px;
  height: 75px;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const BackNum = styled(motion.span)`
  position: absolute;
  color: rgba(5, 196, 107, 1);
  bottom: 17px;
  font-size: 22.5px;
  font-weight: 600;
`;

const playerVars = {
  hover: {
    color: "rgba(255, 221, 89,1.0)",
    scale: 1.1,
  },
};

const PlayerName = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  margin-top: 5px;
  background-color: white;
  color: rgba(5, 196, 107, 1);
  padding: 1px 5px;
  border-radius: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerInfos = styled.div`
  width: 375px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(5, 196, 107, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  padding: 50px 0px;
`;

const Photo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Info = styled.div`
  width: 50%;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 30px;
`;

interface IPlayers {
  name: string;
  id: string;
  number: string;
  position: string;
}

const players: IPlayers[] = [
  { name: "임남규", id: "1", number: "22", position: "ST" },
  { name: "류은규", id: "2", number: "99", position: "ST, LWF" },
  { name: "김현우", id: "3", number: "12", position: "AMF" },
  { name: "이대훈", id: "4", number: "77", position: "MF" },
  { name: "강칠구", id: "5", number: "63", position: "DMF" },
  { name: "허민호", id: "6", number: "20", position: "CMF" },
  { name: "김준현", id: "7", number: "92", position: "LB, RB" },
  { name: "박제언", id: "8", number: "79", position: "CB" },
  { name: "이장군", id: "9", number: "4", position: "CB" },
  { name: "조원우", id: "10", number: "9", position: "CB, LB" },
  { name: "김요한", id: "11", number: "5", position: "GK" },
];

const FormationBtns = styled(motion.div)`
  margin-top: 10px;
  display: flex;
  width: 100%;
  max-width: 540px;
  button {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    border: none;
    color: rgba(5, 196, 107, 1);
    margin: 0px 5px;
    font-size: 20px;
    width: 25%;
  }
`;
const BtnFFT = styled(motion.button)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: none;
  color: rgba(5, 196, 107, 1);
  margin: 0px 5px;
  font-size: 30px;
  width: 128px;
`;
const BtnFTT = styled(motion.button)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: none;
  color: rgba(5, 196, 107, 1);
  margin: 0px 5px;
  font-size: 30px;
  width: 128px;
`;
const BtnFTTO = styled(motion.button)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: none;
  color: rgba(5, 196, 107, 1);
  margin: 0px 5px;
  font-size: 30px;
  width: 128px;
`;
const BtnFTOT = styled(motion.button)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: none;
  color: rgba(5, 196, 107, 1);
  margin: 0px 5px;
  font-size: 30px;
  width: 128px;
`;

function App() {
  const [areaCount, setAreaCount] = useState(false);
  const [fFT, setFFT] = useState(false);
  const [fTT, setFTT] = useState(false);
  const [fTTO, setFTTO] = useState(false);
  const [fTOT, setFTOT] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const [name, setName] = useState<null | string>(null);
  const [num, setNum] = useState<null | string>(null);
  const [position, setPosition] = useState<null | string>(null);

  const onFFT = () => {
    setFFT((current) => !current);
    setFTT(false);
    setFTTO(false);
    setFTOT(false);
    setAreaCount(false);
  };

  const onFTT = () => {
    setFTT((current) => !current);
    setFFT(false);
    setFTTO(false);
    setFTOT(false);
    setAreaCount(false);
  };

  const onFTTO = () => {
    setFTTO((current) => !current);
    setFFT(false);
    setFTT(false);
    setFTOT(false);
    setAreaCount(true);
  };

  const onFTOT = () => {
    setFTOT((current) => !current);
    setFFT(false);
    setFTT(false);
    setFTTO(false);
    setAreaCount(true);
  };

  return (
    <Wrapper>
      {areaCount ? (
        <Field>
          <Area>
            {fTTO
              ? players.slice(0, 1).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")}></FontAwesomeIcon>
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTOT
              ? players.slice(0, 2).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fTTO
              ? players.slice(1, 4).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTOT
              ? players.slice(2, 3).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fTTO
              ? players.slice(4, 6).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTOT
              ? players.slice(3, 6).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fTTO
              ? players.slice(6, 10).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTOT
              ? players.slice(6, 10).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fTTO
              ? players.slice(-1).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTOT
              ? players.slice(-1).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
        </Field>
      ) : (
        <Field>
          <Area>
            {fFT
              ? players.slice(0, 2).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}

            {fTT
              ? players.slice(0, 3).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fFT
              ? players.slice(2, 6).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTT
              ? players.slice(3, 6).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fFT
              ? players.slice(6, 10).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTT
              ? players.slice(6, 10).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
          <Area>
            {fFT
              ? players.slice(-1).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
            {fTT
              ? players.slice(-1).map((i) => (
                  <Player
                    onClick={() => {
                      setId(i.id);
                      setName(i.name);
                      setNum(i.number);
                      setPosition(i.position);
                    }}
                    key={i.id}
                    layoutId={i.id}
                    variants={playerVars}
                    whileHover={"hover"}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={solid("user")} />
                    <BackNum>{i.number}</BackNum>
                    <PlayerName>{i.name}</PlayerName>
                  </Player>
                ))
              : null}
          </Area>
        </Field>
      )}

      <FormationBtns>
        {fFT ? (
          <BtnFFT
            style={{ backgroundColor: "rgba(255, 221, 89,1.0)" }}
            onClick={onFFT}
          >
            4-4-2
          </BtnFFT>
        ) : (
          <BtnFFT onClick={onFFT}>4-4-2</BtnFFT>
        )}
        {fTT ? (
          <BtnFTT
            style={{ backgroundColor: "rgba(255, 221, 89,1.0)" }}
            onClick={onFTT}
          >
            4-3-3
          </BtnFTT>
        ) : (
          <BtnFTT onClick={onFTT}>4-3-3</BtnFTT>
        )}
        {fTTO ? (
          <BtnFTTO
            style={{ backgroundColor: "rgba(255, 221, 89,1.0)" }}
            onClick={onFTTO}
          >
            4-2-3-1
          </BtnFTTO>
        ) : (
          <BtnFTTO onClick={onFTTO}>4-2-3-1</BtnFTTO>
        )}
        {fTOT ? (
          <BtnFTOT
            style={{ backgroundColor: "rgba(255, 221, 89,1.0)" }}
            onClick={onFTOT}
          >
            4-3-1-2
          </BtnFTOT>
        ) : (
          <BtnFTOT onClick={onFTOT}>4-3-1-2</BtnFTOT>
        )}
      </FormationBtns>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => {
              setId(null);
              setName(null);
              setNum(null);
              setPosition(null);
            }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Player layoutId={id}>
              <PlayerInfos>
                <Photo>
                  <FontAwesomeIcon icon={solid("user")} />
                </Photo>

                <Info>
                  <span>이름: {name}</span>
                  <span>번호: {num}</span>
                  <span>포지션: {position}</span>
                </Info>
              </PlayerInfos>
            </Player>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
