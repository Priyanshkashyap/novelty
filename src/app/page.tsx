import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <nav>
        <h1>NOVELTY Restaurant</h1>
      </nav>

      <p>Browse menu, view details, add to cart.</p>
      <Link className="px-5 py-2 rounded-md bg-white-600 text-white font-medium hover:bg-blue-700 transition" href="/menu"> go to menu
      </Link>
    </div>
  );
}
