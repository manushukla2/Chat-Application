import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation } = useConversation();
  return (
    <div
      className={`border-r border-slate-500 p-4 flex-col ${
        selectedConversation ? "hidden sm:flex" : "flex"
      }`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
