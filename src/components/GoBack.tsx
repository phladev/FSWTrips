import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const GoBack = () => {
  return (
    <div>
      <Link href={"/"} className="flex flex-1 flex-row items-center gap-1">
        <FiArrowLeft size={20} className="text-primary" />
        <p className="text-primary text-sm lg:text-base">Voltar</p>
      </Link>
    </div>
  );
};

export default GoBack;
