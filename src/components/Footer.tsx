import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="container h-16 pt-1 lg:pt-6">
      <Separator />
      <p className="py-6 text-center text-slate-100">
        &copy; {new Date().getFullYear()} onboarding project developed by
        ShueiYang at Ekino ❤️
      </p>
    </footer>
  );
}
