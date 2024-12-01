'use client'
import ProductDetails from '../../../layouts/addetail';
import ImageGallery from '../../../layouts/imagesgallery';
import ContactForm from '../../../layouts/contactform';
import Footer from '../../../layouts/footer';
import type { AdDetailProps } from '../../../types/apitypes';
import type { ImageGalleryProps } from '../../../types/props';
import GetAdDetails from '@/app/api/ad_details';
import { useParams } from 'next/navigation'
import Header from '@/app/layouts/header';
import Breadcrumbs from '@/app/layouts/breadcrumbs';
import Modal from '@/app/components/modal';
import { ModalProvider } from '@/app/contexts/contactmodalprovider';


export default function AdDetailsPage() {
  const params = useParams<{ advert_type: string; advert_title: string, id: string }>()

  const response = GetAdDetails(params.id)
  const adprops: AdDetailProps = { adDataResponse: response };
  const adData = response.data;
  const imagesArray = adData?.Photos?.map(f=> f.PathBig) ?? [];
  const imagesProps: ImageGalleryProps = { images: imagesArray };

  // This is a placeholder function to get the breadcrumbs for the page
  function getBreadcrumbs() {
    return ['Home', 'Cars', 'Toyota', 'Corolla', '2020', adprops.adDataResponse.data.Title as string];
  }

  return (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{adData.Title}</title>

    </head>
    <body>
      <ModalProvider>
      <Header />
      <Breadcrumbs breadcrumbs={getBreadcrumbs()} />
      {/* <HeroSection {...adprops} /> */}
      <main>
        <div className="main-content">
          <div className='ad-container flex justify-center'>
            <div className="ad-content bg-[#f0f0f0] w-[970px] h-[250px] flex justify-center items-center">
             <p>Google Ads Placeholder </p>
            </div>
          </div>
          <div className="content-left">
          
            <ImageGallery  {...imagesProps}/>

            <ProductDetails {...adprops} />
          
            <Modal>
              <ContactForm  />
            </Modal>
          </div>
        </div>
      </main>


      <Footer  />
      </ModalProvider>
    </body>
  </html>
  );
}