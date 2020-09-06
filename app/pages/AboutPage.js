import React from 'react';
import Page from '../components/shared/Page';

function AboutPage() {
  return (
    <Page title="About Harnak Spices">
      <div className="m">
        <h1 className="text-center">About Harnak Spices</h1>
        <div className="flex flex-wrap justify-center">
          <img
            className="custom-shadow m-3"
            style={{ height: 400 + 'px' }}
            src="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599369307/har/1_rud7fj.jpg"
          />
          <img
            className="custom-shadow m-3"
            style={{ height: 400 + 'px' }}
            src="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599369307/har/2_oyldgo.jpg"
          />
          <img
            className="custom-shadow m-3"
            style={{ height: 400 + 'px' }}
            src="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599369307/har/3_n0w7r6.jpg"
          />
        </div>
      </div>
    </Page>
  );
}

export default AboutPage;
