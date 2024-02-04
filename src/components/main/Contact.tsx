import React from "react";

const Contact = () => {
  return (
    <div className="text-white z-[50] flex flex-col justify-center items-center text-center mb-24">
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#03C303] to-slate-50 mt-20 mb-10">
        Converse comigo
      </h2>{" "}
      <p className="text-lg">
        Estou sempre aberto a conhecer novas pessoas e compartilhar ideias!!
      </p>
      <p className="mt-4 text-lg">Me mande uma mensagem:</p>
      <div className="flex flex-col sm:flex-row mt-12">
        <a
          className="p-3 sm:mr-6 mt-6 min-w-32 border rounded-sm bg-[#3af525] text-slate-950 font-medium border-transparent flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
          href="https://api.whatsapp.com/send?phone=62994395965"
          target="_blank"
          rel="noreferrer"
        >
          Diga olá
        </a>
        <a
          className="p-3 sm:ml-6 mt-6 min-w-36 border rounded-sm text-white flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
          href="mailto:matheustae@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Mande um e-mail
        </a>
      </div>
    </div>
  );
};

export default Contact;
