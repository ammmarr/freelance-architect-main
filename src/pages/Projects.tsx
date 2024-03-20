import { ProjectsHeroSection } from "../components/projectsHeroSection/ProjectsHeroSection";
import ProjectsHeroSectionSkeleton from "../components/projectsHeroSectionSkeleton/ProjectsHeroSectionSkeleton";
import transition from "../transitions/PageTransitions";
// import useGetData from "../hooks/useGetData";

// Projects Data
export const data = [
  {
    id: 1,
    attributes: {
      name: "Discover the Art of Finishing: Interior Design for Your Apartment",
      title:
        "Discover the Art of Finishing: Interior Design for Your Apartment",
      description: `In this delightful video, we invite you to witness the transformation of a child's room into a whimsical wonderland of color, comfort, and charm. From playful flooring to vibrant wall treatments, adorable furnishings to imaginative decor, we'll guide you through every step of the process, ensuring that every corner of the room sparks joy and inspires endless adventures.

    Discover how to infuse personality and style into your child's space while prioritizing functionality and safety. We'll share expert tips on selecting durable materials, optimizing storage solutions, and incorporating interactive elements that stimulate creativity and promote learning.`,
      architects: "Mostafa Nasser",
      location: "Ismailia",
      category: "Interior",
      main_thumbnail_image: {
        data: {
          attributes: {
            url: "src/assets/projects/project_one.jpg",
          },
        },
      },
      project_images: {
        data: [
          {
            attributes: {
              url: "../src/assets/projects/project_one.jpg",
            },
          },
        ],
      },
      project_videos: {
        data: [
          {
            attributes: {
              url: "https://www.youtube.com/embed/SPlNWvtdvzM?si=-3rCQIG6UeWP0cfs",
            },
          },
          {
            attributes: {
              url: "https://www.youtube.com/embed/O_X6Op_JdDM?si=Mp2V5u8CwCGsCSDn",
            },
          },
          {
            attributes: {
              url: "https://www.youtube.com/embed/udaCIk0NDmY?si=-BbX2vqzvNS-XSvT",
            },
          },
          {
            attributes: {
              url: "https://www.youtube.com/embed/fftQ3jrKLR0?si=9itYOhZIW-qBufPw",
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "The Art of Interior Design in Beauty Centers",
      title: "The Art of Interior Design in Beauty Centers",
      description: `In this captivating video, we take you behind the scenes of our latest project, showcasing the meticulous attention to detail that goes into crafting every corner of a beauty center. From luxurious flooring to elegant lighting, chic furnishings to serene decor, we explore the finishing touches that transform a space into a sanctuary of style and sophistication.

    Discover the power of color psychology as we explore the hues that evoke tranquility, energy, and confidence, setting the perfect ambiance for your beauty experience. Learn how to optimize layout and flow to enhance efficiency and create a seamless journey for your clients, from reception to treatment rooms.
    
    Whether you're a seasoned salon owner or dreaming of opening your own beauty haven, this video offers inspiration and practical insights to elevate your space to new heights of elegance and allure.
    
    Don't miss out on this opportunity to immerse yourself in the art of interior design for beauty centers. Sit back, relax, and let us guide you through the journey of transforming your vision into reality!`,
      architects: "Mostafa Nasser",
      location: "Ismailia",
      category: "Interior",
      main_thumbnail_image: {
        data: {
          attributes: {
            url: "src/assets/projects/project_two.jpg",
          },
        },
      },
      project_images: {
        data: [
          {
            attributes: {
              url: "../src/assets/projects/project_two.jpg",
            },
          },
        ],
      },
      project_videos: {
        data: [
          {
            attributes: {
              url: "https://www.youtube.com/embed/x8dqe12ThEM?si=D0zs5FktSi7lvgT9",
            },
          },
          {
            attributes: {
              url: "https://www.youtube.com/embed/_erETEvDI2k?si=8-8pglOa4koemTV9",
            },
          },
        ],
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "magical apartment",
      title: "magical apartment",
      description: `In this captivating video, we unveil the secrets to elevating apartment living to new heights. From sleek flooring choices to captivating wall treatments, luxurious lighting fixtures to carefully curated furniture pieces, every detail is thoughtfully selected to create spaces that inspire and delight.

    Discover how to make the most of limited space with clever storage solutions and innovative design techniques. We'll guide you through the process of creating cohesive color schemes, balancing textures, and incorporating personal touches to infuse each apartment with its own unique charm.
    
    Whether you're a city dweller seeking sanctuary in a bustling metropolis or a trendsetter looking to redefine urban living, this video offers a wealth of inspiration and practical advice to help you transform your apartment into a stylish and inviting retreat.
    
    Don't miss out on this opportunity to unlock the full potential of your living space and embark on a journey of interior design excellence. Sit back, relax, and let us inspire you to turn your apartment into the home of your dreams!`,
      architects: "Mostafa Nasser",
      location: "Ismailia",
      category: "Interior",
      main_thumbnail_image: {
        data: {
          attributes: {
            url: "src/assets/projects/project_three.jpg",
          },
        },
      },
      project_images: {
        data: [
          {
            attributes: {
              url: "../src/assets/projects/project_three.jpg",
            },
          },
        ],
      },
      project_videos: {
        data: [
          {
            attributes: {
              url: "https://www.youtube.com/embed/pAG-aCXLz0w?si=BGHyUzsh69rL-Bnn",
            },
          },
          {
            attributes: {
              url: "https://www.youtube.com/embed/qqu-25EZHTQ?si=tkPDp82VISdqxyf2",
            },
          },
        ],
      },
    },
  },
  {
    id: 4,
    attributes: {
      name: "Modern Marvel: Revamping Apartment Interiors with Style",
      title: "Modern Marvel: Revamping Apartment Interiors with Style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium laboriosam molestias officiis, laudantium reiciendis delectus odit, quam, placeat animi accusamus incidunt quisquam nobis commodi omnis.",
      architects: "Mostafa Nasser",
      location: "Ismailia",
      category: "Interior",
      main_thumbnail_image: {
        data: {
          attributes: {
            url: "src/assets/projects/project_four.jpg",
          },
        },
      },
      project_images: {
        data: [
          {
            attributes: {
              url: "../src/assets/projects/project_four.jpg",
            },
          },
        ],
      },
      project_videos: {
        data: [
          {
            attributes: {
              url: "https://www.youtube.com/embed/5oEKk9vtrds?si=-VmO9wnyY9BoAgmU",
            },
          },
        ],
      },
    },
  },
];
const Projects = () => {
  return (
    <>
      {data ? (
        <ProjectsHeroSection data={data} />
      ) : (
        <ProjectsHeroSectionSkeleton />
      )}
    </>
  );
};

export default transition(Projects);
