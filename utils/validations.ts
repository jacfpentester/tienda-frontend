export const isValidEmail = (Email: string): boolean => {
  
    const match = String(Email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  
  export const isEmail = (Email: string): string | undefined => {
    return isValidEmail(Email) 
      ? undefined
      : 'El correo no parece ser válido';
  }