import React, { useState, useEffect } from 'react';
import { Controller, Control, FieldErrors, FieldError } from 'react-hook-form';

interface TaxNumberInputProps {
  control: Control<any>;
  name: string;
  errors: FieldErrors<any>;
}

const TaxNumberInput: React.FC<TaxNumberInputProps> = ({ control, name, errors }) => {
  const [formattedValue, setFormattedValue] = useState('');

  const formatTaxNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    const formatted = digits.replace(/(\d{8})(\d{1})(\d{2})/, '$1-$2-$3');

    return formatted;
  };

  const handleInputChange = (value: string, onChange: (value: string) => void) => {
    const unformattedValue = value.replace(/\D/g, '').substring(0, 11);
    const formatted = formatTaxNumber(unformattedValue);
    setFormattedValue(formatted);
    onChange(unformattedValue);
  };

  useEffect(() => {
    setFormattedValue('');
  }, []);

  const getErrorMessage = (fieldError: FieldError | undefined): string => {
    return fieldError ? fieldError.message || '' : '';
  };

  return (
    <div className="form-group mb-3 mt-3">
      <label htmlFor={name}>Adószám</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: 'Ez a menző nem lehet üres.',
          minLength: {
            value: 11,
            message: 'Adószám legalább 11 karakter.',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            type="text"
            id={name}
            value={formattedValue || formatTaxNumber(value || '')}
            placeholder="11111111-1-11"
            onChange={(e) => handleInputChange(e.target.value, onChange)}
            onBlur={onBlur}
            className={`form-control custom-input ${errors[name] ? 'is-invalid' : ''}`}
          />
        )}
      />
      {errors[name] && (
        <div className="invalid-feedback">{getErrorMessage(errors[name] as FieldError)}</div>
      )}
    </div>
  );
};

export {
  TaxNumberInput
};

