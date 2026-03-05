export default function Footer() {
  return (
    <div className="w-full h-24 flex items-center justify-center gap-4 bg-accent/90">
      <p className="text-sm text-white/80">
        &copy; {new Date().getFullYear()} Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel da Banca e de Outros
        Agentes do Sistema Financeiro na Mobilização de Financiamento. Todos os
        direitos reservados.
      </p>
    </div>
  );
}