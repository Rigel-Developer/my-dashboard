import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "Counter",
  description: "Counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrio</span>
      <CartCounter value={20} />
    </div>
  );
}
