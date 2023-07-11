
import React, { createContext, useContext, useState } from 'react';

interface UploadContextProps {
  uploadedFiles: string;
  setUploadedFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

export const UploadContext = createContext<UploadContextProps>({
  uploadedFiles:"",
  setUploadedFiles: () => {},
});

export const UploadContextProvider: React.FC = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState("");

  return (
    <UploadContext.Provider value={{ uploadedFiles, setUploadedFiles }}>
      {children}
    </UploadContext.Provider>
  );
};