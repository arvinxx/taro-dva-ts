export const action = (type, payload?) => ({ type, payload });

export const delay = function(time) {
  return new Promise(function(r) {
    setTimeout(r, time);
  });
};
