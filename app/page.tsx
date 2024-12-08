import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Gift, Users, LineChart, Github, Twitter, Linkedin } from 'lucide-react';
import Link from "next/link";

export default function DreamChainLanding() {


  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="py-6 px-4 border-b bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full" />
            <span className="text-2xl font-bold">DreamChain</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="text-sm font-medium">
              Inicio
            </Link>
            <Link href="#" className="text-sm font-medium">
              Cómo funciona
            </Link>
            <Link href="#" className="text-sm font-medium">
              Comunidad
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Registra tus sueños, encuentra apoyo, logra lo imposible</h1>
          <p className="text-xl text-gray-500 mb-8">
            Únete a la comunidad que hace realidad los sueños
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/registrar-sueno">
              <Button size="lg" variant="default">Registrar un Sueño</Button>
            </Link>            
			<Link href="/explorar-sueno">
            <Button size="lg" variant="outline">
              Explorar Sueños
            </Button> </Link>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Beneficios de DreamChain</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Gift className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Microdonaciones</h3>
                  <p className="text-gray-500">Apoya sueños con pequeñas contribuciones</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Mentoría</h3>
                  <p className="text-gray-500">Conecta con expertos que guiarán tu camino</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <LineChart className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Transparencia Blockchain</h3>
                  <p className="text-gray-500">Seguimiento claro y seguro de cada contribución</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 border-t bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Sobre Nosotros
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacidad
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-black">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
