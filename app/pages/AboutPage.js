import React from 'react';
import Page from '../components/shared/Page';

function AboutPage() {
  return (
    <Page title="About Harnak Foods">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Harnak Foods
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Harnak Foods is a leading provider of high-quality spices and food products. We
                  are committed to delivering the best in food quality and taste.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  We understand the importance of flavor in every dish, and that&apos;s why we are
                  dedicated to providing spices and food products that enhance, rather than
                  overpower, the taste of your meals. Our commitment to quality and customer
                  satisfaction is what sets us apart in the food industry.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="assets/images/categories/display-1.png"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="assets/images/categories/display-1.png"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="assets/images/categories/display-2.png"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="assets/images/categories/display-3.png"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default AboutPage;
