import AboutWidget from './components/AboutWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="container-grid mx-auto">
        
        <div className="hidden md:block" />

        
        <div className="flex flex-col">
          <AboutWidget />
          <GalleryWidget />
        </div>
      </div>
    </main>
  );
}
