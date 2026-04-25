import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Shield, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  MessageSquare,
  BarChart3,
  Calendar
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { siteConfig } from './config';

function App() {
  const [session, setSession] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    setBookingStatus('loading');
    // Simulated booking / lead capture
    const { error } = await supabase.from('leads').insert([
      { name: 'Lead Demo', email: 'demo@example.com', service_interest: 'General AI' }
    ]);
    
    if (error) {
      setBookingStatus('error');
    } else {
      setBookingStatus('success');
      setTimeout(() => setBookingStatus(''), 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient" />
      
      {/* Navigation */}
      <nav>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Cpu className="text-black w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tighter">automatizar.tech</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-text-dim">
          <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
          <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          <a href="#precios" className="hover:text-white transition-colors">Beneficios</a>
        </div>
        <button className="btn btn-primary !py-2 !px-6 text-xs uppercase tracking-widest">
          Empezar
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Liderando la Revolución de IA Agil</span>
          <h1 className="mb-6">
            Elimina el Trabajo <span className="gradient-text">Manual</span> <br /> 
            con Agentes de IA
          </h1>
          <p className="text-text-dim text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Desplegamos arquitecturas de automatización de grado empresarial que escalan tu inteligencia operativa sin aumentar tu nómina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="btn btn-primary text-lg">
              Agendar Consultoría <ArrowRight size={20} />
            </a>
            <a href="#soluciones" className="btn btn-secondary text-lg">
              Explorar Soluciones
            </a>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="stat-grid container">
          <StatCard number="98%" label="Efectividad en Procesos" />
          <StatCard number="400+" label="Integraciones Listas" />
          <StatCard number="24/7" label="Operación Autónoma" />
          <StatCard number="-60%" label="Reducción de Costos" />
        </div>
      </header>

      {/* Solutions Section */}
      <section id="soluciones" className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Soluciones de <span className="text-accent">Próxima Generación</span></h2>
          <p className="text-text-dim max-w-xl mx-auto">No instalamos software, creamos ecosistemas inteligentes que trabajan para ti.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SolutionCard 
            icon={<Bot size={32} />}
            title="Agentes Autónomos"
            description="Bots inteligentes que manejan atención al cliente, ventas y soporte sin intervención humana."
          />
          <SolutionCard 
            icon={<Zap size={32} />}
            title="Workflows n8n"
            description="Conectamos todas tus herramientas favoritas para que el dato fluya sin errores."
          />
          <SolutionCard 
            icon={<Shield size={32} />}
            title="IA de Cumplimiento"
            description="Auditorías automáticas y monitoreo de procesos en tiempo real para máxima seguridad."
          />
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="bg-white/5 py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8">Nuestra Metodología <span className="text-accent">Agile</span></h2>
            <div className="space-y-6">
              <ProcessItem number="01" title="Auditoría de Procesos" description="Identificamos los cuellos de botella donde estás perdiendo dinero y tiempo." />
              <ProcessItem number="02" title="Diseño de Arquitectura" description="Creamos un blueprint de IA personalizado para tu flujo de trabajo específico." />
              <ProcessItem number="03" title="Despliegue y Escalamiento" description="Lanzamos la automatización y la optimizamos basándonos en datos reales." />
            </div>
          </div>
          <div className="card relative p-0 overflow-hidden group">
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-12">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <BarChart3 className="text-accent" /> Resultado Esperado
               </h3>
               <div className="space-y-8">
                  <div className="metric-bar !h-8 bg-white/10 rounded-lg relative">
                    <div className="h-full bg-accent w-[92%] rounded-lg flex items-center px-4 text-black font-extrabold text-xs">
                      EFICIENCIA OPERATIVA +92%
                    </div>
                  </div>
                  <div className="metric-bar !h-8 bg-white/10 rounded-lg relative">
                    <div className="h-full bg-accent-secondary w-[85%] rounded-lg flex items-center px-4 text-black font-extrabold text-xs">
                      AHORRO EN TIEMPO +85%
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="container text-center">
        <div className="card max-w-4xl mx-auto p-16">
          <MessageSquare className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-4">¿Listo para Automatizar?</h2>
          <p className="text-text-dim text-lg mb-10">Agenda una sesión estratégica de 15 minutos y descubre el potencial de la IA en tu empresa.</p>
          
          <form onSubmit={handleBooking} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
             <input 
              type="email" 
              placeholder="tu@email.com" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-accent"
              required
             />
             <button disabled={bookingStatus === 'loading'} className="btn btn-primary">
               {bookingStatus === 'loading' ? 'Enviando...' : bookingStatus === 'success' ? '¡Listo!' : 'Agendar Ahora'}
             </button>
          </form>
          {bookingStatus === 'success' && <p className="text-accent mt-4 text-sm font-bold animate-pulse">Te contactaremos en breve.</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="text-accent w-6 h-6" />
            <span className="font-bold text-xl">automatizar.tech</span>
          </div>
          <div className="flex gap-8 text-sm text-text-dim font-medium">
             <a href="#" className="hover:text-white">Privacidad</a>
             <a href="#" className="hover:text-white">Términos</a>
             <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
          <p className="text-text-dim text-sm">© 2026 AutomatizarTech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const SolutionCard = ({ icon, title, description }) => (
  <div className="card">
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-text-dim leading-relaxed mb-6">{description}</p>
    <a href="#" className="text-accent text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
      SABER MÁS <ChevronRight size={16} />
    </a>
  </div>
);

const ProcessItem = ({ number, title, description }) => (
  <div className="flex gap-6 items-start">
    <span className="text-accent font-bold text-xl">{number}</span>
    <div>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-text-dim text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default App;
