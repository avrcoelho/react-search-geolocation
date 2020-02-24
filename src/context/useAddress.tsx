import React, { createContext, useState, useContext } from 'react';

interface IContext {
  dataAddress: string | null;
  setDataAddress: Function;
}

const AddressContext = createContext<IContext>({
  dataAddress: null,
  setDataAddress: Function,
});

const AddressProvider: React.FC = ({ children }) => {
  const [dataAddress, setDataAddress] = useState<string | null>(null);

  return (
    <AddressContext.Provider
      value={{
        dataAddress,
        setDataAddress,
      }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;

export function useAddress() {
  const context = useContext(AddressContext);

  if (!context) throw new Error('useCount must be used within a CountProvider');

  const { dataAddress, setDataAddress }: IContext = context;

  return {
    dataAddress,
    setDataAddress,
  };
}
