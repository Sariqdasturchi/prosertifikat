import React, { useState } from "react";
import { X, User, Phone, ArrowRight, Video, GraduationCap } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxuHywsi6W7nNGbP_HG6HxApWlz6wBop43CzoqeFcR3ucS0RUMcxrD0xvdge0ufR_2A/exec";
const TELEGRAM_CHANNEL_URL = "https://t.me/devreadyuz";

export const ModalForm = ({ isOpen, onClose, title, type }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const isWebinar = type?.toLowerCase().includes("webinar");

  const config = isWebinar
    ? {
        badge: "BEPUL WEBINAR",
        badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        borderColor: "border-emerald-500/30",
        focusRing: "focus:ring-emerald-500 focus:border-emerald-500",
        buttonBg: "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950",
        shadow: "shadow-emerald-500/20",
        subtitle: "Jonli efirga kirish va bepul materiallarni olish uchun ro'yxatdan o'ting",
        buttonText: "EFIRGA A'ZO BO'LISH",
        Icon: Video,
      }
    : {
        badge: "CHEKLANGAN JOYLAR",
        badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        borderColor: "border-amber-500/30",
        focusRing: "focus:ring-amber-500 focus:border-amber-500",
        buttonBg: "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950",
        shadow: "shadow-amber-500/20",
        subtitle: "100% Natija kafolatlangan kursda joyingizni band qiling",
        buttonText: "RO'YXATDAN O'TISH",
        Icon: GraduationCap,
      };

  // Telefon raqami kirishi va maskalash
  const handlePhoneChange = (e) => {
    let input = e.target.value;

    // +998 o'chib ketishining oldini olamiz
    if (!input.startsWith("+998")) {
      input = "+998 ";
    }

    // Faqat raqamlarni ajratib olamiz (+998 dan keyingilarini)
    const rawDigits = input.slice(4).replace(/\D/g, "");

    // 9 ta raqamdan ko'p kiritishga yo'l qo'ymaymiz
    const limitedDigits = rawDigits.slice(0, 9);

    // Maska shakllantirish: +998 XX XXX XX XX
    let formattedPhone = "+998 ";
    if (limitedDigits.length > 0) formattedPhone += limitedDigits.slice(0, 2);
    if (limitedDigits.length > 2) formattedPhone += " " + limitedDigits.slice(2, 5);
    if (limitedDigits.length > 5) formattedPhone += " " + limitedDigits.slice(5, 7);
    if (limitedDigits.length > 7) formattedPhone += " " + limitedDigits.slice(7, 9);

    setPhone(formattedPhone);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ism-familiya va raqam uzunligini tekshirish
    const digitsOnly = phone.replace(/\D/g, "");
    
    if (name.trim().split(" ").length < 2) {
      setError("Iltimos, ism va familiyangizni to'liq kiriting (masalan: Ali Valiyev)");
      return;
    }

    if (digitsOnly.length !== 12) { // 998 + 9 ta raqam = 12 ta
      setError("Telefon raqami noto'g'ri. +998 dan keyin 9 ta raqam bo'lishi shart.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new URLSearchParams();
      formData.append("name", name.trim());
      formData.append("phone", phone);
      formData.append("type", type || "Landing Lead");
      formData.append("date", new Date().toLocaleString("uz-UZ"));

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      window.location.href = TELEGRAM_CHANNEL_URL;
    } catch (err) {
      console.error("Xatolik:", err);
      window.location.href = TELEGRAM_CHANNEL_URL;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className={`bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border ${config.borderColor} text-slate-100`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition cursor-pointer border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-3 border ${config.badgeBg}`}>
            <config.Icon className="w-3.5 h-3.5" />
            {config.badge}
          </span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            {config.subtitle}
          </p>
        </div>

        {/* Validation Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-1.5">
              Ism va Familiyangiz *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                required
                placeholder="Ism Familiya"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full pl-11 pr-4 py-3 bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:ring-2 ${config.focusRing} focus:outline-none transition font-medium`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-1.5">
              Telefon Raqamingiz *
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full pl-11 pr-4 py-3 bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:ring-2 ${config.focusRing} focus:outline-none transition font-medium tracking-wider`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${config.buttonBg} font-black py-4 rounded-xl shadow-xl ${config.shadow} active:scale-95 transition-all text-base uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2`}
          >
            {loading ? "Yuborilmoqda..." : config.buttonText}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};