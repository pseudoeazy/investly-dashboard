import { useRouter } from "next/router";
import styled from "styled-components";
import withHover from "components/hocs/with-hover";
import navMenu from "constants/nav-menu";

const classes = {
  li: `
  h-12 flex items-center justify-center 
  pl-[1.5625rem] py-[0.9375rem] snap-center
  hover:bg-nav-100 hover:border-r-4 hover:border-nav-200
  transition duration-200 ease-in-out`,
};

const Nav = styled.nav`
  & li:nth-child(8) {
    margin-top: 21.125rem !important;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const pageUrl = router.pathname;

  return (
    <Nav>
      <ul className="flex flex-col space-y-2 snap-y">
        {navMenu.map(({ icon: Icon, path, ...rest }, idx) => {
          const IconComponent = withHover(Icon);
          return (
            <li
              key={idx}
              className={`${classes.li} ${
                pageUrl === path && "bg-nav-100 border-r-4 border-nav-200"
              }`}
            >
              <IconComponent path={path} {...rest} />
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navbar;
