import React from 'react';
import SimilarAd from '../components/similarad';

interface SimilarAdsProps {
  similarAds?: { href: string; text: string, price: string, location: string, image: string, promoted: boolean }[];
}

const SimilarAds: React.FC<SimilarAdsProps> = ({
  similarAds = [
    { href: "/ad/1", text: "Caravan 1", price: "£15,000", location: "London", image: "https://caravansforsale.co.uk/img/adphotos/import/944/1101944_elddis-affinity-530-sussex-special-edition-mayfield-plus-4-b_img_1607367058.jpg", promoted: true },
    { href: "/ad/2", text: "Caravan 2", price: "£20,000", location: "Manchester", image: "https://caravansforsale.co.uk/img/adphotos/import/265/1104265_coachman-vip-460-sussex-special-edition-chiltington-2-berth-_img_1608317798.jpg", promoted: true },
    { href: "/ad/3", text: "Caravan 3", price: "£25,000", location: "Birmingham", image: "https://caravansforsale.co.uk/img/adphotos/import/265/1104265_coachman-vip-460-sussex-special-edition-chiltington-2-berth-_img_1608317798.jpg", promoted: false },
  ],
}) => {
  return (
    <aside id="similar-ads" className='mb-[16px]'>
      <h3 className="text-[18px] mb-[16px] font-bold">Similar Ads</h3>
      <div className="flex flex-wrap gap-[12px]">
        {similarAds.map((ad, index: number) => (
          <SimilarAd
            key={'ad' + index}
            name={ad.text}
            price={ad.price}
            location={ad.location}
            image={ad.image}
            isPromoted={ad.promoted}
          />
        ))}
      </div>
    </aside>
  );
};

export default SimilarAds;