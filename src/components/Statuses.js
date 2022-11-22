import Status from "./Status";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";



function Statuses() {
  const statuses = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011062/pexels-martin-boh%C3%A1%C4%8D-10288457_hmd0gl.jpg",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664953256/images_1_cb1erh.jpg",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664904897/fog-forest-19186761_yefcgv.jpg",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 13,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
    },
    {
      id: 14,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 15,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
  ];

  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className=" flex  items-center justify-around space-x-2  w-screen bg-miingo-gray px-3 py-1 mx-2 ">
      <div className=" flex items-center justify-center  w-20 md:w-56 bg-miingo-gray">
        <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-regal-orange shadow-lg  flex items-center justify-center  hover:shadow-xl active:scale-90 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
      </div>

      
      
      <div className="relative  flex items-center justify-around space-x-2 w-72 md:w-[870px] h-24 p-2 ">
        <div
          onClick={slideLeft2}
          className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer"
        >
          <HiChevronLeft className="h-4 w-4" />
        </div>
 
        <div
          id="slider2"
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
        
           {statuses?.map(({ id, image }) => (
            <Status key= {id} image={image} />
          ))}
        </div>

        <div
          onClick={slideRight2}
          className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer"
        >
          <HiChevronRight className="h-4 w-4" />
        </div>

      </div>

      
    </div>
  );
}

export default Statuses;
