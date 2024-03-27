export function filterByName(list:any, term: string) {
  return list.filter((item:any) => {
    const nameLower = item.name.toLowerCase();
    const termLower = term.toLowerCase();
    return nameLower.includes(termLower);
  });
}


