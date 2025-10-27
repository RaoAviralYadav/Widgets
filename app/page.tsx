// import AboutWidget from './components/AboutWidget';
// import GalleryWidget from './components/GalleryWidget';

// export default function Page() {
//   return (
//     <main className="min-h-screen">
//       <div className="container-grid mx-auto">
        
//         <div className="hidden md:block" />

        
//         <div className="flex flex-col">
//           <AboutWidget />
//           <GalleryWidget />
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import AboutWidget from './components/AboutWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Page() {
  return (
    <main className="app-layout">
      {/* Left Half - Empty */}
      <div className="left-section"></div>

      {/* Right Half - Widgets */}
      <div className="right-section">
        <AboutWidget />
        
        {/* Divider between widgets - 612px width */}
        <div className="widget-divider"></div>
        
        <GalleryWidget />
        
        {/* Final divider - 612px width */}
        <div className="widget-divider"></div>
      </div>

      <style jsx>{`
        .app-layout {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 40px;
          gap: 0;
        }

        .left-section {
          /* Empty left half */
        }

        .right-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* Divider - 612px x 4px */
        .widget-divider {
          width: 612px;
          height: 4px;
          margin: 20px 0 20px 54px; /* 54px offset for alignment with content */
          border-radius: 2.46px;
          background: linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(9.84px);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.33);
        }

        /* Responsive for mobile (hide left section below 768px) */
        @media (max-width: 768px) {
          .app-layout {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .left-section {
            display: none;
          }

          .right-section {
            align-items: center;
          }

          .widget-divider {
            width: 90%;
            margin-left: 0;
          }
        }
      `}</style>
    </main>
  );
}