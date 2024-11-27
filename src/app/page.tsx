import { lusitana } from "@/ui/fonts";

export default function Page() {
    return (
        <div>
            <h1 className="text-blue-800">Hello, Next.js!</h1>
            <p className={lusitana.className}>This is a test page.</p>
        </div>
    );
}