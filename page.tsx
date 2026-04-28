import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Portfolio Quick Look (Brief placeholder for Masonry) */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">The Lookbook</span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">Salem's Finest <br /> Transformations</h2>
            <p className="text-white/70 mb-8 max-w-md">
              From traditional bridal elegance to modern chic haircuts, witness the artistry of our senior stylists. 
            </p>
            <button className="text-gold border border-gold px-8 py-3 rounded-full hover:bg-gold hover:text-emerald-900 transition-all">
              View Portfolio
            </button>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] bg-charcoal rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/bridal-makeup-portfolio.png" 
              alt="Bridal Portfolio"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Footer Info */}
      <footer className="py-12 border-t border-gold/10 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold font-playfair text-2xl mb-4">Naturals Salem</p>
          <p className="text-white/50 text-sm mb-2">No.20, Gopal Building, Ramakrishna Rd, opp. Om Sakti Temple, Salem</p>
          <p className="text-white/50 text-sm">Open Daily: 9:00 AM - 9:00 PM | 091501 11660</p>
        </div>
      </footer>
    </main>
  );
}
