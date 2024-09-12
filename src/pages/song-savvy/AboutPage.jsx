import { aboutPageContent } from "@data/songsavvy";
import Navbar from "@components/song-savvy/Navbar";
import ContentSection from "@components/song-savvy/ContentSection";
import Footer from "@components/song-savvy/Footer";
import FooterNote from "@components/ui/FooterNote";

export default function AboutPage() {
  return (
    <div className='bg-gray-900 text-spotifyGreen w-full px-4 py-2 min-h-screen flex flex-col'>
      <Navbar />
      <ContentSection
        title={aboutPageContent.title}
        paraContent={aboutPageContent.content}
        buttonTitle={aboutPageContent.buttonTitle}
        buttonLink={aboutPageContent.buttonLink}
      />
      <Footer />
      <FooterNote className='text-xs font-portfolioFont' />
    </div>
  );
}
