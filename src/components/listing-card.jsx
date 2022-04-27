import Image from "next/image";
import Link from "next/link";
import { LocationPointer, BedRooms, Villa } from "assets/icons";

const styles = {
  container: `
  h-[26.125rem] p-6
  rounded-xl border`,
  viewListing: `
  flex items-center justify-center w-[19.0625rem] h-[3.25rem] 
  rounded-[2.25rem] text-sm  font-medium border
  text-link
  hover:text-nav-200
  transition duration-200 ease-in-out
  `,
};
const ListingCard = ({ title, content, imgUrl }) => {
  return (
    <div className={styles.container}>
      <figure>
        <Image alt={title} width={312} height={157} src={imgUrl} />
      </figure>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-header">{title}</h3>
        <div className="mt-2 font-normal text-xs text-nav-300">{content}</div>
        <div className="flex space-x-[17.33px] mt-6 text-xs font-normal text-nav-300">
          <div className="flex items-center">
            <LocationPointer />
            <span className="ml-[11.33px]">Boston</span>
          </div>
          <div className="flex items-center">
            <BedRooms />
            <span className="ml-[9.33px]">5 bedroom</span>
          </div>
          <div className="flex items-center">
            <Villa />
            <span className="ml-[9.33px]">Villa</span>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/#">
            <a className={styles.viewListing}>View listing details</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
