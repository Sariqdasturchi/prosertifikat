import React, { useState } from "react";
import { X, User, Phone, ArrowRight, Video, GraduationCap, CheckCircle, Send } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycby4FK4rytc4mmYnNjWkUFJDTNOoB__ubNLzthAnSEVMvVCXKmcDx4ZP4pTjEhgWw7n4/exec";
const TELEGRAM_CHANNEL_URL = "https://t.me/pro_sertifikat_kursi";

export const ModalForm = ({ isOpen, onClose, title, type }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
        titleText: "Jonli efirda qatnashish uchun ro'yxatdan o'ting",
        subtitle: "Efirga kirish va bepul o'quv materiallarini olish uchun ma'lumotlaringizni qoldiring",
        buttonText: "JONLI EFIRGA A'ZO BO'LISH",
        Icon: Video,
      }
    : {
        badge: "CHEKLANGAN JOYLAR",
        badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        borderColor: "border-amber-500/30",
        focusRing: "focus:ring-amber-500 focus:border-amber-500",
        buttonBg: "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950",
        shadow: "shadow-amber-500/20",
        titleText: title || "Kursga a'zo bo'ling",
        subtitle: "Milliy Sertifikatni 100% natija bilan qo'lga kiritish uchun joyingizni band qiling",
        buttonText: "RO'YXATDAN O'TISH",
        Icon: GraduationCap,
      };

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("+998")) {
      input = "+998 ";
    }

    const rawDigits = input.slice(4).replace(/\D/g, "");
    const limitedDigits = rawDigits.slice(0, 9);

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
    
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length !== 12) {
      setError("Telefon raqami noto'g'ri. +998 dan keyin 9 ta raqam bo'lishi shart.");
      return;
    }

    setLoading(true);
    setError("");

    // Dynamic Event ID va Event Name
    const eventId = "evt_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    const eventName = isWebinar ? "CompleteRegistration" : "Lead";

    // Frontend Browser Pixel Tracking
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, {}, { eventID: eventId });
    }

    try {
      const formData = new URLSearchParams();
      formData.append("name", name.trim());
      formData.append("phone", phone);
      formData.append("type", type || "Landing Lead");
      formData.append("date", new Date().toLocaleString("uz-UZ"));
      formData.append("eventId", eventId);
      formData.append("eventName", eventName);
      formData.append("sourceUrl", window.location.href);

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      // Muvaffaqiyatli yuborilgach, doimo success holatiga o'tkaziladi
      setIsSuccess(true);
    } catch (err) {
      console.error("Xatolik:", err);
      setIsSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName("");
    setPhone("+998 ");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className={`bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border ${config.borderColor} text-slate-100`}>
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition cursor-pointer border border-slate-700 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          isWebinar ? (
            /* WEBINAR UCHUN MUVAFFAQIYAT EKRANI */
            <div className="text-center py-4 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-1">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Ro'yxatdan o'tdingiz!
              </h3>
              
              <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-4 text-left space-y-2">
                <p className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Video className="w-4 h-4" /> Jonli efirda qatnashish uchun:
                </p>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Vebinar havolasi va bepul o'quv materiallari **Telegram kanalimizda** ulashiladi. Efirni o'tkazib yubormaslik uchun kanalga obuna bo'ling!
                </p>
              </div>

              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 hover:from-sky-400 hover:to-blue-400 text-white font-black py-4 rounded-xl shadow-xl shadow-sky-500/20 active:scale-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-5 h-5" />
                TELEGRAM KANALGA OBUNA BO'LISH
              </a>
            </div>
          ) : (
            /* KURS UCHUN MUVAFFAQIYAT EKRANI */
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Arizangiz qabul qilindi!
              </h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                Tashakkur! Menejerimiz tez orada ko'rsatilgan telefon raqamingiz orqali siz bilan bog'lanadi.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition border border-slate-700 uppercase tracking-wider text-xs"
              >
                Yopish
              </button>
            </div>
          )
        ) : (
          /* FORMA QISMI */
          <>
            <div className="text-center mb-5">
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-3 border ${config.badgeBg}`}>
                <config.Icon className="w-3.5 h-3.5" />
                {config.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                {config.titleText}
              </h3>
              <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">
                {config.subtitle}
              </p>
            </div>

            {!isWebinar && (
              <div className="mb-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-3.5 text-center space-y-2">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-[11px] font-black tracking-wider text-slate-400 uppercase">
                    Atigi:
                  </span>
                  <span className="text-3xl font-black text-amber-400 tracking-tight">
                    470.000
                  </span>
                  <span className="text-xs font-black text-slate-300 uppercase">
                    so'm
                  </span>
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/30 py-2 px-3 rounded-xl">
                  <p className="text-xs font-extrabold text-amber-200 leading-tight">
                    ⚡ Kuniga atigi{" "}
                    <span className="bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black text-[11px] inline-block mx-0.5">
                      11.000 so'm
                    </span>{" "}
                    evaziga Sertifikatni qo'lga kiriting!
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-1.5">
                  Ism va Familiyangiz
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Ism Familiya (ixtiyoriy)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
          </>
        )}
      </div>
    </div>
  );
};