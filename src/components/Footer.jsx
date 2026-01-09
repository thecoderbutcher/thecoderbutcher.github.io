const Footer = () => {
  const year = new Date();
  return (
    <div className="col-span-1 md:col-span-5 flex flex-col h-full w-full p-4">
      <div className="flex flex-col justify-center items-center text-center gap-2 bg-secondary/90 text-primary/80 p-8 ">
        <p className="text-lg font-light">
          © {year.getFullYear()} All Rights Reserved.
        </p>
        <p className="text-lg font-light">
          Developed with ❤ by:{" "}
          <span className="font-bold text-accent">thecoderbutcher</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
