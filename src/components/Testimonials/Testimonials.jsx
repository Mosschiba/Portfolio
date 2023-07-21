import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia rerum officiis. A fugiat sed voluptate. Consequatur voluptas placeat, magni, autem tempore, recusandae omnis iusto sapiente incidunt hic minus reiciendis.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ratione voluptatibus ipsum assumenda quo eos rem laboriosam dolorum fuga a adipisci error, magni cum quam excepturi voluptatem eum unde. Natus.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa molestias voluptates ipsum nobis explicabo esse ad quas. Quod exercitationem iusto nobis! Totam corrupti animi, iure possimus harum magnam dignissimos!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa molestias voluptates ipsum nobis explicabo esse ad quas. Quod exercitationem iusto nobis! Totam corrupti animi, iure possimus harum magnam dignissimos!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-header">
        <span>Clients always get</span>
        <span> Exeptional Work </span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var()--purple" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
