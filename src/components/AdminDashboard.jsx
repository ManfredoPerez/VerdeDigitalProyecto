// import React from 'react'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart, FileText, MapPin, Users } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const AdminDashboard = ({ handleLogout }) => {

    const [recyclePoints, setRecyclePoints] = useState([
        { id: 1, name: "Centro Comunitario", address: "Calle Principal 123" },
        { id: 2, name: "Parque Central", address: "Avenida Central 456" },
        { id: 3, name: "Supermercado Eco", address: "Calle Verde 789" },
      ])
    
      const [users, setUsers] = useState([
        { id: 1, name: "Ana García", email: "ana@example.com", points: 150 },
        { id: 2, name: "Carlos López", email: "carlos@example.com", points: 220 },
        { id: 3, name: "María Rodríguez", email: "maria@example.com", points: 180 },
      ])
    
      const handleAddRecyclePoint = (event) => {
        event.preventDefault()
        const newPoint = {
          id: recyclePoints.length + 1,
          name: event.target.name.value,
          address: event.target.address.value,
        }
        setRecyclePoints([...recyclePoints, newPoint])
        event.target.reset()
      }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Resumen</TabsTrigger>
          <TabsTrigger value="recyclePoints">Puntos de Reciclaje</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="reports">Informes</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reciclado</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,500 kg</div>
                <p className="text-xs text-muted-foreground">+20.1% del mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">+180 nuevos esta semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Puntos de Reciclaje</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recyclePoints.length}</div>
                <p className="text-xs text-muted-foreground">En toda la ciudad</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recyclePoints">
          <Card>
            <CardHeader>
              <CardTitle>Gestionar Puntos de Reciclaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddRecyclePoint} className="space-y-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre del Punto</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" required />
                  </div>
                </div>
                <Button type="submit">Agregar Punto de Reciclaje</Button>
              </form>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Dirección</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recyclePoints.map((point) => (
                    <TableRow key={point.id}>
                      <TableCell>{point.name}</TableCell>
                      <TableCell>{point.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Generar Informes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Informe de Reciclaje Mensual
                </Button>
                <Button className="w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Informe de Usuarios Activos
                </Button>
                <Button className="w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Informe de Impacto Ambiental
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button variant="outline" onClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  )
}

export default AdminDashboard