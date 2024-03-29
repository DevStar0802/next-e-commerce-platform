import React, { ChangeEvent, useState } from 'react';
import { Button } from '@/components/molecules/Button';
import Modal from '@/components/molecules/Modal';
import Input from '@/components/molecules/Inputs';

const Lookbook = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Add lookbook
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Name this lookbook">
        <Input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          label="Lookboo name"
        />
        <Button size="lg" className="!max-w-[200px] mt-8">
          Upload a pdf file
        </Button>
      </Modal>
    </div>
  )
}

export default Lookbook;
