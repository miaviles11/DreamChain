import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Upload, Target, Gift, Sparkles } from 'lucide-react'

export default function DreamRegistryForm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardFooter className="text-3xl font-bold text-center">Registrar tu Sueño</CardFooter>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="dream-name" className="text-lg font-medium">
              <Sparkles className="inline-block mr-2" size={20} />
              Nombre del Sueño
            </Label>
            <Input id="dream-name" placeholder="Escribe el nombre de tu sueño" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-description" className="text-lg font-medium">
              <Target className="inline-block mr-2" size={20} />
              Descripción
            </Label>
            <Textarea id="dream-description" placeholder="Describe tu sueño en detalle" className="min-h-[100px]" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-goals" className="text-lg font-medium">
              <Target className="inline-block mr-2" size={20} />
              Metas
            </Label>
            <Input id="dream-goals" placeholder="Define las metas de tu sueño" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-reward" className="text-lg font-medium">
              <Gift className="inline-block mr-2" size={20} />
              Recompensa Ofrecida
            </Label>
            <Input id="dream-reward" placeholder="Especifica la recompensa por cumplir el sueño" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-attachments" className="text-lg font-medium">
              <Upload className="inline-block mr-2" size={20} />
              Adjuntar Imágenes o Documentos (Opcional)
            </Label>
            <Input id="dream-attachments" type="file" multiple className="cursor-pointer" />
          </div>
          
          <Button className="w-full text-lg py-6" size="lg">
            Registrar en Blockchain
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

