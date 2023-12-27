import { FC, ChangeEvent } from "react";

interface DropdownProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ label, options, onChange }) => {
  return (
    <div className="category-wrapper">
      <label htmlFor={label}>{label}:</label>
      <select
        id={label}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
