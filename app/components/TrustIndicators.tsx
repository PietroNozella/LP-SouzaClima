"use client";

const indicators = [
  {
    number: "2.992",
    label: "Manuten\u00e7\u00f5es Conclu\u00eddas",
  },
  {
    number: "4.992",
    label: "Equipamentos Instalados",
  },
  {
    number: "7.984",
    label: "Clientes Satisfeitos",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-[#173B69] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/12 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
        {indicators.map((indicator) => (
          <div key={indicator.label} className="flex flex-col items-center justify-center px-4 py-5 text-center sm:py-6">
            <p className="text-3xl font-semibold leading-none md:text-4xl">{indicator.number}</p>
            <p className="mt-2 text-xs font-medium text-white/78 md:text-sm">{indicator.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
