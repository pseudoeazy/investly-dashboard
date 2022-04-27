import { Search } from "assets/icons";
import ListingCard from "components/listing-card";
import listings from "data/listings";

const styles = {
  header: `
  w-full flex items-center justify-between`,
  form: `
  w-[14.9375rem] h-10 
  flex items-center  
  pl-4 pr-[14.34px] py-[0.8125rem] 
  rounded-[2rem] border`,
  input: `
  block w-[161px] h-[14px] 
  mr-8 font-sm font-medium
  placeholder:font-sm 
  placehoder:text-placeholder
   placeholder-gray-300
  transition
  duration-500
  ease-in-out
  transform
  border border-transparent
  focus:outline-none
  focus:border-transparent
  focus:ring-2
  focus:ring-white
  focus:ring-offset-2
  focus:ring-offset-gray-300`,
};

const Listing = () => {
  return (
    <section className="w-full flex flex-col items-center mt-8 ">
      <header className={styles.header}>
        <h2 className="font-semibold text-summary-100 text-base">
          Your favorites
        </h2>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Try Miami beachhouse"
          />
          <button type="button">
            <Search />
          </button>
        </form>
      </header>
      <section className="grid grid-cols-3 gap-x-6 gap-y-5 mt-6 ">
        {listings.map((listing, idx) => (
          <ListingCard key={idx} {...listing} />
        ))}
      </section>
    </section>
  );
};

export default Listing;
