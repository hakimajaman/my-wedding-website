const pagination = (arr, thisPage, thisGet) => {
  const page = Number(thisPage);
  const get = Number(thisGet);
  const totalPages = Math.ceil(arr.length / get);
  if (page === 1 || !page) {
    const data = arr.slice(0, get);
    return {
      data,
      totalPages,
      page,
    };
  } else {
    const data = arr.slice((page - 1) * get, page * get);
    return {
      data,
      totalPages,
      page,
    };
  }
};

module.exports = pagination;
