const {getAllUser, getUserById, createUser,updateUser, deleteUser} = require("../services/user.services");
class TestUser {
    getAllTestUser = async (req, res) => {
        try {
          const blogs = await getAllUser();
          res.json({ data: blogs, status: "success" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
      createTestUser = async (req, res) => {
        try {
          const blog = await createUser(req.body);
          res.json({ data: blog, status: "success" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
       
      getTestUserById = async (req, res) => {
        try {
          const blog = await getUserById(req.params.id);
          res.json({ data: blog, status: "success" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
       
      updateTestUser = async (req, res) => {
        try {
          const blog = await updateUser(req.params.id, req.body);
          res.json({ data: blog, status: "success" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
       
      deleteTestUser = async (req, res) => {
        try {
          const blog = await deleteUser(req.params.id);
          res.json({ data: blog, status: "success" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
};
module.exports =new TestUser()