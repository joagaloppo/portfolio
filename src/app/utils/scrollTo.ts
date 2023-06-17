const scrollTo = (id: string) => {
  const scrollTo = document.getElementById(id);
  scrollTo && scrollTo.scrollIntoView({ behavior: "smooth" });
};

export default scrollTo;
