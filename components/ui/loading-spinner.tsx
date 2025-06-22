import { Loader2 } from "lucide-react";

export default function LoadingSpinner({ text = "Enviando..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center gap-4 bg-white/90 px-8 py-6 rounded-lg shadow-lg">
        <Loader2 className="animate-spin text-rose-600" size={40} />
        <span className="text-rose-900 font-medium text-lg">{text}</span>
      </div>
    </div>
  );
}
