export type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  placeholder: string
}