import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import useHover from "hooks/useHover";

const styles = {
  anchor: `
    w-full
    flex 
    items-center
    space-x-6
    font-medium
    text-base
    transition
    duration-200
    ease-in-out
     `,
};

const withHover = (WrappedComponent) => {
  function WithHover(props) {
    const { path, title, label } = props;
    const router = useRouter();
    const pageUrl = router.pathname;
    const { ref, isHover } = useHover();

    return (
      <Link href={path}>
        <a ref={ref} title={title} className={`${styles.anchor} `}>
          <WrappedComponent isHover={isHover || pageUrl === path} />
          <span className={`${isHover ? " text-nav-400" : " text-nav-300"}`}>
            {label}
          </span>
        </a>
      </Link>
    );
  }

  WithHover.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };
  WithHover.defaultProps = {
    path: "/#",
  };
  return WithHover;
};
export default withHover;
