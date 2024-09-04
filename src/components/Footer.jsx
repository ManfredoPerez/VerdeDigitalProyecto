// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Sobre Nosotros</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Quiénes Somos</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Nuestra Misión</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Impacto Ambiental</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Recursos</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Guía de Reciclaje</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Términos de Servicio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Soporte</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-5 border-t border-gray-700 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 VerdeDigital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer