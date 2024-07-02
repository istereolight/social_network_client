import React from 'react'
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Button, Link } from '@nextui-org/react';
Link


type Register = {
  email: string;
  name: string;
  password: string
}

type Props = {
  setSelected: (value: string) => void;
}

export const Register: React.FC<Props> = ({
  setSelected
}) => {

  const{ 
    handleSubmit,
    control,
    formState: { errors }
   } = useForm<Register>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  });

  const onSubmit = async (data: Register) => {
    try {
      
    } catch (error) {

    }
  }

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <Input 
          control={control}
          name='email'
          label='Email'
          type='email'
          required='Обязательное поле'
        />
        <Input 
          control={control}
          name='password'
          label='Пароль'
          type='password'
          required='Обязательное поле'
        />

        <p className="text-center text-small">
          Нет аккаунта?{" "}
          <Link
          size='sm'
          className='cursor-pointer'
          onPress={() => setSelected('sign-up')}
          >
            Зарегистрируйтесь
          </Link>
        </p> 
        <div className='flex gap-2 justify-end'>
          <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
            Войти
          </Button>
        </div>              
      </form>

    </div>
  )
}