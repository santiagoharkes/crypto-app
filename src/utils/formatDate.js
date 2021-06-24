export const formatDate = (date) => {
  const fecha = new Date(date);
  console.log(fecha);
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  const year = fecha.getFullYear();
  return `${dia}/${mes}/${year}`;
};
