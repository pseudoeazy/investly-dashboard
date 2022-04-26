import { Bell, Search } from "assets/icons";
import useHover from "hooks/useHover";

const Icon = ({ icon: Icon }) => {
  const { ref, isHover } = useHover();
  return (
    <span
      ref={ref}
      role="button"
      className="flex items-center justify-center h-10 w-10 border rounded-full"
    >
      <Icon isHover={isHover} />
    </span>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-semibold text-[1.75rem] text-header">
        Your dashboard
      </h1>
      <div className="flex space-x-3">
        <Icon icon={Bell} />
        <Icon icon={Search} />
      </div>
    </header>
  );
};

export default Header;
