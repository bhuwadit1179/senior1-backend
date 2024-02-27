const { auth, firestore } = require("../firebase/config");
const getRegisterContoller = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_number = req.body.phone_number;
  const email = req.body.email;

  if (!first_name || !last_name || !phone_number || !email) {
    res.status(400).json({
      status_code: 400,
      message: "Bad request",
    });
  }
  try {
    const create_account = await auth.createUser({
      email: email,
      emailVerified: false,
      password: `${first_name}1234`,
    });
    // console.log(create_account);
    if (!create_account.uid) {
      return res.status(500).json({
        status_code: 500,
        message: "Internal Server Error",
      });
    }

    const createDoc = await firestore
      .collection("user")
      .doc(create_account.uid)
      .set({
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        email: email,
      });
    return res.status(201).json({
      status_code: 201,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status_code: 500,
      message: error.message,
    });
  }
};

module.exports = { getRegisterContoller };
