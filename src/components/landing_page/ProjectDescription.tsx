import React from 'react';

export default function ProjectDescription() {
  return (
    <section className="">
      <div className="text-center space-y-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold w-[300px] md:text-6xl md:w-[700px]">
          We'll help you share your vision.
        </h2>
        <p className="md:max-w-[600px] md:text-xl">
          Muse is designed to bridge the gap between music artists and their
          fans. It provides a space for artists to connect with their audience,
          share their music, and promote their work, all while offering fans a
          unique and engaging experience.
        </p>
        <img
          style={{ aspectRatio: '200/200', objectFit: 'cover' }}
          src="https://preview.redd.it/221117-red-velvet-the-reve-festival-2022-birthday-odd-v0-xaiepzr7zb0a1.jpg?width=640&crop=smart&auto=webp&s=b767978875afd37711ec29c27563ab16e6132340"
          alt="hero"
          className="w-[800px] rounded-xl"
        />
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
<div className="md:w-1/2 md:pr-4">
  <h1 className="text-2xl font-semibold  mb-4">What is Muse?</h1>
  <p className="text-lg mb-4">
    Muse is a platform designed to bridge the gap between music artists
    and their fans. It provides a space for artists to connect with
    their audience, share their music, and promote their work, all while
    offering fans a unique and engaging experience.
  </p>
</div>
<div className="md:w-1/2 md:pl-4">
  <h2 className="text-2xl font-semibold mb-2">Why Muse?</h2>
  <p className="text-lg mb-4">
    In today's digital landscape, artists often struggle to maintain a
    direct and meaningful connection with their fans. Social media
    platforms and streaming services can be fragmented and impersonal,
    making it challenging for artists to manage their brand and interact
    with their audience effectively.
  </p>
  <p className="text-lg">
    Muse addresses these issues by providing a unified platform where
    artists can manage their profile, upload and stream their music,
    list and sell merchandise, and engage with their fans through
    AMA-like message boards. By focusing on high-quality, intuitive
    UI/UX, Muse aims to create a seamless and enjoyable experience for
    both artists and fans, fostering deeper connections and enabling
    artists to thrive in a competitive industry.
  </p>
</div>
</div> */
}
