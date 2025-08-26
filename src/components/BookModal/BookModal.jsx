export default function BookModal({ book, onClose }) {
  if (!book) return null;
  console.log("Books for modal", book);
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
          <img
            src={book.image_url}
            alt={book.title}
            style={{ maxWidth: "100%" }}
          />
          <div className="modalTexts">
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>
              <strong>Responsável:</strong> {book.responsible}
            </p>
            <p>
              <strong>Contato:</strong> {book.contact}
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
