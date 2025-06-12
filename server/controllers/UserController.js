import userModel from "../models/userModal.js";
import { Webhook } from "svix";

// API Controller Function for Managing Clerk User with Database
// https://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
  try {
    // Create a Webhook instance from svix
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkID: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        res.json({ success: true, message: "User created" });
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkID: data.id }, userData);
        res.json({ success: true, message: "User updated" });
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkID: data.id });
        res.json({ success: true, message: "User deleted" });
        break;
      }

      default: {
        res.json({ success: true, message: "Webhook received" });
      }
    }
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };
