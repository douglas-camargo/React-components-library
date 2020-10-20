export const reducirDescripcion = (descripcion) => {
    const separaCaracteres = descripcion.split("");
    const numeroCaracteres = separaCaracteres.length;
    if (numeroCaracteres > 80) {
      const resto = numeroCaracteres-80
      separaCaracteres.splice(80, resto, ".", ".",".");
    return separaCaracteres.toString().replace(/,/g, "");
    }
      return separaCaracteres.toString().replace(/,/g, "");
      
  };