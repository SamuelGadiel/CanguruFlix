import { useState } from 'react';

export function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(data) {
    const { name, value } = data.target;
    setValue(
      name,
      value,
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
