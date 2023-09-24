"use client";  // Error components must be Client Components
import { useEffect } from "react";


export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <div className="h-full flex items-start justify-center">
      <h1 className="text-gold mt-20 text-2xl">
        {error.message ? error.message : "Something went wrong :("}
      </h1>
    </div>
  );
};