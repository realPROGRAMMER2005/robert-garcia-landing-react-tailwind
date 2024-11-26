export function capitalize(string) {
    if (!string) return ""; // Проверка на пустую строку
    return string.charAt(0).toUpperCase() + string.slice(1);
}