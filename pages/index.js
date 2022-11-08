import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const mensagem = "Deu certo essa desgraça?";
    const estilosDaHomePage = { backgroundColor: "orange" };

    return 
        <div style={estilosDaHomePage}>
            <Menu></Menu>
            <Header></Header>
            <Timeline></Timeline>
        </div>

  }
  
  export default HomePage
  

  function Menu() {
    return (
        <div>
            Menu
        </div>
    )
  }

  const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
  `;
  function Header() {
    return (
        <StyledHeader>
            <img src=""/>
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
        </StyledHeader>
    )
  }

  function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
  }