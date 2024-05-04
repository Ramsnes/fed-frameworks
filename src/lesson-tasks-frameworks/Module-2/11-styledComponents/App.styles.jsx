/* 
Create and implement a theme for your app. You only need to have one value in your theme, such as a primary color.

Create a <button> styled-component and call it in your app.

Add the theme value you created to your <button> styled-component.

Create a boolean value and pass it to your styled-component, then alter your styling of the <button> styled-component based on this boolean value passed as a prop.
 */
/* 
- Installed styled components
npm install --save styled-components@5.3.10
*/

import styled, { ThemeProvider } from "styled-components";

// Theme
const themeVariable = {
  color: {
    primary: "blue",
    secondary: "red",
    third: "cyan",
    fourth: "gold",
  },
};
// In our styled-component we access the properties of our theme
const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) =>
    props.boolean ? props.theme.color.primary : props.theme.color.secondary};
  color: ${(props) =>
    props.boolean2 ? props.theme.color.third : props.theme.color.fourth};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;
// Theme end

// Passing props
const Item = styled.li`
  background-color: ${(props) => (props.isActive ? "red" : "")};
`;
// Passing props end

// Styles and extending
const BaseButton = styled.button`
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color linear 800ms;

  :hover {
    background-color: black;
    color: white;
  }
`;
// Extending style
const PrimaryButton = styled(BaseButton)`
  background-color: red;
`;
// Styles and extending end

// Exporting as an alias
const url = "../../../App.styles.js";

/*  */

function StyledComponents() {
  return (
    <div>
      <ul>
        <Item>Item 1</Item>
        <Item isActive={true}>Item 2</Item>
        <Item isActive>Item 3</Item>
        <Item>Item 4</Item>
      </ul>
      <div>
        <BaseButton>Base button</BaseButton>
        <PrimaryButton>Base button</PrimaryButton>
      </div>
      <ThemeProvider theme={themeVariable}>
        <div>
          <Button boolean boolean2>
            Click theme
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default StyledComponents;
