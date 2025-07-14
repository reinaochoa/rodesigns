import { Button } from "../components/ui/button";

function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 space-y-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-blue-600 mb-4">rodesigns</h1>
      
      <Button className="mb-4" variant="default">Enter to the World</Button>

      <h2 className="mb-4">welcome to the outlet</h2>
    </div>
  );
}

export default Home;