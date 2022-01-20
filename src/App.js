import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const darkTheme = {
  icon: "blue",
  title2: "#ffa7c4",
  color: "white",
  background: "rgb(78, 88, 97)",
  pose: "left",
};

const lightTheme = {
  type: "blue",
  icon: "pink",
  title2: "#d23669",
  color: "black",
  background: "white",
  pose: "right",
};

const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;


const Title = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  font-size: 15px;
  text-align: left;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  text-align: left;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  text-align: left;
`;

const TitMod = styled.div`
display: flex;
gap: 120px;
`

const Title2 = styled.h2`
  color: ${({ theme }) => theme.title2};
  font-weight: bold;
  font-size: 30px;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.icon};
  font-size: 20px;
  margin: 4px;
  padding: 0 6px;
  width: 60px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 35px;
  text-align: ${({ theme }) => theme.pose};
`;


function App() {
  const [theme, setTheme] = useState("l🌞");

  const themeToggler = () => {
    theme === "🌞" ? setTheme("🌙") : setTheme("🌞");
  };

  return (
    <ThemeProvider theme={theme === "🌞" ? lightTheme : darkTheme}>
      
      <Container>
      <TitMod>
          <Title><h1>Overreact</h1></Title>
          <Button onClick={themeToggler}>{theme}</Button>
      </TitMod>
            <div>
            
            <Title2>npm audit: Broken by Design</Title2>
            
            <SubTitle>July 7, 2021 • ☕️☕️☕️ 14 min read</SubTitle>
            
            <Description>
            Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)
            </Description>
            <br/>
            <Title2>Before You memo()</Title2>
            <SubTitle>February 23, 2021 • ☕️ 5 min read</SubTitle>
            <Description>
            Rendering optimizations that come naturally.
            </Description>
            <br/>
            <Title2>The WET Codebase</Title2>
            <SubTitle>July 13, 2020 • ☕️ 1 min read</SubTitle>
            <Description>
            Come waste your time with me.
            </Description>
            </div>
          </Container>
      
    </ThemeProvider>
  );
}


export default App;