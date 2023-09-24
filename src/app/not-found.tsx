import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center mt-20">
      <h1 className="text-gold text-2xl mb-6">
        404 This page could not be found.
      </h1>
      <Link href="/">
        <Button variant="outline">Back to hompage</Button>
      </Link>
    </div>
  );
}
