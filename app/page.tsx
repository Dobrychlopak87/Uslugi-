import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { villages } from '@/data/data';
import { MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-slate-50 p-4">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tighter">Wybierz swoją miejscowość</h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">Sprawdź harmonogram usług remontowych i porządkowych w Twojej okolicy.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-auto pb-4">
          {villages.map((village) => (
            <Link key={village.id} href={`/village/${village.id}`} className="group block active:scale-95 transition-transform duration-100">
              <Card 
                icon={<MapPin size={20} />}
                className="h-full flex items-center gap-4 transition-all duration-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 border-2 border-slate-100"
              >
                <span className="text-lg font-bold text-slate-800">{village.name}</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
