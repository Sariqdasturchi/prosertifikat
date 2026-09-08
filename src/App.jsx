import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseLanding } from "./pages/CourseLanding";
import { WebinarLanding } from "./pages/WebinarLanding";
import { ModalForm } from "./components/ModalForm";

export default function App() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    type: "",
  });

  const handleOpenModal = (title, type) => {
    setModalConfig({
      isOpen: true,
      title: title || "Ro'yxatdan o'tish",
      type: type || "General Lead",
    });
  };

  const handleCloseModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CourseLanding
              onOpenModal={() =>
                handleOpenModal("Kursga Yozilish", "Pro Sertifikat Kursi")
              }
            />
          }
        />
        <Route
          path="/webinar"
          element={
            <WebinarLanding
              onOpenModal={() =>
                handleOpenModal("Bepul Darsga Qatnashish", "Webinar")
              }
            />
          }
        />
      </Routes>

      <ModalForm
        isOpen={modalConfig.isOpen}
        onClose={handleCloseModal}
        title={modalConfig.title}
        type={modalConfig.type}
      />
    </BrowserRouter>
  );
}