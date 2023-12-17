const soma = (req, res) => {
  const soma = 96 + 1;

  res.send({soma: soma});
};

module.exports = { soma };