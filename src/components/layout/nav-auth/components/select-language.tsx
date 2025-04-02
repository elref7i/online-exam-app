import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * A functional component that provides a language selection dropdown.
 *
 * @component
 * @example
 * return (
 *   <SelectLanguage />
 * )
 *
 * @returns `JSX.Element` The SelectLanguage component allowing users to choose a language.
 */

export default function SelectLanguage() {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>English</SelectLabel>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Arabic">Arabic</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
