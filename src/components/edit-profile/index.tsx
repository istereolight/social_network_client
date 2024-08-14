import React, { useContext, useState } from 'react'
import { User } from '../../app/types';
import { ThemeContext } from '../theme-provider';
import { useUpdateUserMutation } from '../../app/services/userApi';
import { useParams } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user?: User
}

export const EditProfile: React.FC<Props> = ({
  isOpen,
  onClose,
  user
}) => {
  const { theme } = useContext(ThemeContext)
  const [ updaUser, { isLoading }] = useUpdateUserMutation();
  const [error, serError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { id } = useParams<{id: string}>();

  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: user?.email,
      name: user?.name,
      dateOfBirth: user?.dateOfBirth,
      bio: user?.bio,
      location: user?.location
    }
  })
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={`${theme} text-foreground`}
    >
      <ModalContent>
        {
          (onClose) => (
            <ModalHeader className='flex flex-col gap-1'>
              Изменение профиля
            </ModalHeader>
          )
        }
      </ModalContent>
    </Modal>
  )
}
