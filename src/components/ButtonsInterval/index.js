import React, {useState} from 'react';

import {AppStateValue} from '../../context/StateContext';
import Styled from './style';

const ButtonsInterval = () => {
  const [context, dispatch] = AppStateValue();
  const [controllerButtons, setControllerButtons] = useState(false);
  const [optionsButtons, setOptionsButtons] = useState([
    {id: 0, active: true, time: '10s'},
    {id: 1, active: false, time: '5s'},
    {id: 2, active: false, time: '3s'},
    {id: 3, active: false, time: '1s'},
  ]);

  const handleActiveButton = identifier => {
    let vectorOptButtons = optionsButtons;
    let optButtons = optionsButtons.filter(opt => opt.active !== false);
    setOptionsButtons([]);

    if (optButtons[0].id !== identifier) {
      vectorOptButtons[identifier].active = true;
      vectorOptButtons[optButtons[0].id].active = false;

      dispatch({
        type: 'setTemp',
        payload: {
          buttonTemp: vectorOptButtons[identifier].time,
        },
      });
    }

    setOptionsButtons(vectorOptButtons);
    setControllerButtons(!controllerButtons);
  };

  return (
    <Styled.BoxIntervalCommunication>
      <Styled.TextCommunication>
        Intervalo de comunicação
      </Styled.TextCommunication>

      <Styled.BoxOptionChoiceInterval>
        {optionsButtons.map(item => (
          <Styled.ButtonDetailInterval
            key={item.id}
            color={item.active}
            onPress={() => handleActiveButton(item.id)}
            activeOpacity={0.9}>
            <Styled.TextOptionChoice color={item.active}>
              {item.time}
            </Styled.TextOptionChoice>
          </Styled.ButtonDetailInterval>
        ))}
      </Styled.BoxOptionChoiceInterval>
    </Styled.BoxIntervalCommunication>
  );
};

export default ButtonsInterval;
