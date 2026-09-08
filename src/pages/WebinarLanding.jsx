import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Target, 
  Flame, 
  Check, 
  AlertCircle 
} from 'lucide-react';

import Teachers from "../assets/teacher.png";

export const WebinarLanding = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-black pb-16">
      
      {/* Dynamic Header Badge */}
      <div className="sticky top-0 z-40  bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 py-2.5 px-4 text-center font-extrabold text-xs sm:text-sm tracking-wide shadow-lg flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <Calendar className="w-4 h-4 animate-pulse" />
          <span>14-15 Sentabr</span>
        </div>
        <span className="opacity-40">|</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <Clock className="w-4 h-4" />
          <span>Vaqt: 20:00</span> 
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6 space-y-8">
        
        {/* HERO SECTION */}
        <section className="relative  bg-linear-to-b from-neutral-900 via-neutral-900 to-neutral-900/90 rounded-3xl p-6 sm:p-7 shadow-2xl border border-amber-500/20 text-center overflow-hidden">
          {/* Background Radial Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-400">2 Kunlik Bepul Onlayn Vebinar</span> 
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-white uppercase">
            Milliy Sertifikatga <span className="text-transparent bg-clip-text  bg-linear-to-r from-amber-300 via-yellow-400 to-amber-500">yuqori natija</span> olish uchun qanday tayyorlanish kerak? 
          </h1>
          <p className="text-xs font-semibold text-neutral-300 mt-3 bg-neutral-800/80 border border-neutral-700/60 py-2.5 px-3.5 rounded-xl backdrop-blur-sm">
            14-15 sentabr kunlari bepul onlayn vebinarda bilib oling. 
          </p>

          {/* TEACHERS PHOTO DISPLAY */}
          <div className="relative my-6 pt-2">
            <div className="relative w-full h-80 mx-auto rounded-3xl  bg-linear-to-b from-amber-500/15 via-neutral-900 to-neutral-950 p-1 border border-amber-500/30 shadow-2xl overflow-hidden">
              {/* Pattern Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]" />

              {/* Image */}
              <div className="absolute inset-x-0 bottom-0 top-2 flex items-end justify-center">
                <img
                  src={Teachers}
                  lazyload="true"
                  alt="Shohrux Tursunmurodov va Rasulberdi Nazarov"
                  className="w-full h-[120%] object-cover object-top scale-125 translate-y-6 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-12  bg-linear-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-neutral-900/95 border border-amber-500/50 px-4 py-1.5 rounded-full shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-black text-amber-200 tracking-wide uppercase">
                Ikki kuchli mutaxassisdan bilim olasiz
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="w-full mt-2  bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-black py-4 rounded-2xl shadow-lg shadow-amber-500/20 text-base tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase"
          >
            <span>VEBINARGA BEPUL YOZILISH</span> 
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* TEACHERS BIO SECTION */}
        <section className="bg-neutral-900 rounded-3xl p-6 shadow-xl border border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-3 text-center">
            <h2 className="text-lg font-black uppercase text-amber-400 tracking-tight">
              Vebinar Spikerlari 
            </h2>
          </div>

          {/* Teacher 1 */}
          <div className="bg-neutral-800/60 p-4.5 rounded-2xl border border-amber-500/15 space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-base">Shohrux Tursunmurodov</h3> 
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              14 yillik tajribaga ega ona tili va adabiyot bo'yicha mutaxassis hamda testolog. Shu kungacha 15,000 dan ortiq o'quvchi va ustozlarga sertifikat olishlariga yordam bergan. 
            </p>
          </div>

          {/* Teacher 2 */}
          <div className="bg-neutral-800/60 p-4.5 rounded-2xl border border-amber-500/15 space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-base">Rasulberdi Nazarov</h3> 
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              Esse bo'yicha 8 yillik kuchli mutaxassis. Bugungi kungacha 10,000 dan ortiq o'quvchiga dars o'tib keladi. Hozirda BMBA da Esse bo'yicha mutaxassis. 
            </p>
          </div>
        </section>

        {/* WEBINAR CONTENT / BENEFITS */}
        <section className="bg-neutral-900 rounded-3xl p-6 shadow-xl border border-neutral-800 space-y-4">
          <div className="text-center space-y-1 border-b border-neutral-800 pb-3">
            <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase">DARS DASTURI</span>
            <h2 className="text-lg font-black text-white uppercase tracking-tight">
              Vebinarda nimalarni o'rganasiz? 
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-neutral-800/50 p-4 rounded-2xl border border-amber-500/20">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Imtihonga to'g'ri tayyorlanish</h3> 
                <p className="text-xs text-neutral-300 mt-0.5">Vaqtni to'g mezonlar asosida taqsimlash va eng muhim mavzularga urg'u berish sirlari.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-800/50 p-4 rounded-2xl border border-amber-500/20">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Rash modelidan yuqori ball olish</h3> 
                <p className="text-xs text-neutral-300 mt-0.5">Murakkab testlarni oson yechish va baholash tizimidan unumli foydalanish.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-800/50 p-4 rounded-2xl border border-amber-500/20">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">70+ balli esse yozish ko'nikmasi</h3> 
                <p className="text-xs text-neutral-300 mt-0.5">BMBA standartlariga mos, maksimal ball beradigan esse tuzilishi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className="bg-neutral-900 rounded-3xl p-6 shadow-xl border border-neutral-800 space-y-4">
          <h2 className="text-lg font-black text-center text-white uppercase tracking-tight border-b border-neutral-800 pb-3">
            Ushbu vebinar kimlar uchun? 
          </h2>

          <div className="space-y-3">
            <div className="bg-neutral-800/50 p-4 rounded-2xl border border-amber-500/20 flex gap-3.5 items-start">
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">O'quvchilar uchun</h3> 
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Milliy Sertifikat orqali majburiy fanlardan to'liq ozod bo'lmoqchi bo'lganlar. 
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 p-4 rounded-2xl border border-amber-500/20 flex gap-3.5 items-start">
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">O'qituvchilar uchun <span className="text-[11px] font-normal text-neutral-400">(filolog, boshlang'ich sinf)</span></h3> 
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Sertifikatga ega bo'lib, belgilangan <span className="text-amber-400 font-bold">50% maosh ustamasiga</span> ega bo'lmoqchi bo'lganlar. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* URGENCY / NEGA AYNAN HOZIR */}
        <section className=" bg-linear-to-b from-amber-500/15 via-neutral-900 to-neutral-900 rounded-3xl p-6 shadow-xl border border-amber-500/30 text-center space-y-3 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-xs font-extrabold uppercase">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Nega aynan hozir qatnashish kerak?</span> 
          </div>

          <p className="text-xs sm:text-sm font-semibold text-neutral-200 leading-relaxed pt-1">
            Imtihon <span className="text-amber-400 font-black">24-26 oktyabrda</span> bo'lib o'tadi — tayyorgarlikni qanchalik erta boshlasangiz, natijangiz shunchalik yuqori bo'ladi. 
          </p>

          <button
            onClick={onOpenModal}
            className="w-full mt-2  bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-black py-4 rounded-2xl shadow-xl shadow-amber-500/20 text-base tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase"
          >
            <span>WEBINARDA QATNASHISH</span> 
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-amber-500/30 text-center space-y-4">
          <div className="space-y-1.5">
            <h2 className="text-xl font-black text-white uppercase tracking-tight">
              Vebinarga hoziroq yoziling 
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed">
              14-15 sentabr kunlari bo'lib o'tadigan bepul vebinarda qatnashib, Milliy Sertifikatga tayyorgarlikning to'g'ri strategiyasini bilib oling. 
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="w-full  bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-black py-4 rounded-2xl shadow-xl shadow-amber-500/20 text-base tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase"
          >
            <span>VEBINARGA YOZILISH</span> 
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

      </div>
    </div>
  );
};