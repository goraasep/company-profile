const randomRole = () => {
  const jobRoles: string[] = [
    "Software Developer",
    "Data Scientist",
    "Graphic Designer",
    "Product Manager",
    "Marketing Specialist",
  ];
  return jobRoles[Math.floor(Math.random() * jobRoles.length)];
};
export default randomRole;
