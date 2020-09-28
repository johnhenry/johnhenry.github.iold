export default class extends Error{
  constructor(message, val){
    super(message);
    this.val = val;
  }
};
