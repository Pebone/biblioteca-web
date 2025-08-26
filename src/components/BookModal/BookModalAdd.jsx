import { useState } from "react";
import api from "../../services/api";

export default function BookModalAdd({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    responsible: "",
    contact: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    if (file) {
      formData.append("image", file);
    }

    try {
      const res = await api.post("/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onSuccess(res.data);
      onClose();
    } catch (err) {
      console.error("Erro ao adicionar livro", err);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button onClick={onClose} className="closeBtn">
          X
        </button>
        <h2>Cadastrar Livro</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            value={form.author}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Ano"
            value={form.year}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="responsible"
            placeholder="Responsável"
            value={form.responsible}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contato"
            value={form.contact}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />

          <button type="submit" className="submitBtn">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
