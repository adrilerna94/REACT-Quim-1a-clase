import { Button, Card, CardBody, Typography } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h1" color="amber" className="font-bold">
            🚀 Bienvenidos a la Misión: Red Planet
          </Typography>
          <div>
            <Typography variant="paragraph" className="text-gray-300">
              Nuestra misión es explorar y colonizar Marte. La humanidad está
              dando su primer gran paso hacia el planeta rojo.
            </Typography>
            <Typography variant="small" className="mt-2 italic text-gray-400">
              Fecha estimada de lanzamiento: 15 de julio de 2030.
            </Typography>
          </div>
          <Button color="amber" size="lg" className="mt-1">
            Unirse a la Misión
          </Button>
        </CardBody>
      </Card>
    </main>
  );
}
