exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.juryBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.participantBoard = (req, res) => {
  res.status(200).send("Participant Content.");
};