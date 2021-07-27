import React, { useState } from 'react';
/*eslint-disable*/


import Select from 'react-select';
import { useDispatch } from 'react-redux';
// import { setNoOfQuestions } from '';


export default function SingleSelect({selectLabel, optionForUser, setVariable, disable}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch()
  console.log(disable, '^^^')


  const style = {
    blockquote: {
      fontStyle: 'italic',
      fontSize: '.75rem',
      margin: '1rem 0',
    },
    label: {
      fontSize: '.75rem',
      fontWeight: 'bold',
      lineHeight: 2,
      width: 200
    },
  };

const customStyles = {
    control: () => ({
      width: 250,
      border: "1px solid #F4A261",
      backgroundColor: '#F4A261',
      display: 'flex',
    }),
  }

  const handleChange = selectedOption => {
    // dispatch(setNoOfQuestions(selectedOption.value))
    setVariable(selectedOption.value);
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <form>
      <label style={style.label} id="aria-label" htmlFor="aria-example-input">
        Select {selectLabel}
      </label>

      <Select
        aria-labelledby="aria-label"
        inputId="aria-example-input" 
        name="aria-live-color"
        value={selectedOption.value}
        onChange={handleChange}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        isDisabled={disable}
        options={optionForUser}
        styles={customStyles}
      />
    </form>
  );
}
