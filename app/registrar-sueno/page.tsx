'use client'
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Upload, Target, Gift, Sparkles } from 'lucide-react'
import React, { useState } from 'react';
import { DreamDeployed } from "../service/service.dream.deploy"
import { dreyerxMainnet } from "viem/chains"

interface  FormDream {
  name_sleep:string,
  dream_description: string,
  dream_goals: string,
  dream_reward_offered: string
}

export default function DreamRegistryForm() {
  const dreamDeployed = new DreamDeployed();

  const [dreamForm, setDreamForm] =  useState<FormDream>({
    name_sleep: '',
    dream_description: '',
    dream_goals: '', 
    dream_reward_offered: '', 
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDreamForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('form-dream', JSON.stringify(dreamForm));
    dreamDeployed.write(30);
    console.log(localStorage.getItem('form-dream')); // Aquí puedes enviar el estado al servidor o hacer lo que necesites
  };

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
            <Input id="dream-name" name="name_sleep" value={dreamForm.name_sleep}  onChange={handleChange} placeholder="Escribe el nombre de tu sueño" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-description" className="text-lg font-medium">
              <Target className="inline-block mr-2" size={20} />
              Descripción
            </Label>
            <Input id="dream-description" name="dream_description" placeholder="Describe tu sueño en detalle" value={dreamForm.dream_description}  onChange={handleChange}  className="min-h-[100px]" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-goals" className="text-lg font-medium">
              <Target className="inline-block mr-2" size={20} />
              Metas
            </Label>
            <Input id="dream-goals"  name="dream_goals" value={dreamForm.dream_goals}  onChange={handleChange} placeholder="Define las metas de tu sueño" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dream-reward" className="text-lg font-medium">
              <Gift className="inline-block mr-2" size={20} />
              Recompensa Ofrecida
            </Label>
            <Input id="dream-reward" name="dream_reward_offered"  value={dreamForm.dream_reward_offered}  onChange={handleChange} placeholder="Especifica la recompensa por cumplir el sueño" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dream-attachments" className="text-lg font-medium">
              <Upload className="inline-block mr-2" size={20} />
              Adjuntar Imágenes o Documentos (Opcional)
            </Label>
            <Input id="dream-attachments" type="file" multiple className="cursor-pointer" />
          </div>
          
          <Button className="w-full text-lg py-6" size="lg" onClick={handleSubmit} >
            Registrar en Blockchain
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

