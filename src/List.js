import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  const handleClick = () => {
    onClickHandler(index);
  };

  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={handleClick}
    >
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null); //setSelectedIndex is a function and we need to update selectedIndex

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map(({ text }, index) => (
        <SingleListItem
          key={index} //we had provided the key in order to click on particular index the same index color changes not the other  
          index={index}
          isSelected={selectedIndex === index}  //this line of code is checking whether the index is equal to the selected index or not .
          onClickHandler={handleClick}
          text={text}
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(  //array is not any method
    PropTypes.shape({   //shapeof is not any function
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: null,
};

export default List;