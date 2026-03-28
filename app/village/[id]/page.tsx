'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { villages, services } from '@/data/data';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';
import { CustomClothingIcon } from '@/components/icons/custom-clothing';
import { motion, AnimatePresence } from 'motion/react';

export default function VillagePage({ params }: { params: { id: string } }) {
  const { id } = React.use(params);
  const village = villages.find((v) => v.id === id);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedService, setCopiedService] = useState<string | null>(null);

  if (!village) {
    notFound();
  }

  const filteredServices = services.filter(s => 
    s.villageIds.includes(id) &&
    (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getIcon = (iconName: string, size: number = 24) => {
    if (iconName === 'CustomClothing') return <CustomClothingIcon size={size} />;
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  const getCardStyles = (name: string) => {
    switch (name) {
      case 'Remonty': return 'bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200';
      case 'Sprzątanie podwórka': return 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200';
      case 'Wywóz złomu': return 'bg-gradient-to-br from-zinc-50 to-zinc-100 border-zinc-200';
      case 'Koszenie trawy': return 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200';
      case 'Odbiór odzieży': return 'bg-gradient-to-br from-green-50 to-green-100 border-green-200';
      default: return 'border-slate-100 bg-white';
    }
  };

  const handleShare = (serviceName: string) => {
    const link = `${window.location.origin}/village/${id}?service=${encodeURIComponent(serviceName)}`;
    navigator.clipboard.writeText(link);
    setCopiedService(serviceName);
    setTimeout(() => setCopiedService(null), 2000);
  };

  return (
    <main className="h-screen overflow-hidden bg-slate-50">
      <div className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur-sm border-b border-slate-200 p-2">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors">
            <LucideIcons.ArrowLeft size={14} />
            Powrót
          </Link>
          <MobileMenu />
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 h-[calc(100vh-60px)] flex flex-col">
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">Usługi w {village.name}</h1>
        </header>

        <section className="flex-grow overflow-y-auto pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">Dostępne usługi</h2>
            <div className="relative w-full max-w-xs">
              <LucideIcons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Szukaj..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>
          </div>
          
          <motion.div className="grid grid-cols-1 gap-2" layout>
            <AnimatePresence mode="popLayout">
              {filteredServices.length > 0 ? (
                filteredServices.map(s => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Card 
                      icon={getIcon(s.iconName, 20)}
                      details={
                        <div className="text-slate-700 leading-relaxed space-y-1 text-xs">
                          <p>{s.description}</p>
                          {s.availability === 'monthly' && (
                            <div className="pt-1 border-t border-slate-100 flex items-center gap-1.5">
                              <LucideIcons.Calendar className="text-blue-600" size={14} />
                              <span className="text-slate-800 font-semibold">Najbliższy termin:</span>
                              <span className="font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded-full text-[10px]">{village.clothingCollectionDate}</span>
                            </div>
                          )}
                          <button 
                             onClick={() => handleShare(s.name)}
                             className={`flex items-center gap-1 font-semibold transition-colors text-[10px] ${copiedService === s.name ? 'text-green-600' : 'text-blue-600 hover:text-blue-800'}`}
                           >
                             <LucideIcons.Share2 size={12} />
                             {copiedService === s.name ? 'Skopiowano!' : 'Udostępnij'}
                           </button>
                        </div>
                      }
                      className={`${getCardStyles(s.name)} p-3 rounded-xl`}
                    >
                      <h3 className="text-sm font-bold text-slate-900">{s.name}</h3>
                      <p className="text-slate-500 text-[10px] font-medium">{s.category}</p>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-4 bg-white rounded-xl border border-slate-100"
                >
                  <LucideIcons.Search size={24} className="mx-auto text-slate-300 mb-1" />
                  <h3 className="text-sm font-bold text-slate-800">Brak wyników</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
