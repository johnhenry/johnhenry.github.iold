export const createMultiply = (add, multiply)=>(alpha, beta)=>{
  // works for alpha 2x2 beta 2x1 matrices;
  // TODO: expand for generic matrix multiplication
  const [[a,b], [c,d]] = alpha;
  const [[e],[f]] = beta;
  const h = add(multiply(a, e), multiply(b, f));
  const i = add(multiply(c, e), multiply(d, f));
  return [[h],[i]];
};

export const createKronickerProduct = (multiply)=>(alpha, beta)=>{
  // TODO: Do
  return [];
};