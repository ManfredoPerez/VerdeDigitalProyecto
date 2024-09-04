// import React from 'react'

import { ArrowRight, ChevronRight, LeafyGreen, Recycle, Users, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import Footer from "./Footer"

const Home = ({ setCurrentView }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  return (
    // <div className="space-y-12">
    //   <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
    //     <div className="container px-4 md:px-6">
    //       <div className="flex flex-col items-center space-y-4 text-center">
    //         <div className="space-y-2">
    //           <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
    //             Plataforma de Reciclaje Inteligente
    //           </h1>
    //           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
    //             Simplificando y automatizando el reciclaje para un futuro más sostenible.
    //           </p>
    //         </div>
    //         <div className="space-x-4">
    //           <Button onClick={() => setCurrentView('login')}>Iniciar Sesión</Button>
    //           <Button variant="outline" onClick={() => setCurrentView('login')}>Registrarse</Button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
    //     <div className="container px-4 md:px-6">
    //       <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Características Principales</h2>
    //       <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
    //         <Card>
    //           <CardHeader>
    //             <Zap className="h-8 w-8 mb-2 text-green-500" />
    //             <CardTitle>Tecnología de Vanguardia</CardTitle>
    //           </CardHeader>
    //           <CardContent>
    //             <p>Utilizamos las últimas innovaciones para hacer el reciclaje más eficiente y accesible que nunca.</p>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardHeader>
    //             <Users className="h-8 w-8 mb-2 text-green-500" />
    //             <CardTitle>Para Todos</CardTitle>
    //           </CardHeader>
    //           <CardContent>
    //             <p>Diseñado para ciudadanos y centros de reciclaje, nuestra plataforma es intuitiva y fácil de usar.</p>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardHeader>
    //             <ArrowRight className="h-8 w-8 mb-2 text-green-500" />
    //             <CardTitle>Automatización Inteligente</CardTitle>
    //           </CardHeader>
    //           <CardContent>
    //             <p>Simplificamos el proceso de reciclaje con herramientas automatizadas para una gestión eficaz de residuos.</p>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
    //     <div className="container px-4 md:px-6">
    //       <div className="flex flex-col items-center space-y-4 text-center">
    //         <div className="space-y-2">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //             Únete al Movimiento de Reciclaje Inteligente
    //           </h2>
    //           <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //             Juntos podemos crear un futuro más sostenible. Comienza a reciclar de manera inteligente hoy.
    //           </p>
    //         </div>
    //         <Button className="bg-white text-green-600 hover:bg-green-100" onClick={() => setCurrentView('login')}>
    //           Registrarse Ahora
    //         </Button>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    // <h1>HOla</h1>
    <div className="overflow-hidden bg-gray-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6 relative z-10 text-white text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Revoluciona tu forma <br /> de reciclar
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Únete a la plataforma de reciclaje inteligente que está cambiando el mundo, un residuo a la vez.
          </p>
          <Button
            onClick={() => setCurrentView('login')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full"
          >
            Comienza ahora <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-12 w-12 text-white opacity-75" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Características Principales
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { icon: Zap, title: "Tecnología Avanzada", description: "Utilizamos IA y blockchain para optimizar el proceso de reciclaje." },
              { icon: Users, title: "Propuesta Unica", description: "La capacidad de convertir el reciclaje en una actividad eficiente, transparente y económicamente." },
              { icon: Recycle, title: "Impacto Medible", description: "Visualiza tu contribución al medio ambiente en tiempo real." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50 border-none">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-400 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Únete al Movimiento Verde
            </h2>
            <p className="text-xl mb-12">
              Cada acción cuenta. Juntos, podemos crear un impacto significativo en nuestro planeta.
            </p>
            <Button
              onClick={() => setCurrentView('login')}
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-full"
            >
              Empieza a reciclar <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img
                src="https://segambiental.com.mx/wp-content/uploads/2023/10/Impacto-ambiental.png"
                alt="Impacto ambiental"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Nuestro Impacto
              </h2>
              <ul className="space-y-6">
                {[
                  "Reducción de 1M toneladas de CO2",
                  "100K árboles salvados",
                  "50% aumento en tasa de reciclaje",
                  "1M+ usuarios activos globalmente"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-lg"
                  >
                    <LeafyGreen className="h-8 w-8 text-green-500 mr-4" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Únete a nuestra comunidad de recicladores inteligentes y comienza a impactar positivamente en el medio ambiente hoy mismo.
          </p>
          <Button
            onClick={() => setCurrentView('login')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full"
          >
            Únete ahora <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
    
  )
}

export default Home