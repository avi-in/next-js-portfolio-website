export const calculateExperience=(joiningDateStr:string) =>{
  // logic to calculate exp
  const joiningDate:Date = new Date(joiningDateStr);
  const today:Date = new Date();

  let years = today.getFullYear() - joiningDate.getFullYear();
  let months = today.getMonth() - joiningDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
   const totalMonths = years * 12 + months;
   return (totalMonths/12).toFixed(1)+" Yrs";

}
