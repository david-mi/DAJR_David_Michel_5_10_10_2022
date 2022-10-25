export const sortCallbacks = {
  date(a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
  },
  popularity(a, b) {
    return b.likes - a.likes;
  },
  title(a, b) {
    return a.title.localeCompare(b.title);
  }
};