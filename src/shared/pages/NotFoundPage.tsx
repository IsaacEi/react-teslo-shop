import { useNavigate } from 'react-router';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="max-w-4xl w-full bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 flex flex-col items-start justify-center gap-6">
          <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">Página no encontrada</h2>
          <p className="text-gray-500">La página que buscas no existe o fue movida. Revisa la URL o vuelve al inicio.</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            {/* <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
            >
              Ir al inicio
            </a> */}

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition"
            >
              Volver
            </button>
          </div>

          <small className="text-xs text-gray-400 mt-4">Si crees que esto es un error del sistema, contacta con soporte.</small>
        </div>

        <div className="hidden md:flex items-center justify-center bg-linear-to-tr from-indigo-50 to-white p-6">
          <svg
            width="320"
            height="240"
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect x="10" y="10" width="300" height="220" rx="12" fill="#EEF2FF" />
            <path d="M60 160 L120 80 L180 140 L240 60" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="200" cy="90" r="24" fill="#C7D2FE" />
            <g opacity="0.9">
              <path d="M80 120 H240" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </section>
    </main>
  )
}
