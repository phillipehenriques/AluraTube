import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu.js";

function HomePage() {
    const mensagem = "Deu certo essa desgraça?";
    const estilosDaHomePage = {        backgroundColor: "none", width: "100%"};

    return (
        <>
        <CSSReset />
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists}>
                Conteúdo
            </Timeline>
        </div>
        </>
    );
}

export default HomePage;


// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// };

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .userInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            {/*<img src=""/>*/}

            <div className="userInfo">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </div>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    const playListNames = Object.keys(propriedades.playlists)
    return (
        <div>
            {playListNames.map((playListName) => {
                const playlists = propriedades.playlists[playListName];

                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {playlists.map(() => {
                                return (
                                    <a href={playlists.url}>
                                        <img src={playlists.thumb} />
                                        <span>
                                            {playlists.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                ) 
            })}
        </div>
    )
}