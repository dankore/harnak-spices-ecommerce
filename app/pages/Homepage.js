import React from 'react';
import Page from '../components/shared/Page';
import Products from '../components/products/Products';
import { data } from '../data';

function Homepage() {
  const image = `https://res.cloudinary.com/my-nigerian-projects/image/upload/v1714767695/har/cuujzf38vv6d3mekhjog.png`;
  const description = `Find the best African spices online.`;
  const title = `Shop online for your spices`;

  return (
    <Page title={title} image={image} description={description}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-5">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
              {/* background */}
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-green-900 opacity-80 lg:rounded-b-lg"
            ></div>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center py-24 px-6 text-center lg:px-0">
              <img
                alt="Logo"
                src="assets/images/logo-new.jpeg"
                className="rounded-lg w-[400px] mx-auto"
                decoding="async"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl mt-12">
                Natural, Healthy, and Tasty Spices and Food
              </h1>
              <p className="mt-4 text-xl text-white">
                Suprise your taste buds -{' '}
                <span className="mx-2 relative inline-block after:w-full after:-rotate-2 after:absolute after:content-[''] after:h-[5px] after:bottom-0 after:left-0 after:block after:bg-orange-600 after:bg-gradient-to-r after:from-green-500 after:via-pink-500 after:to-orange-500">
                  NOW 23% OFF!
                </span>
              </p>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="tel:+234(0)803 404 2781"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-10 md:text-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="mr-3 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products products={data} />
      </div>
    </Page>
  );
}

export default Homepage;
