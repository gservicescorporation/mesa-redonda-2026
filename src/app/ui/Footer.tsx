export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center gap-4 bg-accent/90 py-4 px-6 max-lg:px-4">
      <p className="text-sm text-white/80 max-lg:text-xs max-lg:text-center">
        Todos os direitos reservados à Global
        Services Corporation &copy; {new Date().getFullYear()}. Mesa Redonda com CEO's 2026.
      </p>
    </div>
  );
}
