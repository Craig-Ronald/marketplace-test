'use client';

import React, { useState } from 'react';
import type { AdDetailProps } from '../types/apitypes';
import AdButtons from './adbuttons';
import ProfileCard from './profilecard';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import DetailsTable from '../components/detailstable';
import AffiliateButton from '../components/affiliatebutton';
import SimilarAds from './similarads';
import StickyProductDetails from './stickyproductdetails';


const ProductDetails: React.FC<AdDetailProps>= ({adDataResponse})=>{

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const dataFields = adDataResponse?.data?.DataFields ?? [];
  const title = adDataResponse.data.Title;
  const description = adDataResponse.data.Description;
  const price = adDataResponse?.data?.PriceCurrency?.replace("&pound;","£");
  const thumbnail = adDataResponse?.data?.Photos[0]?.PathBig;

  const productDetailsRef = useRef(null);

  const [productDetailsIsSticky, setProductDetailsIsSticky] = useState(false);

  useGSAP(() => {

    const matchMedia = gsap.matchMedia();

    matchMedia.add('(min-width: 1024px)', () => {
      
      // Pins the sidebar to the top of the viewport when the profile card goes out of view
      ScrollTrigger.create({
        pin: '#ad-sidebar',
        trigger: '#profile-card',
        start: 'bottom top',
        endTrigger: '#product-details',
        end: 'bottom bottom'
      })

      // Pins the product details sticky to the bottom of the viewport when the profile card is out of view
      // and unpins when the footer is in view
      ScrollTrigger.create({
        trigger: '#profile-card',
        start: 'bottom top',
        endTrigger: '#footer',
        end: 'top bottom',
        onEnter: () => {
          setProductDetailsIsSticky(true);
        },
        onLeaveBack: () => {
          setProductDetailsIsSticky(false);
        },
        onEnterBack: () => {
          setProductDetailsIsSticky(true);
        },
        onLeave: () => {
          setProductDetailsIsSticky(false);
        }
      });
    });

    matchMedia.add('(max-width: 1023px)', () => {

      setProductDetailsIsSticky(true);

      // Pins the product details sticky to the bottom of the viewport until it reaches the bottom of the viewport
      ScrollTrigger.create({
        trigger: '#footer',
        start: 'top bottom',
        end: 'top bottom',
        onEnter: () => {
          setProductDetailsIsSticky(false)
        },
        onLeaveBack: () => {
          setProductDetailsIsSticky(true)
        },
      });
    });

  }, [productDetailsRef]);

  return (
    <>
    <div 
      ref={productDetailsRef} 
      id="product-details" 
      className="tpl-container flex wrap flex-col lg:flex-row gap-[12px] justify-between !py-[40px]"
    >
      <div id="left" className="w-full lg:w-auto">
        <div className="flex justify-between mb-[16px]">
          <p className="font-bold text-[24px]">{price}</p>
          <AdButtons />
        </div>

        <h2 className="text-[32px] leading-[40px] mb-[16px]">{title}</h2>

        <div id="details" className="mb-[16px]">
          <h3 className="text-[18px] font-bold leading-[24px] mb-[16px]">Details</h3>
          <DetailsTable fields={dataFields} />
        </div>
         
        <div id="description" className="mb-[16px]">
          <h3 className="text-[18px] font-bold leading-[24px] mb-[16px]">Description</h3>
          <p>{description}</p>
        </div>

        <div id="specifications" className="mb-[16px]">
          <h3 className="text-[18px] font-bold leading-[24px] mb-[16px]">Specifications</h3>
          
        </div>
        <SimilarAds  />

        {/* Remove after testing scroll pin */}
        <div className='h-[1000px] bg-[#f0f0f0] p-[12px]'>
          <p>This is here to increase the height of the left section and demonstrate the pinned right side</p>
        </div>

      </div>

      <div id="right" className="flex flex-col items-center gap-[12px] w-full lg:w-auto">
        <ProfileCard />
        <div id="ad-sidebar" className="ad-container w-full flex-col justify-center items-center gap-[32px] flex">
          <div className="hidden lg:block ad-content w-[300px] h-[600px] bg-[#f0f0f0]">
            <p>Google Ads Placeholder</p>
          </div>
          <div className="flex justify-between items-center gap-[8px] w-full">
            <AffiliateButton 
              image="https://caravansforsale.co.uk/img/ads_textlink/image_150.png" 
              alt="Caravans For Sale" 
              text="Insure your caravans" 
            />
            <AffiliateButton 
              image="https://caravansforsale.co.uk/img/ads_textlink/image_46.png" 
              alt="Caravans For Sale" 
              text="Click now for insurance quotes" 
            />
          </div>
        </div>
      </div>
    </div>
    <StickyProductDetails title={title} price={price} thumbnail={thumbnail} isSticky={productDetailsIsSticky} />
    </>
  );
};

export default ProductDetails;