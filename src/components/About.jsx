const About = () => {
  return (
    <section id="about" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <article>
        <h1 className="text-center  pb-4 text-lg font-semibold">ABOUT ME</h1>
        <div className="flex flex-col ">
          <div className=" rounded-full">
            <img
              className="w-[150px] px-4 my-0 mx-auto rounded-md"
              src="/public/images/juan.jpeg"
              alt=""
            />
          </div>
          <p className="px-3 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quibusdam odio. Autem similique expedita soluta! Iste quaerat dolore
            consequuntur deleniti! Itaque quae tempore, suscipit soluta quos
            tenetur accusantium quo dolorum!
          </p>
        </div>
      </article>
    </section>
  );
};
export default About;
