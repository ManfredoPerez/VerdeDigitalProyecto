// import React from 'react'

import { BarChart, Gift, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const UserDashboard = ({ recyclePoints, handleRecycleSubmit, handleLogout }) => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard de Usuario</h1>
      <Tabs defaultValue="stats" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="stats">Estadísticas</TabsTrigger>
          <TabsTrigger value="recycle">Reciclar</TabsTrigger>
          <TabsTrigger value="locations">Puntos de Reciclaje</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Tus Estadísticas de Reciclaje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <BarChart className="h-10 w-10 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{recyclePoints}</p>
                  <p className="text-sm text-gray-500">Puntos de Reciclaje</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recycle">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Actividad de Reciclaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRecycleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Select>
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Selecciona un material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plastic">Plástico</SelectItem>
                      <SelectItem value="paper">Papel</SelectItem>
                      <SelectItem value="glass">Vidrio</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input id="weight" type="number" placeholder="0.0" min="0" step="0.1" />
                </div>
                <Button type="submit">Registrar Reciclaje</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="locations">
          <Card>
            <CardHeader>
              <CardTitle>Puntos de Reciclaje Cercanos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Mapa de puntos de reciclaje</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rewards">
          <Card>
            <CardHeader>
              <CardTitle>Tus Recompensas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Gift className="h-10 w-10 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{recyclePoints}</p>
                  <p className="text-sm text-gray-500">Puntos disponibles</p>
                </div>
              </div>
              <Button>Canjear Puntos</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button variant="outline" onClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  )
}

export default UserDashboard