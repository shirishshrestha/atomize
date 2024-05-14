import {
  Chat,
  Clip,
  Download,
  Eye,
  Heart,
  Mail,
  Pencil,
  Play,
  Plus,
} from "../../assets/Svg";
import {
  Button,
  Heading,
  Input,
  Navbar,
  Text,
} from "../../components/Components";

const Hero = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="pt-[5.5rem]">
        <Heading
          as={"h1"}
          className="leading-[56px] text-[46px] text-center font-[600] mb-[1rem]"
        >
          Design System for React JS
        </Heading>
        <div className="flex items-center justify-center">
          <Heading
            className=" text-[#505256] leading-[30px] text-[17px] font-[400] max-w-[36rem] mb-[2.5rem] text-center"
            as={"h2"}
          >
            Atomize React is a UI framework that helps developers collaborate
            with designers and build consistent user interfaces effortlessly.
          </Heading>
        </div>
        <div className="flex justify-center items-center gap-[1rem] flex-col md:flex-row  ">
          <Button className="bg-[#0284FE] px-[2rem] hover:bg-[#4BA7FE] h-[3rem] w-full md:w-auto text-[white]">
            Get Started Now
          </Button>
          <Button className="flex gap-[0.5rem] h-[3rem]  px-[2rem] border  w-full md:w-auto border-[#C9CED6] hover:bg-[#F8F9FA] text-[#4E5D78] ">
            <Play color={"#4E5D78"} />
            Watch Video
          </Button>
        </div>
        <div className="pt-[6rem] flex flex-col md:!flex-row items-center justify-center gap-[1.5rem] pb-[2rem] ">
          <div className="h-full flex flex-col gap-[1.5rem] w-full md:w-auto">
            <div className="flex gap-[14px] items-center justify-center">
              <Heart classname="icons" color="#F4541D" />
              <Eye classname="icons" color="#0284FE" />
              <Pencil classname="icons" color="#F7AF22" />
              <Clip classname="icons" color="#36AB80" />
              <Play classname="icons" color="#F4541D" />
              <Download classname="icons" color="#0284FE" />
            </div>
            <div className=" !pt-[2.5rem] p-[1.5rem] flex items-center flex-col justify-center shadow-2xl rounded-lg h-full ">
              <div className="relative">
                <img src="/megan.png" className="rounded-full" alt="image" />
                <div className="bg-[#23825F] absolute w-[6px] h-[6px] rounded-full right-[0.6rem] bottom-[0.5rem] "></div>
              </div>
              <Text className="mt-[1rem] text-[22px] leading-[32px] font-[500] mb-[0.25rem]">
                Meagan Fisher
              </Text>
              <Text className="text-[#A7AAB0] text-[12px] leading-[20px] mb-[2.5rem] text-center">
                Engineering Manager
              </Text>
              <div className="flex w-full gap-[1rem] items-center justify-center">
                <Button className="bg-[#0284FE] text-white flex gap-4 !rounded-3xl hover:bg-[#026DD6]">
                  Follow
                  <Plus color="#FFFFFF" />
                </Button>
                <Button className="flex  gap-[1rem] border border-[#C9CED6] !rounded-3xl">
                  Message
                  <Chat color="#4E5D78" />
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:!flex gap-[1.5rem] flex-col ">
            <div className=" shadow-2xl rounded-lg">
              <img
                src="/sea.png"
                alt=""
                className="w-[17rem] h-[14rem] object-cover rounded-t-lg"
              />
              <div className="p-[1rem] flex gap">
                <div className="flex gap-[1rem]">
                  <img
                    src="/megan.png"
                    alt=""
                    className="h-[1.5rem] w-[1.5rem] rounded-full "
                  />
                  <Text className="text-[14px] font-[500] leading-[24px] ">
                    Meagan Fisher
                  </Text>
                </div>
              </div>
            </div>
            <div className="p-[1rem] shadow-2xl rounded-b-lg flex">
              <img
                src="/uiux.png"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-full mr-[1rem] "
              />
              <div>
                <Text className="font-[500] text-[14px] leading-[24px] ">
                  John Doe
                </Text>
                <Text className=" text-[#A7AAB0] leading-[20px] text-[12px]">
                  UI/UX Designer
                </Text>
              </div>
            </div>
          </div>
          <div className="shadow-2xl p-[2rem] rounded-lg w-full md:w-auto">
            <Heading
              className="leading-[32px] text-[22px] my-[0.5rem] text-center font-[500] "
              as="h5"
            >
              Login into your account
            </Heading>
            <Text className="mb-[4rem] text-[#A7AAB0] text-[12px] leading-[20px] text-center ">
              Don't have an account yet?
              <span className="text-[#0284FE] font-[500] "> Create New</span>
            </Text>
            <Input
              suffix={<Mail />}
              placeholder="johndoe@gmail.com"
              className="mb-[1rem]"
            />
            <Input
              suffix={<Eye color="#9e9d9d" />}
              placeholder="Password"
              className="mb-[3rem]"
            />
            <Button className="bg-[#EEF7FF] w-full !rounded-3xl text-[#0284FE] hover:bg-[#DCEEFF]">
              Login
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
