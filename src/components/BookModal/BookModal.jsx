import { useState } from "react";
import api from "../../services/api";

export default function BookModal({ book, onClose, onSuccess }) {
  if (!book) return null;

  const [form, setForm] = useState({
    borrower_name: "",
    requester_contact: "",
    additional_notes: "",
    return_date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loanPayload = {
      book_id: book.id,
      borrower_name: form.borrower_name,
      requester_contact: form.requester_contact,
      additional_notes: form.additional_notes,
      return_date: form.return_date,
    };

    console.log("Payload sendo enviado:", loanPayload);

    try {
      const res = await api.post("/loans", loanPayload);
      console.log("Empréstimo realizado com sucesso:", res.data);
      onClose();
    } catch (err) {
      console.error("Erro ao solicitar empréstimo:", err);
      alert("Erro ao solicitar empréstimo. Por favor, tente novamente.");
    }
  };

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

            <form onSubmit={handleSubmit} className="form">
              <h3>Solicitar Empréstimo</h3>
              <input
                type="text"
                name="book_id"
                placeholder="Id do livro"
                value={form.book_id}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="borrower_name"
                placeholder="Nome do Responsável"
                value={form.borrower_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="requester_contact"
                placeholder="Contato do Solicitante"
                value={form.requester_contact}
                onChange={handleChange}
                required
              />
              <textarea
                name="additional_notes"
                placeholder="Notas Adicionais"
                value={form.additional_notes}
                onChange={handleChange}
              />
              <input
                type="date"
                name="return_date"
                value={form.return_date}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submitBtn">
                Solicitar
              </button>
            </form>
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
