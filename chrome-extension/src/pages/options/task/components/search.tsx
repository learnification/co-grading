import { Input } from "@src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (status: string) => void;
}

const SearchAndFilter = ({ onSearch, onFilter }: SearchAndFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
      <Input
        placeholder="Search by student name"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full md:w-1/3"
      />
      {/* <Select
        onValueChange={(value) => onFilter(value)}
        // className="w-full md:w-1/4"
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="graded">Graded</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="failed">Failed</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
};

export default SearchAndFilter;
