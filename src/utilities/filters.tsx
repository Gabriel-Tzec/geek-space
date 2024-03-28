export function filterByName(list: any, term: string) {
  return list.filter((item: any) => {
    const nameLower = item.name.toLowerCase();
    const termLower = term.toLowerCase();
    return nameLower.includes(termLower);
  });
}

export function excludeItemsExist(items: any, characterNames: string[]) {
  return items.filter((item:any) => !characterNames.includes(item.name));
}
