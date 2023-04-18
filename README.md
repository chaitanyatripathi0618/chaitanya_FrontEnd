1. Explain what the simple List component does.

Here in the simple list component, it display the list of item passed through a props through which it allows user to click on the items and when the user click on the particular item it match the index of that with the selected list item if it is same it changes the click color to green.

2. What problems / warnings are there with code?

In the given code there was few problems and they are menioned below:

    1. PropTypes.shapeOf - As ShapeOf is not any method so instead of using shapeOf we need to use shape ( PropTypes.shape is a method of the PropTypes module that              shapes an object that passed through props).
    
    2. PropTypes.array - Using array can restricted on the shape of object in the array but while using arrayOf we can pass any type of value through the props.
    
    3. key={index} - This line of code is used to provide the unquie key value to the list item. Through this react can easily fing which item is clicked and that            color is changed
    4. isSelected={selectedIndex === index} - This is used to check whether the selectedIndex is green or red background
    
    5. const [setSelectedIndex,selectedIndex] = useState()- when we are using useState, first returns  a stateful value and then a function to update it so we need to        correct this line by
    
       const [selectedIndex, setSelectedIndex] = useState(null) here to initialize the initial value as null because no item is selected at the inital point unless the          user clicks
       
    6. const items=[ 
    
    {
    
    text:"FIRST"
    
    },
    
    {
    
      text:"SECOND"
      
    },
    
    {
    
      text:"THIRD"
      
    },
    
    {
    
      text:"FOURTH"
      
    },
    
  ]
  
  
    we need to pass the array of object as a props to perform the action.
