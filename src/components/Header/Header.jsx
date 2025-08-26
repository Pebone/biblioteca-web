import { useState } from "react";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
      <section className="banner">
        <div className="bannerGroup">
          <div className="mainBanner">
            <div
              id="menu"
              style={{ display: menuOpened ? "flex" : "none" }}
              className="menuContainer"
            >
              <ul className="navList">
                <li className="navItem">
                  <a
                    href="https://forms.office.com/r/0bTJVLag8z"
                    className="navLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Formulário de cadastro
                  </a>
                </li>
                <li className="navItem">
                  <a
                    href="https://forms.office.com/r/SCVata6vky"
                    className="navLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Formulário de reserva
                  </a>
                </li>
              </ul>
              <div>
                <img
                  src="/src/assets/images/close.svg"
                  alt="botão de fechar"
                  id="closeMenuBtn"
                  onClick={() => setMenuOpened(false)}
                />
              </div>
            </div>

            <div className="backgroundGranular"></div>
            <div className="backgroundBanner"></div>

            <div className="divImg">
              <img src="/src/assets/images/logo.svg" alt="Logo" />
              <button id="menu-button" onClick={() => setMenuOpened(!menuOpened)}>
                <img
                  src="/src/assets/images/menu.svg"
                  alt="menu hamburguer"
                  className="menuBurguer"
                />
              </button>
            </div>

            <div className="bannerTexts">
              <h1 className="title">JÁ PENSOU EM RESERVAR UM INSIGHT?</h1>
              <p className="subtitle">
                É muito fácil! É só apontar a câmera do celular pro QR Code,
                preencher o formulário e pronto! <br />
                Logo, o insight vai chegar até você!
              </p>
            </div>

            <div className="invisibleBox">&nbsp;</div>
          </div>

          <div className="divFrame">
            <img
              src="/src/assets/images/frame.png"
              alt="enfeite"
              className="frameImg"
            />
          </div>

          <div className="divQRcode">
            <h1>ACESSE O FORMULÁRIO E ESCOLHA SEU LIVRO</h1>
            <a
              className="QRbutton"
              href="https://forms.office.com/r/SCVata6vky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#0062FF"
                stroke="#0062FF"
                strokeWidth="2"
              >
                <path d="M280-280h84l240-238-86-86-238 238v86Zm352-266 42-44q6-6 6-14t-6-14l-56-56q-6-6-14-6t-14 6l-44 42 86 86ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
