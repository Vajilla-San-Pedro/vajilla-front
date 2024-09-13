import React from "react";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref)  => {
  return (
    <>
      <footer ref = {ref} className="bg-white border-t border-gray-100 sm:flex sm:items-center sm:justify-between mt-20 p-4 sm:p-6 xl:p-8 antialiased">
        <p className="mb-4 text-sm text-center text-gray-500 sm:mb-0">
        Alquiler de vajilla y manteleria Zona Oeste
        </p>

        <div className="flex justify-center items-center space-x-1">
    <span className="text-sm text-gray-500">Atención personalizada</span>
          <a
            href="https://api.whatsapp.com/send?l=es&amp;phone=5491128922795&amp;text=Lo contacto a traves del sitio web. Tengo interés en sus servicios de alquiler de vajilla."
            target="_blank"
            data-tooltip-target="tooltip-whatsapp"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <svg
              className="w-7 h-7 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 26 26"
            >
              <path
                fill-rule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clip-rule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Whatsapp</span>
          </a>
        </div>
      </footer>
    </>
  );
});

export default Footer;
