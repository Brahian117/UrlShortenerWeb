import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="p-4 bg-bg-input">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} className="w-10 h-10 invert" />
        <span className="text-white font-bold text-3xl  tracking-wide">SHORTY URL</span>
      </div>
    </header>
  );
};
