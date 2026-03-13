export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center gap-4 bg-accent/90 py-4 px-6 max-lg:px-4">
      <p className="text-sm text-white/80 max-lg:text-xs max-lg:text-center">
        &copy; {new Date().getFullYear()} Mesa Redonda com CEO's 2026 - 5ª Edição sobre o Papel da Banca e de Outros
        Agentes do Sistema Financeiro na Mobilização de Financiamento. Todos os
        direitos reservados.
      </p>
    </div>
  );
}