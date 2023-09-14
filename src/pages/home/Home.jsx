import homeImage from "./homeLanding.svg";
import Button from "../../ui/Button";
export default function Home() {
  return (
    <section>
      <div className="flex h-[85vh] max-h-[700px] flex-col-reverse items-center justify-end gap-4 pt-4 md:flex-row md:justify-between md:gap-20">
        <div>
          <h1 className="mb-6 text-4xl font-bold md:mb-8 md:text-5xl">
            <span className="block text-green">ShopCraze</span> making your
            shopping very easy
          </h1>
          <p className="mb-6 max-w-sm text-justify font-semibold text-gray-500 md:mb-8">
            With us your shopping become faster than before and don't worry
            about your order and yrou location we are doing everything for you
            just buy from us and you will be happy
          </p>
          <Button to="/signup">Start Shop</Button>
        </div>
        <div className="w-32 md:w-[500px]">
          <img src={homeImage} alt="landImage" />
        </div>
      </div>
    </section>
  );
}
