import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({
  id,
  value,
  handleChange,
  name,
  label,
  options = [],
  ...props
}) => {
  return (
    <FormControl fullWidth sx={{ color: '#000' }}>
      <InputLabel id={id} sx={{ color: '#000' }}>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
        labelId={id}
        id={id}
        multiple={props.multiple}
        sx={{
          color: '#000',
          backgroundColor: '#fff',  // ✅ white background
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000'     // ✅ black border
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000'
          }
        }}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem
            key={typeof option === 'string' ? option : index}
            value={option}
            //sx={{ color: '#000' }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
