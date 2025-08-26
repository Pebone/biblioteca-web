export default function Footer() {
  return (
    <footer className="footer">
      <section className="footerContainer">
        <div className="footerMain">
          <div className="backgroundGranular"></div>
          <div className="backgroundBanner"></div>

          <div className="footerImg">
            <img src="/src/assets/images/logo.svg" alt="Logo" />
          </div>

          <div className="footerLinks">
            <a
              href="https://forms.office.com/r/0bTJVLag8z"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formulário de cadastro
            </a>

            <a
              href="https://forms.office.com/r/SCVata6vky"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formulário de reserva
            </a>
          </div>
        </div>

        <div>
          <small>designed by Marketing 💚💙</small>
        </div>
      </section>
    </footer>
  );
}
