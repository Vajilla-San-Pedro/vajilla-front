import React from "react";
import bannerImage from "../../public/assets/banner.jpg";
import bannerImage2 from "../../public/assets/cubiertos.jpg";
import bannerImage3 from "../../public/assets/bolws.jpg";
import bannerImage4 from "../../public/assets/banner2.jpg";

const Header = () => {
  return (
    <>
      <div className="hidden relative h-full lg:flex justify-center items-center p-24">
        <div className="z-20 text-white flex flex-col items-center justify-center">
          <div className="uppercase text-[12px] font-tertiary tracking-[6px] mb-5">
            Zona oeste- Isidro casanova
          </div>
          <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] leading-tight mb-6">
            Alquiler de vajilla y manteleria
          </h1>
          <a
            href="https://api.whatsapp.com/send?l=es&amp;phone=5491128922795&amp;text=Lo contacto a traves del sitio web. Tengo interés en sus servicios de alquiler de vajilla."
            target="_blank"
            className="btn btn-lg btn-primary mx-auto"
          >
            Contactar
          </a>
        </div>
        <div className="absolute top-0 w-full h-full flex">
          <img
            src={bannerImage}
            alt="Banner"
            className="max-w-full max-h-full object-cover"
          />
          <img
            src={bannerImage2}
            alt="Banner"
            className="max-w-full  flex-1  max-h-full object-cover"
          />
          <img
            src={bannerImage3}
            alt="Banner"
            className=" max-w-full  max-h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-black/70"></div>
      </div>

      <div className="lg:hidden relative h-full flex justify-center items-center p-16">
        <div className="z-20 text-white text-center">
          <div className="uppercase text-[10px] font-tertiary tracking-[6px] mb-5">
            Zona oeste- Isidro casanova
          </div>
          <h1 className="text-[19px] font-primary uppercase tracking-[2px] max-w-[260px] leading-tight mb-6">
            Alquiler de vajilla y manteleria
          </h1>
          <a
            href="https://api.whatsapp.com/send?l=es&amp;phone=5491128922795&amp;text=Lo contacto a traves del sitio web. Tengo interés en sus servicios de alquiler de vajilla."
            target="_blank"
            className="btn btn-sm bg-zinc-500 mx-auto"
          >
            Contactar
          </a>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            src={bannerImage4}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-black/70"></div>
      </div>
    </>
  );
};

export default Header;
