import Navbar from "@components/song-savvy/Navbar";
import FormSection from "@components/song-savvy/FormSection";
import Footer from "@components/song-savvy/Footer";
import FooterNote from "@components/ui/FooterNote";

export default function FormPage() {
  return (
    <div className='bg-gray-900 text-spotifyGreen w-full px-4 py-2 min-h-screen flex flex-col'>
      <Navbar />
      <FormSection />
      <Footer />
      <FooterNote className='text-xs font-portfolioFont' />
    </div>
  );
}
