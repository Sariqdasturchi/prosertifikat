import {
  Calendar,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GraduationCap,
  UserCheck,
  Clock,
  Percent,
  TrendingUp,
  BookOpenCheck,
} from "lucide-react";

import Teachers from "../assets/teacher.png";

export const CourseLanding = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased pb-16 selection:bg-amber-500 selection:text-slate-950">
      {/* Dynamic Header Badge - Premium Gold Gradient */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-amber-500/20 py-2.5 px-4 text-center">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs font-bold tracking-wide text-amber-300">
          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
          <span>"PRO SERTIFIKAT" — Kurs boshlanishi: 17-sentabr</span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-5 space-y-6">
        {/* HERO SECTION */}
        <section className="relative bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-6 border border-amber-500/30 shadow-2xl shadow-amber-500/5 overflow-hidden text-center">
          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            100% Natija Kafolati
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase tracking-tight">
            40 kun ichida imtihonga tayyorlanib{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500">
              sertifikatni qo‘lga kiriting
            </span>
          </h1>

          <p className="text-xs font-medium text-slate-300 mt-3 bg-slate-800/80 backdrop-blur border border-amber-500/20 py-2.5 px-3.5 rounded-xl">
            Aks holda to‘lovingiz{" "}
            <strong className="text-amber-400 font-extrabold">
              100% qaytariladi!
            </strong>
          </p>

          {/* TEACHERS PHOTO CONTAINER */}
          <div className="relative my-6 pt-2">
            {/* Card Container */}
            <div className="relative w-full h-80 mx-auto rounded-3xl bg-linear-to-b from-amber-500/15 via-slate-900 to-slate-950 p-1 border border-amber-500/30 shadow-2xl overflow-hidden">
              {/* Geometric Grid Background with Soft Light Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]" />

              {/* Image Container */}
              <div className="absolute inset-x-0 bottom-0 top-2 flex items-end justify-center">
                <img
                  src={Teachers}
                  lazyload="true"
                  alt="Shohrux Tursunmurodov va Rasulberdi Nazarov"
                  className="w-full h-[120%] object-cover object-top scale-125 translate-y-6 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Subtle Gradient Blend at Bottom Edge */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 border border-amber-500/50 px-4 py-1.5 rounded-full shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-black text-amber-200 tracking-wide uppercase">
                Ikki kuchli mutaxassisdan bilim olasiz
              </span>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="w-full mt-2 bg-linear-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black py-4 rounded-2xl shadow-lg shadow-amber-500/20 text-base tracking-wide uppercase active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Kursga yozilish
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* TEACHERS DETAILED INFO */}
        <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="text-center border-b border-slate-800 pb-3">
            <h2 className="text-lg font-black text-white uppercase tracking-wide">
              Mutaxassislar bilan tanishing
            </h2>
          </div>

          {/* Teacher 1 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-amber-500/10 space-y-1.5">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-extrabold text-amber-300 text-base">
                Shohrux Tursunmurodov
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              14 yillik tajribaga ega ona tili va adabiyot bo‘yicha mutaxassis.
              Bugungi kungacha 15 000 ga yaqin talaba va ustozlarning sertifikat
              olishiga yordam bergan. GFA o‘quv markazi asoschisi.
            </p>
          </div>

          {/* Teacher 2 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-amber-500/10 space-y-1.5">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-extrabold text-amber-300 text-base">
                Rasulberdi Nazarov
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              8 yillik tajribaga ega filolog o‘qituvchi. 10 000 dan ortiq
              o‘quvchilarni o‘qitgan mutaxassis. Hozirda BMBA da Esse bo‘yicha
              ekspert.
            </p>
          </div>
        </section>

        {/* COURSE PROGRAM */}
        <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              KURS DASTURI
            </span>
            <h2 className="text-xl font-black text-white mt-2">
              40 kun ichida nimalarni o'rganasiz?
            </h2>
          </div>

          <div className="space-y-2.5">
            {[
              "Milliy Sertifikatda chiqadigan barcha 44 ta mavzu bo'yicha bosqichma-bosqich darslar",
              "Testlarni oson va to’g’ri yechish texnikasi",
              '"PEEL" metodi asosida yuqori ballik esse yozish',
              '"Protokol" tizimi orqali doimiy nazorat va progress kuzatuvi',
              "Har bir mavzu bo'yicha amaliy mashqlar va tekshiruv",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-200 leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4">
          <h2 className="text-lg font-black text-center text-white uppercase tracking-wide">
            Bu kurs kimlar uchun mo'ljallangan?
          </h2>

          <div className="space-y-3">
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-amber-500/10 flex items-start gap-3">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0 mt-0.5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-amber-300">
                  O'quvchilar uchun
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Milliy Sertifikatni qo'lga kiritsangiz, majburiy fanlardan
                  to'liq ozod bo'lasiz.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-2xl border border-amber-500/10 flex items-start gap-3">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 shrink-0 mt-0.5">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-amber-300">
                  O'qituvchilar uchun
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  (Filolog va boshlang'ich sinf) Sertifikatga ega bo'lsangiz,
                  belgilangan 50% lik maosh ustamasiga ega bo'lasiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE & PRICING CARD */}
        <section className="bg-linear-to-br from-amber-500/10 via-slate-900 to-slate-900 rounded-3xl p-6 border border-amber-500/30 text-center space-y-4 relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-lg font-black text-amber-400 uppercase tracking-wide">
              100% KAFOLAT
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              "PRO SERTIFIKAT" kursida qatnashib, ustozlar belgilab bergan
              barcha vazifalarni to'liq bajargan o’quvchilarga kerakli
              sertifikat natijasini qo'lga kiritish{" "}
              <strong>KAFOLATLANADI</strong>. Aks holda kurs uchun to'lovingiz
              100% qaytarib beriladi.
            </p>
          </div>

          {/* PRICING BLOCK */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3.5">
            {/* Chegirma va Tejamkorlik haqida Aniq Banner */}
            <div className="flex items-center justify-between bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400">
                  Asl narxi:
                </span>
                <span className="text-sm font-extrabold text-slate-400 line-through decoration-red-500 decoration-2">
                  800.000 so'm
                </span>
              </div>
              <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-black rounded-lg uppercase tracking-wider animate-pulse">
                330.000 so'm TEJAYSISZ!
              </span>
            </div>

            {/* Asosiy Chegirmali Narx */}
            <div className="flex items-baseline justify-center gap-1.5 py-1">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Atigi:
              </span>
              <span className="text-4xl font-black text-amber-400 tracking-tight drop-shadow-md">
                470.000
              </span>
              <span className="text-sm font-black text-slate-300 uppercase tracking-wide">
                so'm
              </span>
            </div>

            {/* Talabalar uchun Kunlik Narx Baneri */}
            <div className="bg-linear-to-r from-amber-500/20 via-yellow-500/25 to-amber-500/20 border border-amber-500/40 p-3.5 rounded-2xl shadow-lg shadow-amber-500/10 relative overflow-hidden">
              <p className="text-xs sm:text-sm font-black text-amber-200 leading-snug text-center">
                ⚡ Kuniga atigi{" "}
                <span className="text-slate-950 bg-amber-400 px-2 py-0.5 rounded-md font-black shadow-sm mx-0.5 inline-block">
                  11.000 so'm
                </span>{" "}
                evaziga Sertifikatni qo'lga kiriting!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="w-full bg-linear-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black py-4 rounded-2xl shadow-xl shadow-amber-500/20 text-base tracking-wide uppercase active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Ro’yxatdan o’tish
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </main>
    </div>
  );
};
