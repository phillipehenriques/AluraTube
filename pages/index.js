import React  from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/StyledTimeline";

function HomePage() {
    const mensagem = "Deu certo?";
    const estilosDaHomePage = {backgroundColor: "none", width: "100%"};

    const [valorDaBusca, setValorDaBusca] = React.useState();

    return (
        <>
        <CSSReset />
        <div style={estilosDaHomePage}>
            <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca}/>
            <Header />
            <Timeline searchValue={valorDaBusca} playlists={config.playlists} />
        </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .userInfo {
        margin-top: 56px;
        margin-bottom: 20px;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .modal {
        margin-top: 56px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        height: 25vh;
        background-color: black;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            {/*<img src=""/>*/}

            <div className="modal">
                <div className="userInfo">
                    <img src={`https://github.com/${config.github}.png`} />
                    <div>
                        <h2>{config.name}</h2>
                        <p>{config.job}</p>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...propriedades}) {
    const playListNames = Object.keys(propriedades.playlists)
    return (
        <StyledTimeline>
            {playListNames.map((playListName) => {
                const playlists = propriedades.playlists[playListName];

                console.log(playlists);

                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {playlists.filter((x) => {
                                return x.title.includes(searchValue)
                            }).map((x) => {
                                return (
                                    <a href={x.url}>
                                        <img src={x.thumb} />{/* thumb do video */}
                                        <span>
                                            {x.title} {/* nome do video */}
                                        </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                ) 
            })}
        </StyledTimeline>
    )
};