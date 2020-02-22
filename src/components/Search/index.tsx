import React, { useState } from 'react';

import {
  Container,
  Form,
  InputContainer,
  Input,
  Button,
  InvalidMessage,
} from './styles';

const Search: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsInvalid(false);

    const rgx = /^([0-9]{5})-([0-9]{3})$/;

    if (!rgx.test(value)) {
      setIsInvalid(true);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} data-testid="form">
        <InputContainer>
          <Input
            type="tel"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            name="postalCode"
            placeholder="CEP"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            data-testid="postalCode"
          />
          <Button>
            <i className="fa fa-search"></i>
          </Button>
        </InputContainer>
        {isInvalid && (
          <InvalidMessage data-testid="invalidPostalCode">
            CEP inválido
          </InvalidMessage>
        )}
      </Form>
    </Container>
  );
};

export default Search;
