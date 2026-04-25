import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Shield, Menu, X, ArrowRight, Github } from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      title: "Agentes Inteligentes",
      description: "Automatización avanzada con agentes autónomos que aprenden y ejecutan tareas complejas."
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: "Infraestructura Escalable",
      description: "Despliegue de soluciones de IA en entornos robustos y listos para el crecimiento."
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-400" />,
      title: "Integración Veloz",
      description: "Conecta tus sistemas actuales con potencia de IA en cuestión de días, no meses."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">AutomatizarTech</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Servicios</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">Nosotros</a>
            {session ? (
              <button className="primary-button text-sm">Dashboard</button>
            ) : (
              <button className="secondary-button text-sm">Iniciar Sesión</button>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full glass-card text-xs font-semibold text-indigo-400 mb-6 inline-block">
              Inteligencia Artificial para el Futuro
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 gradient-text leading-tight">
              Automatiza el Éxito de tu <br /> Negocio con IA
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Transformamos empresas mediante la implementación estratégica de agentes de IA y automatizaciones personalizadas.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="primary-button text-lg px-8 py-4">
                Comenzar Ahora <ArrowRight className="w-5 h-5" />
              </button>
              <button className="secondary-button text-lg px-8 py-4 flex items-center gap-2">
                Ver Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600/10 blur-[100px] -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-gray-400 mb-8">Únete a las empresas que ya están optimizando sus procesos con nuestra tecnología.</p>
          <button className="primary-button mx-auto">
            Contactar Consultor <Shield className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="text-indigo-500 w-5 h-5" />
            <span className="font-bold">AutomatizarTech</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 AutomatizarTech. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
