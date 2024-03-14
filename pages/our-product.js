/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Luminous Smile Serum",
    image: "/image/products/product-1.jpg",
    desc: ["Reveal a brighter, more radiant smile by banishing unwanted yellow tones from your teeth."],
  },
  {
    name: "Mushroom Head Air Cushion CC Cream",
    image: "/image/products/product-2.jpg",
    desc: ["Providing full coverage and an even skin tone, suitable for all skin types."],
  },
  {
    name: "Charmante Advanced Moisturizing Hand Cream",
    image: "/image/products/product-3.jpg",
    desc: ["Anti-aging, pore shrinking, hydrating anti-cracked."],
  },
  {
    name: "KASOMO Ultimate Hair Growth Serum",
    image: "/image/products/product-4.jpg",
    desc: ["Boost natural and healthy hair growth, increase hair density, reduce hair loss."],
  },
  {
    name: "KASOMO Intense Hydrating Repair Treatment Mask",
    image: "/image/products/product-5.png",
    desc: [
      "Hydrating & conditioning for curly, coloured, frizzy, broken or bleached hair. vegan, cruelty & sulphate free.",
    ],
  },
  {
    name: "KASOMO Organic Beard & Brow Regrowth Serum",
    image: "/image/products/product-6.jpg",
    desc: ["Help grow facial hair stronger, faster and healthier."],
  },
  {
    name: "KASOMO Advanced Anti-hair Loss & dandruff Activator Shampoo",
    image: "/image/products/product-7.jpg",
    desc: ["Shampoo for dandruff prone & itchy scalp, deep cleanse purifies and nourishes the scalp."],
  },
  {
    name: "Morri Orange Exfoliating Gel",
    image: "/image/products/product-8.jpg",
    desc: [
      "A nourishing formula crafted to deeply moisturize and revitalize your hands, leaving them silky smooth and irresistibly touchable.",
    ],
  },
  {
    name: "Trezzen Gray Reverse Bar Soap",
    image: "/image/products/product-9.jpg",
    desc: ["Restoring your natural hair color, from gray hair to vivid dark color."],
  },
  {
    name: "Berari | Inflammation Blood Varicose Veins Cream",
    image: "/image/products/product-10.png",
    desc: ["Improve blood circulation, eliminate the appearance of varicose veins, relieve pain of legs."],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square"></img>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">{name}</p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
