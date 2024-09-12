import { homePageContent } from "@data/songsavvy";
import Navbar from "@components/song-savvy/Navbar";
import Footer from "@components/song-savvy/Footer";
import ContentSection from "@components/song-savvy/ContentSection";
import FooterNote from "@components/ui/FooterNote";

export default function HomePage() {
  return (
    <div className='bg-gray-900 text-spotifyGreen w-full px-4 py-2 min-h-screen flex flex-col'>
      <Navbar />
      <ContentSection
        title={homePageContent.title}
        paraContent={homePageContent.content}
        buttonTitle={homePageContent.buttonTitle}
        buttonLink={homePageContent.buttonLink}
      />
      <Footer />
      <FooterNote className='text-xs font-portfolioFont' />
    </div>
  );
}
