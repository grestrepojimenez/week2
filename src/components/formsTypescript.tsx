
import { useState, ChangeEvent } from 'react'

interface FormState {
  name: string;
}


export const MyForm = () => {

  const [formState, setFormState] = useState<FormState>({
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ name: e.target.value })
  }

  return (
    <form>
      <input type="text"
        value={formState.name}
        onChange={handleChange}
      />
    </form>
  )
}