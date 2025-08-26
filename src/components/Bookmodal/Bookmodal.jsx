export default function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div
      className="modal"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target.classList.contains("modal")) onClose();
      }}
    >
      <div className="content">
        <div id="modalContent">
          <img src={book.img} alt={book.nome} style={{ maxWidth: "100%" }} />
          <div className="modalTexts">
            <h1>{book.nome}</h1>
            <p>{book.descricao}</p>
            <p>
              <strong>Responsável:</strong> {book.responsavel}
            </p>
            <p>
              <strong>Contato:</strong> {book.contato}
            </p>
            <a
              className="modalButton"
              href="https://forms.office.com/r/SCVata6vky"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Já
            </a>
          </div>
        </div>
        <button className="closeModal" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            width="32px"
            viewBox="0 -960 960 960"
            fill="#0062FF"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
