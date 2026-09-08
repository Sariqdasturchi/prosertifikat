import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, CheckCircle, ArrowRight, Award, ShieldCheck, Flame, X, Sparkles, Target, BookOpen } from 'lucide-react';

const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1XBCZVZ_TVWsNqPX-jDzo8FZJXOXV_4pdPxKlJbII7DU/edit?gid=0#gid=0";
const TELEGRAM_CHANNEL_URL = "https://t.me/devreadyuz"; // Telegram kanal havolasi

// Lead Form Modal Component
const ModalForm = ({ isOpen, onClose, title, type }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, type })
      });
      // Redirect to Telegram
      window.location.href = TELEGRAM_CHANNEL_URL;
    } catch (err) {
      alert("Xatolik yuz berdi, qaytadan urinib ko'ring.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-red-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            Cheklangan Jo'ylar
          </span>
          <h3 className="text-2xl font-extrabold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Ma'lumotlaringizni qoldiring va bepul resurslarga ega bo'ling</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ismingiz</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                placeholder="Ismingizni kiriting"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Telefon Raqamingiz</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                required
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-red-500/30 active:scale-95 transition-all text-lg flex items-center justify-center gap-2"
          >
            {loading ? "Yuborilmoqda..." : "RO'YXATDAN O'TISH"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// 1. KURS LANDING PAGE (prosertifikat.uz)
const CourseLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-900 pb-12">
      {/* Dynamic Header Badge */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white py-2 px-4 text-center font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 animate-bounce" />
        <span>Boshlanish sanasi: 17.09.2026</span> 
      </div>

      <div className="max-w-md mx-auto px-4 pt-6 space-y-6">
        {/* Main Guarantee Banner */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-red-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
            100% Kafolat
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight uppercase tracking-tight mt-2">
            <span className="text-red-600">40 kun ichida</span> imtihonga tayyorlanib sertifikatni qo'lga kiriting 
          </h1>
          <p className="text-xs font-bold text-slate-500 mt-2 bg-slate-100 py-2 px-3 rounded-lg border border-slate-200">
            Aks holda to'lovingiz 100% qaytariladi! 
          </p>

          {/* Expert Photo Placeholder / Frame */}
          <div className="relative my-6">
            <div className="w-48 h-56 mx-auto rounded-2xl bg-gradient-to-t from-red-500 to-rose-300 p-1 shadow-lg">
              <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden relative flex items-end justify-center">
                {/* O'zingizning rasm URL-ingizni img src-ga qo'yasiz */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="Ustozlar" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-md flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-black text-gray-800">2 Ta Kuchli Mutaxassis</span> 
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/40 text-lg tracking-wider active:scale-95 transition-all animate-pulse"
          >
            KURSGA YOZILISH
          </button>
        </div>

        {/* Teachers Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-4">
          <h2 className="text-xl font-black text-center text-gray-900 border-b pb-3">
            IKKI KUCHLI MUTAXASSISDAN BILIM OLASIZ 
          </h2>

          {/* Teacher 1 */}
          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 space-y-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600" />
              <h3 className="font-extrabold text-gray-900 text-lg">Shohrux Tursunmurodov</h3> 
            </div>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              14 yillik tajribaga ega ona tili va adabiyot bo’yicha mutaxassis. Bugungi kungacha 15,000 ga yaqin talaba va ustozlarning sertifikat olishiga yordam bergan. GFA o'quv markazi asoschisi. 
            </p>
          </div>

          {/* Teacher 2 */}
          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 space-y-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600" />
              <h3 className="font-extrabold text-gray-900 text-lg">Rasulberdi Nazarov</h3> 
            </div>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              8 yillik tajribaga ega filolog o’qituvchi. 10,000 dan ortiq o'quvchilarni o'qitgan mutaxassis. Hozirda BMBA da Esse bo'yicha expert. 
            </p>
          </div>
        </div>

        {/* Course Features */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-3">
          <h2 className="text-xl font-black text-center text-gray-900 mb-4">
            KURSDA NIMALAR O'RGATILADI? 
          </h2>
          {[
            "40 kun ichida imtihon doirasidagi barcha nazariy va amaliy mavzular",
            "Milliya sertifikatda eng yuqori ball olish strategiyalari",
            "BMBA standartlariga mos 70+ balli esse yozish ko'nikmasi",
            "Individual xatolar ustida ishlash va haftalik testlar",
            "Psixologik tayyorgarlik va vaqtni to'g'ri taqsimlash sirlari"
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-gray-800">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/40 text-lg tracking-wider active:scale-95 transition-all"
        >
          KURSGA YOZILISH
        </button>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Kursga Yozilish"
        type="Kurs"
      />
    </div>
  );
};

// 2. WEBINAR LANDING PAGE (prosertifikat.uz/webinar)
const WebinarLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-900 pb-12">
      {/* Header Badge */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center font-black text-xs uppercase tracking-widest border-b border-red-600 flex items-center justify-center gap-2">
        <Calendar className="w-4 h-4 text-red-500" />
        <span>14-15 Sentabr | Soat 20:00</span> 
      </div>

      <div className="max-w-md mx-auto px-4 pt-6 space-y-6">
        {/* Main Hero Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-red-100 text-center relative overflow-hidden">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            2 Kunlik Bepul Dars 
          </span>

          <h1 className="text-2xl font-black text-gray-900 leading-tight uppercase">
            ONA TILI MILLIY SERTIFIKATDAN <span className="text-red-600">70+ VA UNDAN YUQORI</span> BALL OLISH UCHUN KERAKLI STRATEGIYALARNI MUTLAQO BEPULGA O'RGANING.
          </h1>

          {/* Teacher Image */}
          <div className="relative my-6">
            <div className="w-48 h-56 mx-auto rounded-2xl bg-gradient-to-t from-red-600 to-amber-400 p-1 shadow-xl">
              <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" 
                  alt="Ustoz" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/40 text-lg tracking-wider active:scale-95 transition-all animate-pulse"
          >
            BEPUL QATNASHISH 
          </button>
          <p className="text-xs font-bold text-red-500 mt-2">Faqat 2 kun Bepul</p>
        </div>

        {/* Benefits Section (Inspiration from screenshot) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-center text-gray-900 uppercase tracking-tight">
            JONLI DARSDA SIZ:
          </h2>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-2xl text-red-600 shrink-0">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900">Esse Yozish</h3>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                Ko'nikmalaringizni bir necha barobarga oshirishni va 70+ balli esse yozishni o'rganasiz. 
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-2xl text-red-600 shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900">Qisqa va Oson Yo'llar</h3>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                Qanday qilib testlarni oson va to'g'ri ishlash sirlarini va milliy sertifikatga erishishni o'rganasiz. 
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-2xl text-red-600 shrink-0">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900">A va A+ Natija</h3>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                Qisqa muddatda A va A+ natija olish yo'llarini Bepul bilib olasiz.
              </p>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-4">
          <h2 className="text-lg font-black text-center text-gray-900 border-b pb-3">
            IKKI KUCHLI MUTAXASSISDAN ENG KUCHLI BILIMLARNI OLING 
          </h2>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="font-extrabold text-sm text-gray-900 block">Shohrux Tursunmurodov</span> 
              <p className="text-gray-600 mt-1">14 yillik tajribaga ega mutaxassis. GFA o'quv markazi asoschisi. </p>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="font-extrabold text-sm text-gray-900 block">Rasulberdi Nazarov</span> 
              <p className="text-gray-600 mt-1">8 yillik tajribaga ega filolog o'qituvchi. BMBA da Esse bo'yicha expert. </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/40 text-lg tracking-wider active:scale-95 transition-all"
        >
          BEPUL QATNASHISH 
        </button>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bepul Darsga Qatnashish"
        type="Webinar"
      />
    </div>
  );
};

// Router Routing Configuration
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseLanding />} />
        <Route path="/webinar" element={<WebinarLanding />} />
      </Routes>
    </BrowserRouter>
  );
}