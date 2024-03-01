export function capitalizeFirstLetter(text: string): string {
  const newText = text[0].toUpperCase() + text.substring(1);
  return newText;
}
