import Header from "./components/Header";
import FirstContent from "./components/PageComponents/home/FirstContent";
import SecondContent from "./components/PageComponents/home/SecondContent";
import ThirdContent from "./components/PageComponents/home/ThirdContent";
export default function Home() {
  return (
    <div className="mt-[65px] lg:mt-[86px]">
        <Header
            title="Villa Miami Residence"
            description="a major food group residential experience"
            image="/45-scaled.webp"
            home
        />
        <FirstContent />
        <SecondContent />
        <ThirdContent />
    </div>
  );
}
