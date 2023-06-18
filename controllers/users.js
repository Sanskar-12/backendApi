import Users from "../models/userModel.js";

export const getalluser = async (req, res) => {
  const users = await Users.find({});

  res.status(201).json({
    success: true,
    users: users,
  });
};

export const specialuserid = (req, res) => {
  res.json({
    success: true,
    message: "NICE WORK",
  });
};

export const newuser = async (req, res) => {
  const { name, email, password } = req.body;
  await Users.create({
    name: name,
    email: email,
    password: password,
  });
  res.status(201).cookie("token", "nice").json({
    success: true,
    message: "Registered Succesfully",
  });
};

export const userid = async (req, res) => {
  const { id } = req.params;
  const users = await Users.findById(id);
  res.status(201).json({
    success: true,
    users: users,
  });
};


export const updateuser = async (req, res) => {
    const { id } = req.params;
    await Users.findById(id);
    res.status(201).json({
      success: true,
      message:"Updated User"
    });
  };
  

  export const deleteuser = async (req, res) => {
    const { id } = req.params;
    await Users.findById(id);
    res.status(201).json({
      success: true,
      message:"Deleted User"
    });
  };

