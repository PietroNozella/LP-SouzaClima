"use client";

const indicators = [
  {
    number: "120+",
    label: "Instala\u00e7\u00f5es Conclu\u00eddas",
  },
  {
    number: "180+",
    label: "Clientes Satisfeitos",
  },
  {
    number: "250+",
    label: "Ar Condicionado Instalado",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-[#173B69] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/12 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
        {indicators.map((indicator) => (
          <div key={indicator.label} className="flex flex-col items-center justify-center px-4 py-5 text-center sm:py-6">
            <p className="text-3xl font-bold leading-none md:text-4xl">{indicator.number}</p>
            <p className="mt-2 text-xs font-medium text-white/72 md:text-sm">{indicator.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
