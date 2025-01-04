import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import CategoriesService from '../services/CategoriesService.js';

import Select from './Select.jsx';
import FormGroup from './FormGroup/FormGroup.jsx';

export function CategoriesSelect({
  value,
  onChange,
  error,
  placeholder = 'Selecione uma categoria',
}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const categoriesList = await CategoriesService.fetchCategories();
        setCategories(categoriesList);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <FormGroup error={error} isLoading={isLoading}>
      <Select value={value} onChange={onChange} disabled={isLoading}>
        <option value="">{placeholder}</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </FormGroup>
  );
}

CategoriesSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};
