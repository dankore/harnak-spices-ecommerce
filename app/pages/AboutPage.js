import React from 'react';

function AboutPage() {
  return (
    <div className="mt-24">
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
  );
}

export default AboutPage;
