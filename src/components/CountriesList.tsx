// Custom Components
import CountryCard from "./CountryCard";
import CountrySkeleton from "./skeletons/CountrySkeleton";

// Types
import { Country } from "./hooks/useCountries";
import { MotionType } from "../App";
type CountriesListProps = {
  isDarkMode: boolean;
  displayedCountries: Country[];
  isLoading: boolean;
  motion: MotionType;
  currentPage: number;
  pageSize: number;
};

const CountriesList = ({
  isDarkMode,
  displayedCountries,
  isLoading,
  motion,
  currentPage,
  pageSize,
}: CountriesListProps) => {
  const startIndex = (currentPage - 1) * pageSize;

  const slicedCountries = displayedCountries.slice(
    startIndex,
    startIndex + pageSize,
  );

  if (isLoading) {
    return (
      <div className="container grid grid-cols-main-grid place-content-center gap-5 md:gap-[77px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <CountrySkeleton key={index} isDarkMode={isDarkMode} />
        ))}
      </div>
    );
  }

  return (
    <motion.section
      className={`countries-list container text-sm ${
        displayedCountries?.length && "grid"
      } place-content-center gap-12 md:grid-cols-alt-grid md:gap-[77px] xl:grid-cols-main-grid`}
    >
      <h2 className="sr-only">Countries</h2>
      {displayedCountries?.length &&
        slicedCountries.map((country, index) => (
          <CountryCard key={index} country={country} motion={motion} />
        ))}
    </motion.section>
  );
};

export default CountriesList;
