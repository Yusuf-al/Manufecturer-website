import React from "react";

const Banner = () => {
  return (
    <div className="carousel lg:h-[35rem] mt-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://1.img-dpreview.com/files/p/E~C0x657S7000x3938T1200x675~articles/9162056837/2021/Lens_Lineup.jpeg"
          className="w-full h-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://wallpaperbat.com/img/454707-wallpaper-laptop-apple.jpg"
          className="w-full h-full"
          alt=""
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://st2.depositphotos.com/1187563/7649/i/600/depositphotos_76493923-stock-photo-old-style-photo-3d-modern.jpg"
          className="w-full h-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img
          src="https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/solution-kits/performance-solution-kit/performance-solution-twitter-image.png?v=1"
          className="w-full h-full bg-black"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
