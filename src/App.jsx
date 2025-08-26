import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/Bookcard/Bookcard";
import Pagination from "./components/Pagination/Pagination";
import BookModal from "./components/BookModal/BookModal";
import api from "../src/services/api";
import BookModalAdd from "./components/BookModal/BookModalAdd";

export default function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalBook, setModalBook] = useState(null);
  const booksPerPage = 9;

  useEffect(() => {
    api
      .get("/books")
      .then((res) => {
        console.log("Resposta da API:", res.data);
        setAllBooks(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar livros:", err);
      });
  }, []);

  useEffect(() => {
    if (modalBook) {
      console.log("modalBook atualizado:", modalBook);
    }
  }, [modalBook]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const totalPages = Math.ceil(allBooks.length / booksPerPage);

  const currentBooks = allBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const openModal = (book) => {
    console.log("Abrindo modal com livro:", book);
    setModalBook(book);
    console.log(modalBook);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalBook(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container">
      <Header />

      <main>
        <section className="booksCards">
          <div className="cardForms">
            <button className="addLivro" onClick={openAddModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#0062FF"
                stroke="#0062FF"
                strokeWidth="2"
              >
                <path
                  d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 
        200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 
        31.5-156T197-763q54-54 127-85.5T480-880q83 
        0 156 31.5T763-763q54 54 85.5 
        127T880-480q0 83-31.5 156T763-197q-54 
        54-127 85.5T480-80Zm0-80q134 0 
        227-93t93-227q0-134-93-227t-227-93q-134 
        0-227 93t-93 227q0 134 93 227t227 
        93Zm0-320Z"
                />
              </svg>
            </button>
            <h3 className="cardFont">Disponibilize também seu livro</h3>
          </div>

          {isAddModalOpen && (
            <BookModalAdd
              onClose={closeAddModal}
              onSuccess={async () => {
                const res = await api.get("/books");
                setAllBooks(res.data);
                closeAddModal();
              }}
            />
          )}

          {currentBooks.map((book, index) => (
            <BookCard key={index} book={book} onClick={() => openModal(book)} />
          ))}
        </section>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
      </main>

      {modalBook && <BookModal book={modalBook} onClose={closeModal} />}

      <Footer />
    </div>
  );
}
