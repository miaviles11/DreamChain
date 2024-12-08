"use client"

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function PublicDreams() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Sueños Públicos</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input className="flex-grow" placeholder="Buscar sueños..." />
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="education">Educación</SelectItem>
              <SelectItem value="technology">Tecnología</SelectItem>
              <SelectItem value="art">Arte</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((dream) => (
          <Link key={dream} href={`/dream-details/${dream}`} passHref>
            <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <h2 className="text-lg font-bold">Título del Sueño {dream}</h2>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">
                  Breve descripción del sueño. Este es un ejemplo de cómo se vería la descripción en la tarjeta.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="w-full" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Donar</Button>
                <Button>Mentorear</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
