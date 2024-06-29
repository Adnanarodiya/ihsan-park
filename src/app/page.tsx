import InputWithDropdown from "@/components/InputWithDropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const suggestions = [
  { id: 1, text: "Apple" },
  { id: 2, text: "Banana" },
  { id: 3, text: "Cherry" },
];

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <h1 className="text-2xl mb-4">Search Fruits</h1>
      <InputWithDropdown suggestions={suggestions} />

    </div>
  );
}
