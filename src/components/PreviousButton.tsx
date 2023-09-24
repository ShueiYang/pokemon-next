"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const router = useRouter();

  return (
    <div className="container flex pb-4">
      <Button
        className="pl-2 lg:ml-[10%]"
        variant="outline"
        onClick={() => router.back()}
      >
        <ChevronLeft size={20} />
        Back
      </Button>
    </div>
  );
}
