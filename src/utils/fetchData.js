export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c73ca3be90msh229e8372e1b676cp1a96bcjsn228c93624fc7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c73ca3be90msh229e8372e1b676cp1a96bcjsn228c93624fc7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
