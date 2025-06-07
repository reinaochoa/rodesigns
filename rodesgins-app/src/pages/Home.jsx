import { Button } from "../components/ui/button";

function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Home Page</h1>
      
      <Button variant="default">Click Me</Button>
    </div>
  );
}

export default Home;