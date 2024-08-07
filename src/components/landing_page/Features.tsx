export default function Features() {
  return (
    <section>
      <div className="flex flex-col items-center  space-y-6">
        <h2 className="text-3xl font-bold w-[300px] md:text-6xl md:w-[700px] text-center">
          What we're all about
        </h2>
        <div className="flex items-center gap-6">
          <div className="space-y-6">
            <p className="md:max-w-[600px] md:text-xl">
              Artists often struggle to maintain a direct and meaningful
              connection with their fans. Social media platforms and streaming
              services can limit an artist's vision, making it challenging to
              manage their brand and interact with their audience effectively.
              We believe that artists should have the freedom to fully express
              their creativity and connect with their fans seamlessly.
            </p>
            <p className="md:max-w-[600px] md:text-xl">
              Muse is designed to bridge the gap between music artists and their
              fans. It provides a space for artists to connect with their
              audience, share their music, and promote their work, all while
              offering fans a unique and engaging experience. Music is the
              canvas where visions come to life, and Muse ensures that these
              visions are shared, appreciated, and celebrated.
            </p>
          </div>
          <img
            src="https://64.media.tumblr.com/7e6461967bcdfdb4f439bd848c4c199e/89d253f9380feb32-f8/s1280x1920/4208cceb496d06bd888c72bbbb6c76a7201f3e66.jpg"
            alt="hero"
            className="w-[600px] rounded-xl"
            style={{ aspectRatio: '400/300', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
