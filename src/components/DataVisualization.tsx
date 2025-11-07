import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const DataVisualization = () => {
  const growthData = [
    { year: '2015', amount: 44.4 },
    { year: '2017', amount: 48.5 },
    { year: '2019', amount: 53.6 },
    { year: '2021', amount: 57.4 },
    { year: '2022', amount: 62.0 },
    { year: '2025', amount: 70.0 },
    { year: '2030', amount: 82.0 },
  ];

  const compositionData = [
    { name: 'Metais Ferrosos', value: 38, color: 'hsl(150, 45%, 45%)' },
    { name: 'Plásticos', value: 19, color: 'hsl(210, 60%, 50%)' },
    { name: 'Metais Não-Ferrosos', value: 14, color: 'hsl(170, 70%, 45%)' },
    { name: 'Vidro', value: 12, color: 'hsl(190, 60%, 45%)' },
    { name: 'Outros', value: 11, color: 'hsl(150, 30%, 60%)' },
    { name: 'Componentes Perigosos', value: 6, color: 'hsl(0, 84%, 60%)' },
  ];

  const regionData = [
    { region: 'Ásia', amount: 32.6 },
    { region: 'Américas', amount: 13.9 },
    { region: 'Europa', amount: 12.4 },
    { region: 'África', amount: 2.9 },
    { region: 'Oceania', amount: 0.7 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dados e Estatísticas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Números que revelam a magnitude do problema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 border-2">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Crescimento do E-Lixo Global</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                  label={{ value: 'Milhões de Toneladas', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Projeção: crescimento de 33% entre 2022 e 2030
            </p>
          </Card>

          <Card className="p-6 border-2">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Composição do E-Lixo</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={compositionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {compositionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Distribuição por tipo de material (% do total)
            </p>
          </Card>
        </div>

        <Card className="p-6 border-2">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Geração por Região (2022)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="region" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
                label={{ value: 'Milhões de Toneladas', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="amount" 
                fill="hsl(var(--secondary))"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            A Ásia responde por mais de 50% do e-lixo global
          </p>
        </Card>
      </div>
    </section>
  );
};

export default DataVisualization;
