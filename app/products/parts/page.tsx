import Image from 'next/image';
import RotatingCards from '../../../components/RotatingCards';

export default function PartsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Cyberdeck Kits & Parts</h1>
      <p className="mb-8 max-w-xl text-center">
        Explore three unique Hosaka cyberdeck models. Click a card to see the full parts list and purchase links. All links are affiliate—thank you for supporting the project!
      </p>
      <RotatingCards />
    </main>
  );
}
