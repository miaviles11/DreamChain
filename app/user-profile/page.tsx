"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import Link from "next/link"

export default function UserProfile() {
  return (
    <div className="flex h-screen"> {/* Flex para layout horizontal y altura completa */}
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>DreamChain</SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/user-dashboard">
                <SidebarMenuButton>Mis Sueños</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/user-profile">
                <SidebarMenuButton>Cuenta</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Salir</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-100"> {/* Espaciado y scroll si es necesario */}
        {/* User Info Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold">John Dreamer</h1>
            <p className="text-muted-foreground">@johndreamer</p>
          </div>
        </div>

        {/* Form to Update Personal Data */}
        <Card>
          <CardHeader>
            <CardHeader>Actualizar Información Personal</CardHeader>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <Input id="name" placeholder="John Dreamer" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <Input id="email" placeholder="john.dreamer@example.com" type="email" />
            </div>
            <Button variant="default">Guardar Cambios</Button>
          </CardContent>
        </Card>

        {/* Dreams Created Section */}
        <Card>
          <CardHeader>
            <CardHeader>Gestión de Sueños</CardHeader>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((dream) => (
                <Card key={dream}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Dream Title {dream}</h3>
                    <p className="text-sm text-muted-foreground">Short description...</p>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" size="sm">Editar</Button>
                      <Button variant="destructive" size="sm">Eliminar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
