export const genuses = ['citrus', 'prunus', 'malus', 'rubus', 'fragaria'];
export const families = ['rosaceae', 'rutaceae', 'actinidiaceae', 'musaceae', 'cucurbitaceae'];

const nutrientOptionsHighToLow = [
  { value: 'carbohydrates', label: 'Carbohydrates', order: 'highToLow' },
  { value: 'protein', label: 'Protein', order: 'highToLow' },
  { value: 'fat', label: 'Fat', order: 'highToLow' },
  { value: 'calories', label: 'Calories', order: 'highToLow' },
  { value: 'sugar', label: 'Sugar', order: 'highToLow' },
];

const nutrientsOptionsLowToHigh = [
  { value: 'carbohydrates_lh', label: 'Carbohydrates', order: 'lowToHigh' },
  { value: 'protein_lh', label: 'Protein', order: 'lowToHigh' },
  { value: 'fat_lh', label: 'Fat', order: 'lowToHigh' },
  { value: 'calories_lh', label: 'Calories', order: 'lowToHigh' },
  { value: 'sugar_lh', label: 'Sugar', order: 'lowToHigh' },
];

export const groupedOptions = [
  {
    label: 'Nutrients: High to Low',
    options: nutrientOptionsHighToLow,
  },
  {
    label: 'Nutrients: Low to High',
    options: nutrientsOptionsLowToHigh,
  },
];
