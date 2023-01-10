import { ResultsListItem } from "./ResultsListItem";
type ResultsListProps = {
  results?: resultsList;
};

type resultsListItem = {
  name?: string;
  address?: string;
  rating?: number;
};
type resultsList = Array<resultsListItem>;

function ResultsList({ results }:ResultsListProps) {
  return results?.length ? (
    <ul className="results">
      {results.map(({ name, address, rating }) => (
        <ResultsListItem rating={rating} address={address} name={name} />
      ))}
    </ul>
  ) : null;
}
export default ResultsList;
