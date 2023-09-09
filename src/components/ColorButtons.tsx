import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { flood } from '../store/actions';
import { Color } from '../types';
import './ColorButtons.css';

const ColorButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickColor = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    const color = parseInt(e.currentTarget.value, 10);
    dispatch(flood(color));
  }, [dispatch]);

  return (
    <div className="ColorButtons d-flex justify-content-between">
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.RED}
        onClick={handleClickColor}
        title="Flood with red"
      >
        <span className="sr-only">Red</span>
      </button>
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.ORANGE}
        onClick={handleClickColor}
        title="Flood with orange"
      >
        <span className="sr-only">Orange</span>
      </button>
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.YELLOW}
        onClick={handleClickColor}
        title="Flood with yellow"
      >
        <span className="sr-only">Yellow</span>
      </button>
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.GREEN}
        onClick={handleClickColor}
        title="Flood with green"
      >
        <span className="sr-only">Green</span>
      </button>
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.BLUE}
        onClick={handleClickColor}
        title="Flood with blue"
      >
        <span className="sr-only">Blue</span>
      </button>
      <button
        className="ColorButtons-button btn"
        type="button"
        value={Color.PURPLE}
        onClick={handleClickColor}
        title="Flood with purple"
      >
        <span className="sr-only">Purple</span>
      </button>
    </div>
  );
};

export default ColorButtons;
