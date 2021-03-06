import React, { useState } from 'react';

import { useAddress } from '../../context/useAddress';
import { apiViaCep } from '../../services/api';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const { setDataAddress } = useAddress();

  async function getAddress() {
    try {
      setLoading(true);

      const { data } = await apiViaCep.get(`/${value}/json`);

      setLoading(false);

      if (data.erro) {
        setError('CEP não encontrado');
        return;
      }

      setDataAddress(data);
    } catch (err) {
      setLoading(false);
      setError('Erro ao obter o endereço');
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const rgx = /^([0-9]{5})-([0-9]{3})$/;

    if (!rgx.test(value)) {
      setError('CEP inválido');
    } else {
      getAddress();
    }
  }

  return (
    <Container data-testid="container-search">
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
            {loading ? (
              <i className="fa fa-spinner fa-pulse" data-testid="loading" />
            ) : (
              <i className="fa fa-search"></i>
            )}
          </Button>
        </InputContainer>
        {error && (
          <InvalidMessage data-testid="invalidPostalCode">
            {error}
          </InvalidMessage>
        )}
      </Form>
    </Container>
  );
};

export default Search;
