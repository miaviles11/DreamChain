"use client"

import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar>
        <SidebarHeader>DreamChain</SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Mis Sueños</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
			  <Link href="/user-profile">
              	<SidebarMenuButton>
					Cuenta</SidebarMenuButton>
			  </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Salir</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-xl font-semibold">Perfil</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mis Sueños</h2>
			<Link href="/registrar-sueno">
            	<Button size="lg" variant="default">Registrar Nuevo Sueño</Button>
			</Link>
          </div>
          <Card>
            <CardHeader>
              <CardHeader>Lista de Sueños</CardHeader>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sueño</TableHead>
                    <TableHead>Progreso</TableHead>
                    <TableHead>Donaciones Recibidas</TableHead>
                    <TableHead>Mentores</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aprender guitarra</TableCell>
                    <TableCell>60%</TableCell>
                    <TableCell>500 DREAM</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Viajar a Japón</TableCell>
                    <TableCell>30%</TableCell>
                    <TableCell>300 DREAM</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
