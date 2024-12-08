"use client";

import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="DreamChain Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">DreamChain</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem href="/user-dashboard">
              <button className="w-full px-4 py-2 text-black rounded-md">
                Mis Sueños
              </button>
            </SidebarMenuItem>
            <SidebarMenuItem href="/user-profile">
              <button className="w-full px-4 py-2 text-black rounded-md">
                Cuenta
              </button>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="mt-auto p-4">
            <Link href="/">
              <button className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-black hover:text-white transition">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mis Sueños</h2>
            <Link href="/registrar-sueno">
              <Button size="lg" variant="default">
                Registrar Nuevo Sueño
              </Button>
            </Link>
          </div>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Lista de Sueños</h3>
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
