import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div
      className="flex h-[80vh] rounded-lg overflow-hidden bg-white bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl"
    >
      
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
